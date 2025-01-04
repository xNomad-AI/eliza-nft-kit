import { Character } from '@ai16z/eliza';

export interface NftMetadata {
  name: string;
  image: string;
  description: string;
  animation_url?: string;
  external_url?: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
  ai_agent?: {
    engine: string;
    character: Character;
  };
}
