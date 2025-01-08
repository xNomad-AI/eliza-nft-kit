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
  getMerkleRoot,
  MAX_NAME_LENGTH,
  MAX_URI_LENGTH,
  mplCandyMachine,
} from '@metaplex-foundation/mpl-core-candy-machine';
import {
  createSignerFromKeypair,
  dateTime,
  keypairIdentity,
  publicKey,
  sol,
  some,
  TransactionBuilderSendAndConfirmOptions,
  Umi,
} from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  WalletAdapter,
  walletAdapterIdentity,
} from '@metaplex-foundation/umi-signer-wallet-adapters';
import { Keypair, PublicKey } from '@solana/web3.js';
import { MintStage } from '../types';

/**
 * A class that provides methods to launch an AI-NFT collection on Solana.
 */
export class SolanaMCV {
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
   * Create an AI-NFT collection
   * @param collection - The collection keypair
   * @param name - The name of the collection
   * @param uri - The URI of the collection
   * @param royaltyBps - The royalty basis points. It means 5% if set to 500.
   * @param candyMachine - The candy machine keypair
   * @param itemsCount - The number of items in the candy machine
   * @param mintStages - The mint stages
   * @param items - All NFTs in the collection
   * @returns The collection and candy machine addresses
   */
  async createAiNftCollection({
    collection = Keypair.generate(),
    name,
    uri,
    royaltyBps,
    candyMachine = Keypair.generate(),
    itemsCount,
    mintStages,
    items,
  }: {
    collection?: Keypair;
    name: string;
    uri: string;
    royaltyBps?: number;
    candyMachine?: Keypair;
    itemsCount: number;
    mintStages?: MintStage[];
    items: { name: string; uri: string }[];
  }): Promise<{ collection: Keypair; candyMachine: Keypair }> {
    const collectionSigner = createSignerFromKeypair(this.umi, {
      secretKey: collection.secretKey,
      publicKey: publicKey(collection.publicKey),
    });

    await createCollection(this.umi, {
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

    const candyMachineSigner = createSignerFromKeypair(this.umi, {
      secretKey: candyMachine.secretKey,
      publicKey: publicKey(candyMachine.publicKey),
    });

    const createIx = await createCandyMachine(this.umi, {
      candyMachine: candyMachineSigner,
      collection: collectionSigner.publicKey,
      collectionUpdateAuthority: this.umi.identity,
      itemsAvailable: itemsCount,
      configLineSettings: some({
        prefixName: '',
        nameLength: MAX_NAME_LENGTH,
        prefixUri: '',
        uriLength: MAX_URI_LENGTH,
        isSequential: true,
      }),
      groups: mintStages?.length
        ? mintStages.map((stage, index) => ({
            label: stage.label,
            guards: {
              startDate: some({ date: dateTime(stage.startDate) }),
              endDate: stage.endDate && some({ date: dateTime(stage.endDate) }),
              solPayment: some({
                lamports: sol(stage.priceInSol),
                destination: this.umi.identity.publicKey,
              }),
              mintLimit:
                stage.maxMintsPerWallet !== undefined
                  ? some({ id: index, limit: stage.maxMintsPerWallet })
                  : undefined,
              allowList: stage.whitelist?.length
                ? some({ merkleRoot: getMerkleRoot(stage.whitelist) })
                : undefined,
            },
          }))
        : undefined,
    });
    await createIx.sendAndConfirm(this.umi, this.sendAndConfirmOptions);

    await this._prepareAllNftItems({
      candyMachine: candyMachineSigner.publicKey,
      items,
    });

    return {
      collection,
      candyMachine,
    };
  }

  /**
   * Prepare all NFTs to be minted
   * @param candyMachine - The candy machine address
   * @param items - The items to be minted
   */
  private async _prepareAllNftItems({
    candyMachine,
    items,
  }: {
    candyMachine: PublicKey | string;
    items: { name: string; uri: string }[];
  }) {
    const batchSize = 100;
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      await this._prepareNftItems({ candyMachine, index: i, items: batch });
    }
  }

  /**
   * Prepare NFTs to be minted
   * @param candyMachine - The candy machine address
   * @param index - The index the first items will be loaded at
   * @param items - The items to be loaded
   * @returns The result of the transaction
   */
  private async _prepareNftItems({
    candyMachine,
    index,
    items,
  }: {
    candyMachine: PublicKey | string;
    index: number;
    items: { name: string; uri: string }[];
  }) {
    const result = await addConfigLines(this.umi, {
      candyMachine: publicKey(candyMachine),
      index,
      configLines: items.map((item) => ({ name: item.name, uri: item.uri })),
    }).sendAndConfirm(this.umi, this.sendAndConfirmOptions);

    return result;
  }

  /**
   * Create an AI-NFT by collection owner.
   * @param name - The name of the AI-NFT
   * @param uri - The URI of the AI-NFT
   * @param asset - The asset keypair
   * @param collectionAddress - The collection address
   * @returns The asset address
   */
  async createAiNft({
    name,
    uri,
    asset = Keypair.generate(),
    collectionAddress,
  }: {
    name: string;
    uri: string;
    asset?: Keypair;
    collectionAddress: PublicKey | string;
  }): Promise<{ asset: Keypair }> {
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
      asset,
    };
  }
}
