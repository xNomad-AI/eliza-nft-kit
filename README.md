# MCV 🚀

An out-of-box dev kit to launch your AI-NFT based on [Eliza](https://github.com/elizaOS/eliza) on multichain, like the MCV(Mobile Construction Vehicle) in Red Alert(a popular game).

## ✨ Features

- Package AI-NFT [metadata](https://docs.xnomad.ai/ai-nft-metadata) using Eliza's character files
- Enable conversion of NFT traits into personalities and integration into character files
- Provide basic functionalities such as Deploy, Mint and Burn(set it free) AI-NFT
- Support contract-level AI-NFT management on multichain
- Enable AI Agents to launch AI-NFT

## ⛓️ Supported Blockchain

- Solana
- EVM (Coming soon)

## 🌐 Quick Start

### Installation

```
npm install @xnomad/mcv
```

### Usage

#### Create an AI-NFT collection on Solana

```typescript
import { SolanaMCV, uploadJsonToS3, createAiNftMetadata } from '@xnomad/mcv';

// Your AI-NFT collection and NFT metadata.
// See https://developers.metaplex.com/token-metadata/token-standard
const collectionMetadataJson = { ... }
const nftMetadataJsonList = [
  { ... },
  { ... },
  { ... },
];
// Your AI agent characters corresponding to the NFTs
// See https://elizaos.github.io/eliza/docs/core/characterfile/
const characterJsonList = [
  { ... },
  { ... },
  { ... },
];
const aiNftMetadataList = nftMetadataJsonList.map(
  (metadata, index) =>
    createAiNftMetadata(
      metadata,
      AiAgentEngine.ELIZA,
      characterJsonList[index],
    ),
);

// Upload your collection and NFT metadata to S3 (use uploadJsonToS3) or IPFS (use uploadJsonToIpfs)
const collectionUri = await uploadJsonToS3(collectionMetadataJson, {
  bucket: 'bucket',
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  region: 'region',
});
const nftUris = await Promise.all(
  aiNftMetadataList.map(metadata => uploadJsonToS3(metadata, {
    bucket: 'bucket',
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: 'region',
  })),
);

// create SolanaMCV instance
const mcv = new SolanaMCV('https://api.mainnet-beta.solana.com', keypairOrWalletAdapter);

// Create AI-NFT collection
await mcv.createCollection({
  name: collectionMetadataJson.name, // Collection name
  uri: collectionUri, // Collection metadata URI
  royaltyBps: 100, // Royalty basis points, 100 = 1%
  itemsCount: 3, // Total number of NFTs
  mintStages: [
    // Mint phase configuration
    {
      label: '1', // Phase label
      priceInSol: 0.01, // Mint price in SOL
      startDate: new Date(), // Start time
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // End time
      mintLimitPerUser: 1, // Mint limit per user
    },
  ],
  items: nftUris.map((uri, index) => ({
    name: aiNftMetadataList[index].name,
    uri,
  })),
});
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [xnomad.ai](https://xnomad.ai)
- **Twitter**: [@xNomadAI](https://x.com/xNomadAI)

For questions and support, please open an issue in the GitHub repository.

Developed with ❤️ by the xNomad Team.

## 🙏 Acknowledgments

A big thank you to everyone who contributed to the development of this project.

Developed with ❤️ by the xNomad Team.
