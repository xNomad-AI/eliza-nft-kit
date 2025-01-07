import { S3Client } from '@aws-sdk/client-s3';
import {
  create,
  createCollection,
  fetchCollection,
  mplCore,
  ruleSet,
} from '@metaplex-foundation/mpl-core';
import {
  addConfigLines,
  create as createCandyMachine,
  MAX_NAME_LENGTH,
  MAX_URI_LENGTH,
  mplCandyMachine,
} from '@metaplex-foundation/mpl-core-candy-machine';
import {
  createSignerFromKeypair,
  dateTime,
  keypairIdentity,
  lamports,
  publicKey,
  some,
  TransactionBuilderSendAndConfirmOptions,
  Umi,
} from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  WalletAdapter,
  walletAdapterIdentity,
} from '@metaplex-foundation/umi-signer-wallet-adapters';
import { awsUploader } from '@metaplex-foundation/umi-uploader-aws';
import { Keypair, PublicKey } from '@solana/web3.js';
import { MintStage } from '../types';

export class NftTool {
  private umi: Umi;
  private sendAndConfirmOptions: TransactionBuilderSendAndConfirmOptions;

  constructor(
    endpoint: string,
    keypairOrWalletAdapter: Keypair | WalletAdapter,
  ) {
    this.umi = createUmi(endpoint)
      .use(mplCore())
      .use(mplCandyMachine())
      .use(
        keypairOrWalletAdapter instanceof Keypair
          ? keypairIdentity({
              secretKey: keypairOrWalletAdapter.secretKey,
              publicKey: publicKey(keypairOrWalletAdapter.publicKey),
            })
          : walletAdapterIdentity(keypairOrWalletAdapter),
      );
    this.sendAndConfirmOptions = {
      confirm: { commitment: 'confirmed' },
    };
  }

  /**
   * Create a collection
   * @param collection - The collection keypair
   * @param name - The name of the collection
   * @param uri - The URI of the collection
   * @param royaltyBps - The royalty basis points
   * @returns The collection address
   */
  async createCollection({
    collection = Keypair.generate(),
    name,
    uri,
    royaltyBps,
  }: {
    collection?: Keypair;
    name: string;
    uri: string;
    royaltyBps?: number;
  }): Promise<{ collection: string }> {
    const collectionSigner = createSignerFromKeypair(this.umi, {
      secretKey: collection.secretKey,
      publicKey: publicKey(collection.publicKey),
    });

    const result = await createCollection(this.umi, {
      collection: collectionSigner,
      name,
      uri,
      plugins: royaltyBps
        ? [
            {
              type: 'Royalties',
              basisPoints: royaltyBps,
              creators: [
                {
                  address: publicKey(this.umi.identity.publicKey),
                  percentage: 100,
                },
              ],
              ruleSet: ruleSet('None'),
            },
          ]
        : undefined,
    }).sendAndConfirm(this.umi, this.sendAndConfirmOptions);

    return {
      collection: collectionSigner.publicKey.toString(),
    };
  }

  /**
   * Setup a collection, creating a candy machine.
   * @param collectionAddress - The collection address
   * @param candyMachine - The candy machine keypair
   * @param itemsCount - The number of items in the candy machine
   * @param mintStages - The mint stages
   * @returns The candy machine address
   */
  async setupCollection({
    collectionAddress,
    candyMachine = Keypair.generate(),
    itemsCount,
    mintStages,
  }: {
    collectionAddress: PublicKey | string;
    candyMachine?: Keypair;
    itemsCount: number;
    mintStages?: MintStage[];
  }) {
    const candyMachineSigner = createSignerFromKeypair(this.umi, {
      secretKey: candyMachine.secretKey,
      publicKey: publicKey(candyMachine.publicKey),
    });

    const createIx = await createCandyMachine(this.umi, {
      candyMachine: candyMachineSigner,
      collection: publicKey(collectionAddress),
      collectionUpdateAuthority: this.umi.identity,
      itemsAvailable: itemsCount,
      configLineSettings: {
        prefixName: '',
        nameLength: MAX_NAME_LENGTH,
        prefixUri: '',
        uriLength: MAX_URI_LENGTH,
        isSequential: true,
      },
      groups: mintStages?.length
        ? mintStages.map((stage, index) => ({
            label: stage.label,
            guards: {
              startDate: some({ date: dateTime(stage.startDate) }),
              endDate: stage.endDate && some({ date: dateTime(stage.endDate) }),
              solPayment: some({
                lamports: lamports(stage.priceInSol),
                destination: this.umi.identity.publicKey,
              }),
              mintLimit:
                stage.maxMintsPerWallet !== undefined
                  ? some({ id: index, limit: stage.maxMintsPerWallet })
                  : undefined,
            },
          }))
        : undefined,
    });
    await createIx.sendAndConfirm(this.umi, this.sendAndConfirmOptions);

    return {
      candyMachine: candyMachineSigner.publicKey.toString(),
    };
  }

  /**
   * Prepare collection items to be minted
   * @param candyMachine - The candy machine address
   * @param index - The index the first items will be loaded at
   * @param items - The items to be loaded
   * @returns The result of the transaction
   */
  async prepareCollectionItems({
    candyMachine,
    index,
    items,
  }: {
    candyMachine: PublicKey | string;
    index?: number;
    items: { name: string; uri: string }[];
  }) {
    const result = await addConfigLines(this.umi, {
      candyMachine: publicKey(candyMachine),
      index: 0,
      configLines: items.map((item) => ({ name: item.name, uri: item.uri })),
    }).sendAndConfirm(this.umi, this.sendAndConfirmOptions);

    return result;
  }

  /**
   * Create an NFT
   * @param name - The name of the NFT
   * @param uri - The URI of the NFT
   * @param asset - The asset keypair
   * @param collectionAddress - The collection address
   * @returns The asset address
   */
  async createNft({
    name,
    uri,
    asset = Keypair.generate(),
    collectionAddress,
  }: {
    name: string;
    uri: string;
    asset?: Keypair;
    collectionAddress: PublicKey | string;
  }): Promise<{ asset: string }> {
    const assetSigner = createSignerFromKeypair(this.umi, {
      secretKey: asset.secretKey,
      publicKey: publicKey(asset.publicKey),
    });

    const collection = await fetchCollection(
      this.umi,
      publicKey(collectionAddress),
    );

    const result = await create(this.umi, {
      asset: assetSigner,
      name,
      uri,
      collection,
    }).sendAndConfirm(this.umi, this.sendAndConfirmOptions);

    return {
      asset: assetSigner.publicKey.toString(),
    };
  }

  /**
   * Upload a JSON object to S3
   * @param json - The JSON object to upload
   * @param s3Config - The S3 configuration
   * @param s3Config.bucket - The S3 bucket
   * @param s3Config.accessKeyId - The S3 access key ID
   * @param s3Config.secretAccessKey - The S3 secret access key
   * @param s3Config.region - The S3 region
   * @returns The URL of the uploaded JSON
   */
  async uploadJsonToS3(
    json: object,
    s3Config: {
      bucket: string;
      accessKeyId: string;
      secretAccessKey: string;
      region: string;
    },
  ): Promise<string> {
    this.umi.use(
      awsUploader(
        new S3Client({
          credentials: {
            accessKeyId: s3Config.accessKeyId,
            secretAccessKey: s3Config.secretAccessKey,
          },
          region: s3Config.region,
        }),
        s3Config.bucket,
      ),
    );
    const url = await this.umi.uploader.uploadJson(json);
    return url;
  }
}
