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

Create a collection on Solana:

```typescript
// Initialize NFT tool with Solana network endpoint and keypair
const nftTool = new NftTool('https://api.mainnet-beta.solana.com', keypair);

// Create NFT collection
const { collection } = await nftTool.createCollection({
  name: 'example', // Collection name
  uri: 'https://example.com', // Collection metadata URI
  royaltyBps: 100, // Royalty basis points, 100 = 1%
});

// Setup Candy Machine configuration
const { candyMachine } = await nftTool.setupCollection({
  collectionAddress: collection, // Collection address
  itemsCount: 3, // Total number of NFTs
  mintStages: [
    // Mint phase configuration
    {
      label: '1', // Phase label
      priceInSol: 0.01, // Mint price in SOL
      startDate: new Date(), // Start time
    },
  ],
});

// Prepare NFT items in the collection
await nftTool.prepareCollectionItems({
  candyMachine, // Candy Machine instance
  index: 0, // Starting index
  items: [
    // List of NFT items
    { name: 'example #1', uri: 'https://example.com/1.json' },
    { name: 'example #2', uri: 'https://example.com/2.json' },
    { name: 'example #3', uri: 'https://example.com/3.json' },
  ],
});
```

Upload metadata to S3:

```typescript
// Upload JSON metadata to AWS S3
const url = await nftTool.uploadJsonToS3({
  json: metadata, // Metadata object
  s3Config: {
    // S3 configuration
    bucket: 'bucket', // Bucket name
    accessKeyId: 'accessKeyId', // AWS access key ID
    secretAccessKey: 'secretAccessKey', // AWS secret key
    region: 'region', // AWS region
  },
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
