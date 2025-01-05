import {
  createNft,
  mplTokenMetadata,
} from '@metaplex-foundation/mpl-token-metadata';
import {
  generateSigner,
  KeypairSigner,
  percentAmount,
} from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { NftMetadata } from '../types';

interface CreateAiNftParams {
  metadata: NftMetadata;
  sellerFeePercent: number; // e.g. 5.5 for 5.5%
  collection: KeypairSigner;
  isCollection?: boolean;
}

export async function createAiNftCollection(params: CreateAiNftParams) {
  await createAiNft({ ...params, isCollection: true });
}

export async function createAiNft(params: CreateAiNftParams) {
  // TODO: endpoint
  const umi = createUmi('http://127.0.0.1:8899').use(mplTokenMetadata());

  const uri = await umi.uploader.uploadJson(params.metadata);

  const mint = generateSigner(umi);

  const res = await createNft(umi, {
    mint,
    name: params.metadata.name,
    uri,
    collection: params.isCollection
      ? undefined
      : {
          key: params.collection.publicKey,
          verified: true,
        },
    sellerFeeBasisPoints: percentAmount(params.sellerFeePercent),
  }).sendAndConfirm(umi);

  return res;
}
