import { Character, validateCharacterConfig } from '@ai16z/eliza';
import { AiAgentEngine, AiNftMetadata, NftMetadata } from './types';

export * from './solana';
export * from './types';

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
