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
- EVM

## 🌐 Quick Start

### Installation

```
npm install @xnomad/mcv
```

### Usage

#### Create an AI-NFT collection on Solana

```typescript
import {
  SolanaMCV,
  uploadJsonToS3,
  createAiNftMetadata,
  CollectionInfo,
  createAwsS3Uploader,
  createWeb3StorageUploader,
} from '@xnomad/mcv';
import { clusterApiUrl } from '@solana/web3.js';

// Your AI-NFT collection.
const collectionInfo: CollectionInfo = {
  name: "my collection",
  description: "this is an AI-NFT collection",
  image: "https://example.jpg",
  ...
};

// Your AI agent characters corresponding to the NFTs
// See https://elizaos.github.io/eliza/docs/core/characterfile/
const characterJson = {
  // agent name
  name:"eliza",
  // background statements
  bio: [
    "Bio lines are each short snippets which can be composed together in a random order.",
  ],
  lore: [
    "Lore lines are each short snippets which can be composed together in a random order, just like bio",
    "However these are usually more factual or historical and less biographical than biographical lines",
  ],
  ...
};

// Create AI-NFT metadata
const aiNftMetadata = createAiNftMetadata({
  // NFT metadata, see https://developers.metaplex.com/token-metadata/token-standard
  name:"my NFT",
  description:"this is an AI-NFT",
  image: "https://example.jpg"
}, AiAgentEngine.ELIZA, characterJson);

// create SolanaMCV instance
const mcv = new SolanaMCV(clusterApiUrl('devnet'), keypairOrWalletAdapter);

// Upload AI-NFT metadata to S3
const { collectionUri, nftUris } = await mcv.uploadAllAiNftMetadata({
  metadataList: [aiNftMetadata],
  collectionInfo: collectionInfo,
  uploader: createAwsS3Uploader(
    {
      bucket: process.env.S3_BUCKET!,
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_KEY!,
      region: process.env.S3_REGION!,
    },
    process.env.S3_BASE_URL!,
    (filename) => `metadata/${filename}`,
  ),
});
// Alternatively, you can upload to IPFS
const { collectionUri, nftUris } = await mcv.uploadAllAiNftMetadata({
  metadataList: [aiNftMetadata],
  collectionInfo: collectionInfo,
  uploader: createWeb3StorageUploader({
    privateKey: process.env.WEB3_STORAGE_PRIVATE_KEY!,
    proof: process.env.WEB3_STORAGE_PROOF!,
  }),
});

// Create AI-NFT collection
const result = await mcv.createCollection({
  name: collectionInfo.name, // Collection name
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
  items:[
    {
      name: aiNftMetadata.name,
      uri: nftUris[0]
    }
  ]
});

// User mint
const mcv = new SolanaMCV(clusterApiUrl('devnet'), UserKeypairOrWalletAdapter);
await mcv.mintAiNft({
  collection: result.collection, // collection address
  candyMachine: result.candyMachine, // candy machine address
  stageIndex: 0, // mint stage index
  merkleProof: mcv.getMerkleProof(whitelistAddresses, userAddress) // required if whitelist is set in mint stage
});
```

#### Create an AI-NFT collection on EVM
```typescript


import {
    EvmMCV,
    createAiNftMetadata,
    CollectionInfo,
    createAwsS3Uploader,
    createWeb3StorageUploader,
    AiAgentEngine,
} from '@xnomad/mcv';

// Your AI-NFT collection.
const collectionInfo: CollectionInfo = {
    name: "my collection",
    description: "this is an AI-NFT collection",
    image: "https://example.jpg",
    attributes: [],
    properties: {
        files: [
            {
                uri: "https://example.jpg",
                type: "image/jpg"
            }
        ],
        category: 'image'
    }
};

// Your AI agent characters corresponding to the NFTs
// See https://elizaos.github.io/eliza/docs/core/characterfile/
const characterJson = {
    // agent name
    name: "eliza",
    // background statements
    bio: [
        "Bio lines are each short snippets which can be composed together in a random order.",
    ],
    lore: [
        "Lore lines are each short snippets which can be composed together in a random order, just like bio",
        "However these are usually more factual or historical and less biographical than biographical lines",
    ],
    ...
  };

// Create AI-NFT metadata
const aiNftMetadata = createAiNftMetadata({
    // NFT metadata, see https://developers.metaplex.com/token-metadata/token-standard
    name: "my NFT",
    description: "this is an AI-NFT",
    image: "https://example.jpg",
    attributes: [],
    properties: {
        files: [],
        category: ''
    }
}, AiAgentEngine.ELIZA, characterJson);

// create EvmMCV instance
const mcv = new EvmMCV('PRIVATE_KET', 'ENDPOINT');

// Upload AI-NFT metadata to S3
const { baseUrl, nftUris } = await mcv.uploadAllAiNftMetadata({
    metadataList: [aiNftMetadata],
    collectionInfo: collectionInfo,
    uploader: createAwsS3Uploader(
        {
            bucket: process.env.S3_BUCKET!,
            accessKeyId: process.env.S3_ACCESS_KEY!,
            secretAccessKey: process.env.S3_SECRET_KEY!,
            region: process.env.S3_REGION!,
        },
        process.env.S3_BASE_URL!,
        (filename) => `metadata/${filename}`,
    ),
});
// Alternatively, you can upload to IPFS
const { baseUrl, nftUris } = await mcv.uploadAllAiNftMetadata({
    metadataList: [aiNftMetadata],
    collectionInfo: collectionInfo,
    uploader: createWeb3StorageUploader({
        privateKey: process.env.WEB3_STORAGE_PRIVATE_KEY!,
        proof: process.env.WEB3_STORAGE_PROOF!,
    }),
});

// Create AI-NFT collection
const result = await mcv.createAiNftCollection({
    name: collectionInfo.name, // Collection name
    symbol: '',
    uri: baseUrl, // Collection metadata URI
    uriSuffix: '.json', // Collection metadata URI suffix
    royaltyBps: 100, // Royalty basis points, 100 = 1%
    itemsCount: 3, // Total number of NFTs
    mintStages: [
        // Mint phase configuration
        {
            pricePerNFT: 0.1, // Price per NFT, eg. 0.1 = 0.1ETH
            startDate: new Date(), // Start time
            endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // End time
            maxMintsPerWallet: 1 // Mint limit per user
        }
    ],
});

// User mint
const mcv = new EvmMCV('PRIVATE_KET', 'ENDPOINT');
await mcv.mintAiNft({
    contractAddress: result, // collection address
    stageIndex: 0, // mint stage index
    merkleProof: [],
    quantity: 1
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
