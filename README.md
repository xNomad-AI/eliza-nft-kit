# MCV

An out-of-box dev kit to launch your AI-NFT based on [Eliza](https://github.com/elizaOS/eliza) on multichain, like the MCV(Mobile Construction Vehicle) in Red Alert(a popular game).

# Features

- Package AI-NFT [metadata](https://docs.xnomad.ai/ai-nft-metadata) using Eliza’s character files.
- Enable conversion of NFT traits into personalities and integration into character files.
- Provide basic functionalities such as Deploy, Mint and Burn(set it free) AI-NFT.
- Support contract-level AI-NFT management on multichain.
- Enable AI Agents to launch AI-NFT.

# Supported Blockchain

- Solana
- EVM

# Quick Start

## Install

```
npm install @xnomad/mcv
```

## Usage

Create a collection on Solana.

```typescript
const nftTool = new NftTool('https://api.mainnet-beta.solana.com', keypair);
const { collection } = await nftTool.createCollection({
  name: 'example',
  uri: 'https://example.com',
  royaltyBps: 100,
});

const { candyMachine } = await nftTool.setupCollection({
  collectionAddress: collection,
  itemsCount: 3,
  mintStages: [
    {
      label: '1',
      priceInSol: 0.01,
      startDate: new Date(),
    },
  ],
});

await nftTool.prepareCollectionItems({
  candyMachine,
  index: 0,
  items: [
    { name: 'example #1', uri: 'https://example.com/1.json' },
    { name: 'example #2', uri: 'https://example.com/2.json' },
    { name: 'example #3', uri: 'https://example.com/3.json' },
  ],
});
```

Upload metadata json to S3.

```typescript
const url = await nftTool.uploadJsonToS3({
  json: metadata,
  s3Config: {
    bucket: 'bucket',
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: 'region',
  },
});
```
