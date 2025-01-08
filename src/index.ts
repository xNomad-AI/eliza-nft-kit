import { Character, validateCharacterConfig } from '@ai16z/eliza';
import { S3Client } from '@aws-sdk/client-s3';
import { awsUploader } from '@metaplex-foundation/umi-uploader-aws';
import * as Client from '@web3-storage/w3up-client';
import { Signer } from '@web3-storage/w3up-client/principal/ed25519';
import * as Proof from '@web3-storage/w3up-client/proof';
import { StoreMemory } from '@web3-storage/w3up-client/stores/memory';
import { AiAgentEngine, AiNftMetadata, NftMetadata } from './types.js';

export * from './evm/index.js';
export * from './solana/index.js';
export * from './types.js';

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
export async function uploadJsonToS3(
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

/**
 * Upload a JSON object to IPFS.
 * @param json - The JSON object to upload
 * @param web3StorageConfig - The Web3Storage configuration. See https://web3.storage/
 * @param web3StorageConfig.proof - Add proof that this agent has been delegated capabilities on the space
 * @param web3StorageConfig.privateKey - Load client with specific private key
 */
export async function uploadJsonToIpfs(
  json: object,
  web3StorageConfig: {
    proof: string;
    privateKey: string;
  },
) {
  const client = await createWeb3StorageClient(web3StorageConfig);
  await client.uploadFile(
    new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' }),
  );
}

async function createWeb3StorageClient(web3StorageConfig: {
  privateKey: string;
  proof: string;
}) {
  const principal = Signer.parse(web3StorageConfig.privateKey);
  const proof = await Proof.parse(web3StorageConfig.proof);

  const store = new StoreMemory();
  const client = await Client.create({
    principal,
    store,
  });
  const space = await client.addSpace(proof);
  await client.setCurrentSpace(space.did());

  return client;
}
