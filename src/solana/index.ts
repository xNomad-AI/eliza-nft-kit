import { S3Client } from '@aws-sdk/client-s3';
import {
  create,
  createCollection,
  fetchCollection,
  mplCore,
  ruleSet,
} from '@metaplex-foundation/mpl-core';
import {
  createSignerFromKeypair,
  keypairIdentity,
  publicKey,
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

export class NftTool {
  private umi: Umi;
  private sendAndConfirmOptions: TransactionBuilderSendAndConfirmOptions;

  constructor(
    endpoint: string,
    keypairOrWalletAdapter: Keypair | WalletAdapter,
  ) {
    if (keypairOrWalletAdapter instanceof Keypair) {
      this.umi = createUmi(endpoint)
        .use(mplCore())
        .use(
          keypairIdentity({
            secretKey: keypairOrWalletAdapter.secretKey,
            publicKey: publicKey(keypairOrWalletAdapter.publicKey),
          }),
        );
    } else {
      this.umi = createUmi(endpoint)
        .use(mplCore())
        .use(walletAdapterIdentity(keypairOrWalletAdapter));
    }
    this.sendAndConfirmOptions = {
      confirm: { commitment: 'confirmed' },
    };
  }

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

  async createNft({
    name,
    uri,
    asset = Keypair.generate(),
    collectionAddress,
  }: {
    name: string;
    uri: string;
    asset?: Keypair;
    collectionAddress: PublicKey;
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
