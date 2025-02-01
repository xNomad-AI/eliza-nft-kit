/**
 * A class that provides methods to launch an AI-NFT collection on EVM-compatible chains.
 * TODO
 */

import { createWalletClient, http, WalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
export class EvmMCV {
  private walletClient: WalletClient;
  constructor(privateKey: string, endpoint: string) {
    const account = privateKeyToAccount(privateKey as `0x${string}`);
    this.walletClient = createWalletClient({
      account,
      transport: http(endpoint)
    });
  }

  async createAiNftCollection() {}

  async createAiNft() {}

  async uploadAllAiNftMetadata() {}
}
