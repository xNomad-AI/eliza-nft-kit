import {
  createNft,
  mplTokenMetadata,
} from '@metaplex-foundation/mpl-token-metadata';
import { generateSigner, percentAmount } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { NftMetadata } from '../types';

interface CreateAiNftParams {
  metadata: NftMetadata;
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
    sellerFeeBasisPoints: percentAmount(5.5),
  }).sendAndConfirm(umi);

  return res;
}
