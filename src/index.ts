import { Character, validateCharacterConfig } from '@ai16z/eliza';

import {
  AiAgentEngine,
  AiNftMetadata,
  CollectionInfo,
  NftMetadata,
} from './types.js';

export * from './evm/index.js';
export * from './solana/index.js';
export * from './types.js';
export * from './upload.js';

/**
 * Constructs the AI-NFT metadata.
 * @param metadata - The NFT metadata.
 * @param engine - The engine used to run the AI agent.
 * @param character - The character file JSON that describes an AI agent.
 */
export function createAiNftMetadata(
  metadata: NftMetadata,
  engine: AiAgentEngine,
  character: Character,
): AiNftMetadata {
  validateNftMetadata(metadata);
  validateCharacterConfig(character);

  if (engine !== 'eliza') {
    throw new Error('Unsupported engine');
  }

  return {
    ...metadata,
    ai_agent: {
      engine,
      character,
    },
  };
}

export function validateCollectionInfo(collectionInfo: CollectionInfo) {
  // TODO
}

export function validateAiNftMetadata(aiNftMetadata: AiNftMetadata) {
  // TODO
}

export function validateNftMetadata(nftMetadata: NftMetadata) {
  // TODO
}
