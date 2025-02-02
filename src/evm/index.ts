import { createWalletClient, http, WalletClient, keccak256, parseEther, zeroHash, encodeDeployData, createPublicClient, PublicClient, maxUint64, encodeFunctionData, decodeFunctionResult } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import McvLaunchNFT from '../common/abi/McvLaunchNFT.js';
import { EvmMintStage, WhitelistWithLimit } from '../types.js';
import { MerkleTree } from 'merkletreejs';
import { ZeroHash } from 'ethers';

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
        royaltyBps,
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

  async uploadAllAiNftMetadata() { }

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
