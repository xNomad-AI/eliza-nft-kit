import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import * as Client from '@web3-storage/w3up-client';
import { Signer } from '@web3-storage/w3up-client/principal/ed25519';
import * as Proof from '@web3-storage/w3up-client/proof';
import { StoreMemory } from '@web3-storage/w3up-client/stores/memory';

export interface Uploader {
  uploadFiles(files: File[]): Promise<string[]>;
}

/**
 * Create an AWS S3 uploader
 * @param s3Config - The AWS S3 configuration
 * @param s3Config.bucket - The bucket name
 * @param s3Config.accessKeyId - The access key ID
 * @param s3Config.secretAccessKey - The secret access key
 * @param s3Config.region - The region
 * @param baseUrl - The base URL of your uploaded files. E.g. https://example.com
 * @param getS3ObjectKey - Get s3 object key name. E.g. '1.json' => 'some/prefix/1.json'. See https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html
 * @returns The uploader
 */
export function createAwsS3Uploader(
  s3Config: {
    bucket: string;
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  },
  baseUrl: string,
  getS3ObjectKey: (filename: string) => string,
): Uploader {
  return {
    uploadFiles: async (files) => {
      const client = new S3Client({
        credentials: {
          accessKeyId: s3Config.accessKeyId,
          secretAccessKey: s3Config.secretAccessKey,
        },
        region: s3Config.region,
      });
      for (const file of files) {
        await client.send(
          new PutObjectCommand({
            Bucket: s3Config.bucket,
            Key: getS3ObjectKey(file.name),
            Body: Buffer.from(await file.arrayBuffer()),
            ContentType: file.type,
          }),
        );
      }
      return files.map(
        (file) =>
          baseUrl +
          (baseUrl.endsWith('/') ? '' : '/') +
          getS3ObjectKey(file.name),
      );
    },
  };
}

/**
 * Create a Web3Storage uploader (upload to IPFS using https://web3.storage)
 * @param web3StorageConfig - The Web3Storage configuration
 * @returns The uploader
 */
export function createWeb3StorageUploader(web3StorageConfig: {
  privateKey: string;
  proof: string;
}): Uploader {
  return {
    uploadFiles: async (files: File[]) => {
      const client = await createWeb3StorageClient(web3StorageConfig);
      const cid = await client.uploadDirectory(files);
      return files.map((file) => `https://${cid}.ipfs.w3s.link/${file.name}`);
    },
  };
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
