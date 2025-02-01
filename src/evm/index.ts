/**
 * A class that provides methods to launch an AI-NFT collection on EVM-compatible chains.
 * TODO
 */

import { createWalletClient, http, WalletClient, keccak256, parseGwei, zeroHash, encodeDeployData, createPublicClient, Chain, EIP1193RequestFn, TransportConfig, PrivateKeyAccount, PublicClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import McvLaunchNFT from '../common/abi/McvLaunchNFT.js';
import { EvmMintStage, WhitelistWithLimit } from '../types.js';
import { MerkleTree } from 'merkletreejs';
import { ZeroHash } from 'ethers';
// import { publicClient } from 'viem'

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
        this.walletClient.account?.address,
        itemsCount,
        this.walletClient.account?.address,
        royaltyBps,
        mintStages ? mintStages.map((mintStage) => ({
          startDate: Math.floor(mintStage.startDate.getTime() / 1000),
          endDate: mintStage.endDate ? Math.floor(mintStage.endDate.getTime() / 1000) : 0,
          merkleRoot: mintStage.whitelist ? this.getMerkleRoot(mintStage.whitelist) : zeroHash,
          mintLimit: mintStage.maxMintsPerWallet ? mintStage.maxMintsPerWallet : 0,
          mintPrice: parseGwei(`${mintStage.pricePerNFT}`)
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
