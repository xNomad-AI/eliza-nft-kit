import { createWalletClient, http, WalletClient, keccak256, parseEther, zeroHash, encodeDeployData, createPublicClient, PublicClient, maxUint64, encodeFunctionData } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import McvLaunchNFT from '../common/abi/McvLaunchNFT.js';
import { AiNftMetadata, EvmMintStage, WhitelistWithLimit } from '../types.js';
import { MerkleTree } from 'merkletreejs';
import { ZeroHash } from 'ethers';
import { Uploader } from '../upload.js';

export class EvmMCV {
  private client: PublicClient;
  private walletClient: WalletClient;
  constructor(privateKey: string, endpoint: string) {
    const account = privateKeyToAccount(privateKey as `0x${string}`);

    this.walletClient = createWalletClient({
      account,
      transport: http(endpoint)
    });
    this.client = createPublicClient({
      transport: http(endpoint)
    })
  }

  /**
 * Create an AI-NFT collection
 * @param name - The name of the collection
 * @param symbol - The symbol of the collection
 * @param uri - The URI of the collection
 * @param uriSuffix - The URI suffix of the collection, eg. '.json'
 * @param royaltyBps - The royalty basis points. It means 5% if set to 500.
 * @param itemsCount - The number of items in the candy machine
 * @param mintStages - The mint stages
 * @returns The collection contract address
 */

  async createAiNftCollection({
    name,
    symbol,
    uri,
    uriSuffix,
    royaltyBps,
    itemsCount,
    mintStages,
  }: {
    name: string;
    symbol: string;
    uri: string;
    uriSuffix: string;
    royaltyBps?: number;
    itemsCount: number;
    mintStages?: EvmMintStage[];
  }): Promise<string> {
    const deployData = encodeDeployData({
      abi: McvLaunchNFT.abi,
      bytecode: McvLaunchNFT.bytecode as `0x${string}`,
      args: [
        name,
        symbol,
        uri,
        uriSuffix,
        this.walletClient.account!.address,
        itemsCount,
        this.walletClient.account!.address,
        royaltyBps ?? 0,
        mintStages ? mintStages.map((mintStage) => ({
          startDate: Math.floor(mintStage.startDate.getTime() / 1000),
          endDate: mintStage.endDate ? Math.floor(mintStage.endDate.getTime() / 1000) : maxUint64,
          merkleRoot: mintStage.whitelist ? this.getMerkleRoot(mintStage.whitelist) : zeroHash,
          mintLimit: mintStage.maxMintsPerWallet ? mintStage.maxMintsPerWallet : 0,
          mintPrice: parseEther(`${mintStage.pricePerNFT}`),
          recipient: this.walletClient.account!.address,
        })) : [],
      ],
    });
    const txHash = await this.walletClient.sendTransaction({
      data: deployData,
      type: 'eip1559',
      account: this.walletClient.account!,
      chain: null
    });
    const receipt = await this.client.waitForTransactionReceipt({
      hash: txHash
    });
    return receipt.contractAddress!;
  }

  async createAiNft() { }

  /**
   * Mint an AI-NFT by user.
   * @param contractAddress - The collection contract address.
   * @param stageIndex - The index of the mint stage.
   * @param merkleProof - The merkle proof. Required if the mint stage is for whitelist.
   * @param quantity - The number of items you want to mint.
   * @param mintLimit - The wallet mint limit,default 0.
   */

  async mintAiNft({
    contractAddress,
    stageIndex,
    merkleProof,
    quantity,
    mintLimit,
  }: {
    contractAddress: string;
    stageIndex: number;
    merkleProof?: Uint8Array[];
    quantity: number;
    mintLimit?: number;
  }): Promise<string> {
    const stages = await this.getCollectionStages({
      contractAddress
    });
    const stage = stages[stageIndex];
    const data = encodeFunctionData({
      abi: McvLaunchNFT.abi,
      functionName: 'mintWithLimit',
      args: [stageIndex, this.walletClient.account!.address, quantity, mintLimit ?? 0, merkleProof ?? []],
    });
    const txHash = await this.walletClient.sendTransaction({
      data,
      type: 'eip1559',
      account: this.walletClient.account!,
      to: contractAddress as `0x${string}`,
      chain: null,
      value: BigInt(stage.mintPrice) * BigInt(quantity),
    });
    await this.client.waitForTransactionReceipt({
      hash: txHash
    });
    return txHash
  }

  async getCollectionStages({
    contractAddress
  }: {
    contractAddress: string;
  }): Promise<any> {
    const decodeResult = await this.client.readContract({
      abi: McvLaunchNFT.abi,
      address: contractAddress as `0x${string}`,
      functionName: 'getMintStages',
    });
    return decodeResult;
  }

  /**
   * Upload all AI-NFT metadata
   * @param metadataList - The AI-NFT metadata
   * @param collectionInfo - The collection info
   * @param uploader - The uploader
   * @returns The URLs of the uploaded files and base uri
   */
  async uploadAllAiNftMetadata({
    metadataList,
    uploader,
  }: {
    metadataList: AiNftMetadata[];
    uploader: Uploader;
  }) {
    const files = metadataList.map(
      (metadata, index) =>
        new File([JSON.stringify(metadata, null, 2)], `${index + 1}.json`, {
          type: 'application/json',
        }),
    );
    const uris = await uploader.uploadFiles(files);
    return {
      baseUrl: uris[0].replace('1.json', ''),
      nftUris: uris,
    };
  }

  getMerkleRoot(whitelist: string[] | WhitelistWithLimit[]): string {
    if (whitelist.length === 0) {
      return ZeroHash;
    } else if (typeof whitelist[0] === 'string') {
      const merkleTree = new MerkleTree(whitelist.map(account => keccak256(account)), keccak256, { sortPairs: true });
      return merkleTree.getHexRoot();
    } else {
      const merkleTree = new MerkleTree(whitelist.map(accountWithLimit => keccak256(accountWithLimit.address, accountWithLimit.mintLimit)), keccak256, { sortPairs: true });
      return merkleTree.getHexRoot()
    }
  }
}
