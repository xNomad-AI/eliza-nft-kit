export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "McvLaunchNFT",
  "sourceName": "contracts/McvLaunchNFT.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uriSuffix",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_initOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxSupply",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_royaltyRecipient",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_royaltyBps",
          "type": "uint96"
        },
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "startDate",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endDate",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint32",
              "name": "mintLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "mintPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "internalType": "struct LibStorage.MintStage[]",
          "name": "_stages",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numerator",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "denominator",
          "type": "uint256"
        }
      ],
      "name": "ERC2981InvalidDefaultRoyalty",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC2981InvalidDefaultRoyaltyReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "numerator",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "denominator",
          "type": "uint256"
        }
      ],
      "name": "ERC2981InvalidTokenRoyalty",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC2981InvalidTokenRoyaltyReceiver",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExceedMaxSupply",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExceedWalletLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientNativeValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMerkleProof",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidStageDate",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintERC2309QuantityExceedsLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintNotOpen",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotCompatibleWithSpotMints",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnershipNotInitializedForExtraData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SequentialMintExceedsLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SequentialUpToTooSmall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SpotMintTokenIdTooSmall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TokenAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "toTokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "ConsecutiveTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stageIndex",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "startDate",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endDate",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint32",
              "name": "mintLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "mintPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct LibStorage.MintStage",
          "name": "newStage",
          "type": "tuple"
        }
      ],
      "name": "StageUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "uri",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "uriSuffix",
          "type": "string"
        }
      ],
      "name": "URIUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMintStages",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "startDate",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endDate",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint32",
              "name": "mintLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "mintPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "internalType": "struct LibStorage.MintStage[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "stageIndex",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "quantity",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "maxQuantity",
          "type": "uint64"
        },
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "mintWithLimit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "salePrice",
          "type": "uint256"
        }
      ],
      "name": "royaltyInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "result",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_feeNumerator",
          "type": "uint96"
        }
      ],
      "name": "updateDefaultRoyalty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "startDate",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endDate",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint32",
              "name": "mintLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint256",
              "name": "mintPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "internalType": "struct LibStorage.MintStage[]",
          "name": "newStages",
          "type": "tuple[]"
        }
      ],
      "name": "updateMintStages",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uriSuffix",
          "type": "string"
        }
      ],
      "name": "updateURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051614fa1380380614fa183398181016040528101906100329190610c01565b84898981600290816100449190610f6e565b5080600390816100549190610f6e565b5061006361019060201b60201c565b60008190555061007761019060201b60201c565b61008561019960201b60201c565b10156100a2576100a163fed8210f60e01b6101c160201b60201c565b5b5050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101165760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161010d919061104f565b60405180910390fd5b610125816101cb60201b60201c565b506001600a8190555086600d60040190816101409190610f6e565b5085600d60050190816101539190610f6e565b5083600d6001018190555061016e838361029160201b60201c565b61018281600d61043960201b90919060201c565b5050505050505050506111e3565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b8060005260046000fd5b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006102a161060a60201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156103065781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016102fd9291906110aa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036103785760006040517fb6d9900a00000000000000000000000000000000000000000000000000000000815260040161036f919061104f565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b81600001600061044991906106d6565b60005b81518110156106055761047e82828151811061046b5761046a6110d3565b5b602002602001015161061460201b60201c565b82600001828281518110610495576104946110d3565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d287131838383815181106105dd576105dc6110d3565b5b60200260200101516040516105f291906111c8565b60405180910390a280600101905061044c565b505050565b6000612710905090565b806020015167ffffffffffffffff16816000015167ffffffffffffffff1610610669576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16036106d3576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b50805460008255600502906000526020600020908101906106f791906106fa565b50565b5b8082111561079157600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016106fb565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107fc826107b3565b810181811067ffffffffffffffff8211171561081b5761081a6107c4565b5b80604052505050565b600061082e610795565b905061083a82826107f3565b919050565b600067ffffffffffffffff82111561085a576108596107c4565b5b610863826107b3565b9050602081019050919050565b60005b8381101561088e578082015181840152602081019050610873565b60008484015250505050565b60006108ad6108a88461083f565b610824565b9050828152602081018484840111156108c9576108c86107ae565b5b6108d4848285610870565b509392505050565b600082601f8301126108f1576108f06107a9565b5b815161090184826020860161089a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109358261090a565b9050919050565b6109458161092a565b811461095057600080fd5b50565b6000815190506109628161093c565b92915050565b6000819050919050565b61097b81610968565b811461098657600080fd5b50565b60008151905061099881610972565b92915050565b60006bffffffffffffffffffffffff82169050919050565b6109bf8161099e565b81146109ca57600080fd5b50565b6000815190506109dc816109b6565b92915050565b600067ffffffffffffffff8211156109fd576109fc6107c4565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b610a3581610a18565b8114610a4057600080fd5b50565b600081519050610a5281610a2c565b92915050565b6000819050919050565b610a6b81610a58565b8114610a7657600080fd5b50565b600081519050610a8881610a62565b92915050565b600063ffffffff82169050919050565b610aa781610a8e565b8114610ab257600080fd5b50565b600081519050610ac481610a9e565b92915050565b600060c08284031215610ae057610adf610a13565b5b610aea60c0610824565b90506000610afa84828501610a43565b6000830152506020610b0e84828501610a43565b6020830152506040610b2284828501610a79565b6040830152506060610b3684828501610ab5565b6060830152506080610b4a84828501610989565b60808301525060a0610b5e84828501610953565b60a08301525092915050565b6000610b7d610b78846109e2565b610824565b90508083825260208201905060c08402830185811115610ba057610b9f610a0e565b5b835b81811015610bc95780610bb58882610aca565b84526020840193505060c081019050610ba2565b5050509392505050565b600082601f830112610be857610be76107a9565b5b8151610bf8848260208601610b6a565b91505092915050565b60008060008060008060008060006101208a8c031215610c2457610c2361079f565b5b60008a015167ffffffffffffffff811115610c4257610c416107a4565b5b610c4e8c828d016108dc565b99505060208a015167ffffffffffffffff811115610c6f57610c6e6107a4565b5b610c7b8c828d016108dc565b98505060408a015167ffffffffffffffff811115610c9c57610c9b6107a4565b5b610ca88c828d016108dc565b97505060608a015167ffffffffffffffff811115610cc957610cc86107a4565b5b610cd58c828d016108dc565b9650506080610ce68c828d01610953565b95505060a0610cf78c828d01610989565b94505060c0610d088c828d01610953565b93505060e0610d198c828d016109cd565b9250506101008a015167ffffffffffffffff811115610d3b57610d3a6107a4565b5b610d478c828d01610bd3565b9150509295985092959850929598565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da957607f821691505b602082108103610dbc57610dbb610d62565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610de7565b610e2e8683610de7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610e6b610e66610e6184610968565b610e46565b610968565b9050919050565b6000819050919050565b610e8583610e50565b610e99610e9182610e72565b848454610df4565b825550505050565b600090565b610eae610ea1565b610eb9818484610e7c565b505050565b5b81811015610edd57610ed2600082610ea6565b600181019050610ebf565b5050565b601f821115610f2257610ef381610dc2565b610efc84610dd7565b81016020851015610f0b578190505b610f1f610f1785610dd7565b830182610ebe565b50505b505050565b600082821c905092915050565b6000610f4560001984600802610f27565b1980831691505092915050565b6000610f5e8383610f34565b9150826002028217905092915050565b610f7782610d57565b67ffffffffffffffff811115610f9057610f8f6107c4565b5b610f9a8254610d91565b610fa5828285610ee1565b600060209050601f831160018114610fd85760008415610fc6578287015190505b610fd08582610f52565b865550611038565b601f198416610fe686610dc2565b60005b8281101561100e57848901518255600182019150602085019450602081019050610fe9565b8683101561102b5784890151611027601f891682610f34565b8355505b6001600288020188555050505b505050505050565b6110498161092a565b82525050565b60006020820190506110646000830184611040565b92915050565b600061108561108061107b8461099e565b610e46565b610968565b9050919050565b6110958161106a565b82525050565b6110a481610968565b82525050565b60006040820190506110bf600083018561108c565b6110cc602083018461109b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61110b81610a18565b82525050565b61111a81610a58565b82525050565b61112981610a8e565b82525050565b61113881610968565b82525050565b6111478161092a565b82525050565b60c0820160008201516111636000850182611102565b5060208201516111766020850182611102565b5060408201516111896040850182611111565b50606082015161119c6060850182611120565b5060808201516111af608085018261112f565b5060a08201516111c260a085018261113e565b50505050565b600060c0820190506111dd600083018461114d565b92915050565b613daf806111f26000396000f3fe6080604052600436106101405760003560e01c8063715018a6116100b6578063a22cb4651161006f578063a22cb46514610427578063b88d4fde14610450578063c87b56dd1461046c578063d691e43c146104a9578063e985e9c5146104d2578063f2fde38b1461050f57610140565b8063715018a61461034a5780638da5cb5b14610361578063903f00251461038c578063945dc1c2146103b557806395d89b41146103d1578063a06343a3146103fc57610140565b806318160ddd1161010857806318160ddd1461022f57806323b872dd1461025a5780632a55205a1461027657806342842e0e146102b45780636352211e146102d057806370a082311461030d57610140565b806301ffc9a71461014557806306fdde0314610182578063081812fc146101ad578063095ea7b3146101ea5780631789e2d814610206575b600080fd5b34801561015157600080fd5b5061016c60048036038101906101679190612851565b610538565b6040516101799190612899565b60405180910390f35b34801561018e57600080fd5b5061019761054a565b6040516101a49190612944565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf919061299c565b6105dc565b6040516101e19190612a0a565b60405180910390f35b61020460048036038101906101ff9190612a51565b61063a565b005b34801561021257600080fd5b5061022d60048036038101906102289190612bc6565b61064a565b005b34801561023b57600080fd5b5061024461066c565b6040516102519190612c4d565b60405180910390f35b610274600480360381019061026f9190612c68565b6106b9565b005b34801561028257600080fd5b5061029d60048036038101906102989190612cbb565b61097a565b6040516102ab929190612cfb565b60405180910390f35b6102ce60048036038101906102c99190612c68565b610aaa565b005b3480156102dc57600080fd5b506102f760048036038101906102f2919061299c565b610aca565b6040516103049190612a0a565b60405180910390f35b34801561031957600080fd5b50610334600480360381019061032f9190612d24565b610adc565b6040516103419190612c4d565b60405180910390f35b34801561035657600080fd5b5061035f610b73565b005b34801561036d57600080fd5b50610376610b87565b6040516103839190612a0a565b60405180910390f35b34801561039857600080fd5b506103b360048036038101906103ae9190612f70565b610bb1565b005b6103cf60048036038101906103ca9190613014565b610bd0565b005b3480156103dd57600080fd5b506103e6610cf0565b6040516103f39190612944565b60405180910390f35b34801561040857600080fd5b50610411610d82565b60405161041e9190613223565b60405180910390f35b34801561043357600080fd5b5061044e60048036038101906104499190613271565b610d93565b005b61046a60048036038101906104659190613352565b610e9e565b005b34801561047857600080fd5b50610493600480360381019061048e919061299c565b610ef0565b6040516104a09190612944565b60405180910390f35b3480156104b557600080fd5b506104d060048036038101906104cb9190613419565b610f7a565b005b3480156104de57600080fd5b506104f960048036038101906104f49190613459565b610f90565b6040516105069190612899565b60405180910390f35b34801561051b57600080fd5b5061053660048036038101906105319190612d24565b611024565b005b6000610543826110aa565b9050919050565b606060028054610559906134c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610585906134c8565b80156105d25780601f106105a7576101008083540402835291602001916105d2565b820191906000526020600020905b8154815290600101906020018083116105b557829003601f168201915b5050505050905090565b60006105e782611124565b6105fc576105fb63cf4700e460e01b6111d0565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610646828260016111da565b5050565b610652611309565b6106688282600d6113909092919063ffffffff16565b5050565b60006106766113f2565b600154600054030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106a96113fb565b146106b657600854810190505b90565b60006106c482611423565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107395761073863a114810060e01b6111d0565b5b6000806107458461153c565b9150915061075b8187610756611563565b61156b565b610786576107708661076b611563565b610f90565b610785576107846359c896be60e01b6111d0565b5b5b61079386868660016115af565b801561079e57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061086c856108488888876115b5565b7c0200000000000000000000000000000000000000000000000000000000176115dd565b600460008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416036108f257600060018501905060006004600083815260200190815260200160002054036108f05760005481146108ef578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081036109645761096363ea553b3460e01b6111d0565b5b6109718787876001611608565b50505050505050565b6000806000600c6000868152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008260000160149054906101000a90046bffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a5b57600b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b60000160149054906101000a90046bffffffffffffffffffffffff1690505b6000610a6561160e565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610a8d9190613528565b610a979190613599565b9050828195509550505050509250929050565b610ac583838360405180602001604052806000815250610e9e565b505050565b6000610ad582611423565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b2257610b21638f4eb60460e01b6111d0565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610b7b611309565b610b856000611618565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610bb9611309565b610bcd81600d6116de90919063ffffffff16565b50565b610bd86118a9565b600080610c038867ffffffffffffffff168888888888600d6118ef909695949392919063ffffffff16565b915091508567ffffffffffffffff16600d6002016000828254610c2691906135ca565b925050819055508567ffffffffffffffff16600d60030160008a67ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ca491906135ca565b92505081905550610cb58282611d92565b610cca338234610cc591906135fe565b611d92565b610cde878767ffffffffffffffff16611e4d565b5050610ce8611e6b565b505050505050565b606060038054610cff906134c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b906134c8565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b5050505050905090565b6060610d8e600d611e75565b905090565b8060076000610da0611563565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e4d611563565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e929190612899565b60405180910390a35050565b610ea98484846106b9565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610eea57610ed484848484611fcc565b610ee957610ee863d1a57ed660e01b6111d0565b5b5b50505050565b6060610efb82611124565b610f1057610f0f63a14c4b5060e01b6111d0565b5b6000600d6004018054610f22906134c8565b905003610f3e5760405180602001604052806000815250610f73565b600d600401610f4c836120fb565b600d600501604051602001610f6393929190613706565b6040516020818303038152906040525b9050919050565b610f82611309565b610f8c828261214b565b5050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61102c611309565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361109e5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016110959190612a0a565b60405180910390fd5b6110a781611618565b50565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061111d575061111c826122ed565b5b9050919050565b60008161112f6113f2565b116111ca5761113c6113fb565b8211156111665761115f6004600084815260200190815260200160002054612357565b90506111cb565b6000548210156111c95760005b60006004600085815260200190815260200160002054915081036111a2578261119b90613737565b9250611173565b60007c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b8060005260046000fd5b60006111e583610aca565b905081801561122757508073ffffffffffffffffffffffffffffffffffffffff1661120e611563565b73ffffffffffffffffffffffffffffffffffffffff1614155b156112535761123d81611238611563565b610f90565b6112525761125163cfb3b94260e01b6111d0565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b611311612398565b73ffffffffffffffffffffffffffffffffffffffff1661132f610b87565b73ffffffffffffffffffffffffffffffffffffffff161461138e57611352612398565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016113859190612a0a565b60405180910390fd5b565b818360040190816113a191906138f7565b50808360050190816113b391906138f7565b507f927a41e440ce6a96781dbee2e5693388ce49325e4729d62114f699d43dea385e82826040516113e59291906139c9565b60405180910390a1505050565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60008161142e6113f2565b1161152657600460008381526020019081526020016000205490506114516113fb565b8211156114765761146181612357565b6115375761147563df2d9b4260e01b6111d0565b5b600081036114fd5760005482106114985761149763df2d9b4260e01b6111d0565b5b5b600460008360019003935083815260200190815260200160002054905060008103156114f85760007c010000000000000000000000000000000000000000000000000000000082160315611537576114f763df2d9b4260e01b6111d0565b5b611499565b60007c010000000000000000000000000000000000000000000000000000000082160315611537575b61153663df2d9b4260e01b6111d0565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e86115cc8686846123a0565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8160000160006116ee9190612726565b60005b81518110156118a45761171d8282815181106117105761170f613a00565b5b60200260200101516123a9565b8260000182828151811061173457611733613a00565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d2871318383838151811061187c5761187b613a00565b5b60200260200101516040516118919190613aaa565b60405180910390a28060010190506116f1565b505050565b6002600a54036118e5576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600a81905550565b60008088600101548667ffffffffffffffff168a6002015461191191906135ca565b1115611949576040517f1e186f7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008960030160008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008a6000018a815481106119b8576119b7613a00565b5b906000526020600020906005020160020160009054906101000a900463ffffffff1663ffffffff16905060008082146119f157816119fd565b8767ffffffffffffffff165b905060008114158015611a245750808967ffffffffffffffff1684611a2291906135ca565b115b15611a5b576040517ff0700b7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611a7157611a70613a00565b5b9060005260206000209060050201600301548967ffffffffffffffff16611a989190613528565b341015611ad1576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611ae757611ae6613a00565b5b906000526020600020906005020160000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421180611b6857508b6000018b81548110611b3557611b34613a00565b5b906000526020600020906005020160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1642105b15611b9f576040517f951b974f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060001b8d6000018d81548110611bbb57611bba613a00565b5b90600052602060002090600502016001015403611bd9576001611cb4565b611cb3888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508e6000018e81548110611c3457611c33613a00565b5b90600052602060002090600502016001015460008c67ffffffffffffffff1614611c86578d8c604051602001611c6b929190613b43565b60405160208183030381529060405280519060200120611cae565b8d604051602001611c979190613b6f565b604051602081830303815290604052805190602001205b61246b565b5b905080611ced576040517fb05e92fa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008d6000018d81548110611d0557611d04613a00565b5b906000526020600020906005020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008e6000018e81548110611d5157611d50613a00565b5b9060005260206000209060050201600301548c67ffffffffffffffff16611d789190613528565b905081819750975050505050505097509795505050505050565b6000810315611e495760008273ffffffffffffffffffffffffffffffffffffffff1682604051611dc190613bbb565b60006040518083038185875af1925050503d8060008114611dfe576040519150601f19603f3d011682016040523d82523d6000602084013e611e03565b606091505b5050905080611e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3e90613c1c565b60405180910390fd5b505b5050565b611e67828260405180602001604052806000815250612482565b5050565b6001600a81905550565b606081600001805480602002602001604051908101604052809291908181526020016000905b82821015611fc157838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001600182015481526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611e9b565b505050509050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ff2611563565b8786866040518563ffffffff1660e01b81526004016120149493929190613c91565b6020604051808303816000875af192505050801561205057506040513d601f19601f8201168201806040525081019061204d9190613cf2565b60015b6120a8573d8060008114612080576040519150601f19603f3d011682016040523d82523d6000602084013e612085565b606091505b5060008151036120a05761209f63d1a57ed660e01b6111d0565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060a060405101806040526020810391506000825281835b60011561213657600184039350600a81066030018453600a8104905080612114575b50828103602084039350808452505050919050565b600061215561160e565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156121ba5781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016121b1929190613d50565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361222c5760006040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016122239190612a0a565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b600033905090565b60009392505050565b806020015167ffffffffffffffff16816000015167ffffffffffffffff16106123fe576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff1603612468576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60008261247885846124fe565b1490509392505050565b61248c838361254e565b60008373ffffffffffffffffffffffffffffffffffffffff163b146124f957600080549050600083820390505b6124cc6000868380600101945086611fcc565b6124e1576124e063d1a57ed660e01b6111d0565b5b8181106124b95781600054146124f657600080fd5b50505b505050565b60008082905060005b8451811015612543576125348286838151811061252757612526613a00565b5b60200260200101516126d4565b91508080600101915050612507565b508091505092915050565b6000805490506000820361256d5761256c63b562e8dd60e01b6111d0565b5b61257a60008483856115af565b61259a8361258b60008660006115b5565b612594856126ff565b176115dd565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690506000810361265257612651632e07630060e01b6111d0565b5b6000838301905060008390506126666113fb565b600183031115612681576126806381647e3a60e01b6111d0565b5b5b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a481816001019150810361268257816000819055505050506126cf6000848385611608565b505050565b60008183106126ec576126e7828461270f565b6126f7565b6126f6838361270f565b5b905092915050565b60006001821460e11b9050919050565b600082600052816020526040600020905092915050565b5080546000825560050290600052602060002090810190612747919061274a565b50565b5b808211156127e157600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060050161274b565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61282e816127f9565b811461283957600080fd5b50565b60008135905061284b81612825565b92915050565b600060208284031215612867576128666127ef565b5b60006128758482850161283c565b91505092915050565b60008115159050919050565b6128938161287e565b82525050565b60006020820190506128ae600083018461288a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156128ee5780820151818401526020810190506128d3565b60008484015250505050565b6000601f19601f8301169050919050565b6000612916826128b4565b61292081856128bf565b93506129308185602086016128d0565b612939816128fa565b840191505092915050565b6000602082019050818103600083015261295e818461290b565b905092915050565b6000819050919050565b61297981612966565b811461298457600080fd5b50565b60008135905061299681612970565b92915050565b6000602082840312156129b2576129b16127ef565b5b60006129c084828501612987565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006129f4826129c9565b9050919050565b612a04816129e9565b82525050565b6000602082019050612a1f60008301846129fb565b92915050565b612a2e816129e9565b8114612a3957600080fd5b50565b600081359050612a4b81612a25565b92915050565b60008060408385031215612a6857612a676127ef565b5b6000612a7685828601612a3c565b9250506020612a8785828601612987565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612ad3826128fa565b810181811067ffffffffffffffff82111715612af257612af1612a9b565b5b80604052505050565b6000612b056127e5565b9050612b118282612aca565b919050565b600067ffffffffffffffff821115612b3157612b30612a9b565b5b612b3a826128fa565b9050602081019050919050565b82818337600083830152505050565b6000612b69612b6484612b16565b612afb565b905082815260208101848484011115612b8557612b84612a96565b5b612b90848285612b47565b509392505050565b600082601f830112612bad57612bac612a91565b5b8135612bbd848260208601612b56565b91505092915050565b60008060408385031215612bdd57612bdc6127ef565b5b600083013567ffffffffffffffff811115612bfb57612bfa6127f4565b5b612c0785828601612b98565b925050602083013567ffffffffffffffff811115612c2857612c276127f4565b5b612c3485828601612b98565b9150509250929050565b612c4781612966565b82525050565b6000602082019050612c626000830184612c3e565b92915050565b600080600060608486031215612c8157612c806127ef565b5b6000612c8f86828701612a3c565b9350506020612ca086828701612a3c565b9250506040612cb186828701612987565b9150509250925092565b60008060408385031215612cd257612cd16127ef565b5b6000612ce085828601612987565b9250506020612cf185828601612987565b9150509250929050565b6000604082019050612d1060008301856129fb565b612d1d6020830184612c3e565b9392505050565b600060208284031215612d3a57612d396127ef565b5b6000612d4884828501612a3c565b91505092915050565b600067ffffffffffffffff821115612d6c57612d6b612a9b565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b612da481612d87565b8114612daf57600080fd5b50565b600081359050612dc181612d9b565b92915050565b6000819050919050565b612dda81612dc7565b8114612de557600080fd5b50565b600081359050612df781612dd1565b92915050565b600063ffffffff82169050919050565b612e1681612dfd565b8114612e2157600080fd5b50565b600081359050612e3381612e0d565b92915050565b600060c08284031215612e4f57612e4e612d82565b5b612e5960c0612afb565b90506000612e6984828501612db2565b6000830152506020612e7d84828501612db2565b6020830152506040612e9184828501612de8565b6040830152506060612ea584828501612e24565b6060830152506080612eb984828501612987565b60808301525060a0612ecd84828501612a3c565b60a08301525092915050565b6000612eec612ee784612d51565b612afb565b90508083825260208201905060c08402830185811115612f0f57612f0e612d7d565b5b835b81811015612f385780612f248882612e39565b84526020840193505060c081019050612f11565b5050509392505050565b600082601f830112612f5757612f56612a91565b5b8135612f67848260208601612ed9565b91505092915050565b600060208284031215612f8657612f856127ef565b5b600082013567ffffffffffffffff811115612fa457612fa36127f4565b5b612fb084828501612f42565b91505092915050565b600080fd5b60008083601f840112612fd457612fd3612a91565b5b8235905067ffffffffffffffff811115612ff157612ff0612fb9565b5b60208301915083602082028301111561300d5761300c612d7d565b5b9250929050565b60008060008060008060a08789031215613031576130306127ef565b5b600061303f89828a01612db2565b965050602061305089828a01612a3c565b955050604061306189828a01612db2565b945050606061307289828a01612db2565b935050608087013567ffffffffffffffff811115613093576130926127f4565b5b61309f89828a01612fbe565b92509250509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6130e381612d87565b82525050565b6130f281612dc7565b82525050565b61310181612dfd565b82525050565b61311081612966565b82525050565b61311f816129e9565b82525050565b60c08201600082015161313b60008501826130da565b50602082015161314e60208501826130da565b50604082015161316160408501826130e9565b50606082015161317460608501826130f8565b5060808201516131876080850182613107565b5060a082015161319a60a0850182613116565b50505050565b60006131ac8383613125565b60c08301905092915050565b6000602082019050919050565b60006131d0826130ae565b6131da81856130b9565b93506131e5836130ca565b8060005b838110156132165781516131fd88826131a0565b9750613208836131b8565b9250506001810190506131e9565b5085935050505092915050565b6000602082019050818103600083015261323d81846131c5565b905092915050565b61324e8161287e565b811461325957600080fd5b50565b60008135905061326b81613245565b92915050565b60008060408385031215613288576132876127ef565b5b600061329685828601612a3c565b92505060206132a78582860161325c565b9150509250929050565b600067ffffffffffffffff8211156132cc576132cb612a9b565b5b6132d5826128fa565b9050602081019050919050565b60006132f56132f0846132b1565b612afb565b90508281526020810184848401111561331157613310612a96565b5b61331c848285612b47565b509392505050565b600082601f83011261333957613338612a91565b5b81356133498482602086016132e2565b91505092915050565b6000806000806080858703121561336c5761336b6127ef565b5b600061337a87828801612a3c565b945050602061338b87828801612a3c565b935050604061339c87828801612987565b925050606085013567ffffffffffffffff8111156133bd576133bc6127f4565b5b6133c987828801613324565b91505092959194509250565b60006bffffffffffffffffffffffff82169050919050565b6133f6816133d5565b811461340157600080fd5b50565b600081359050613413816133ed565b92915050565b600080604083850312156134305761342f6127ef565b5b600061343e85828601612a3c565b925050602061344f85828601613404565b9150509250929050565b600080604083850312156134705761346f6127ef565b5b600061347e85828601612a3c565b925050602061348f85828601612a3c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134e057607f821691505b6020821081036134f3576134f2613499565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061353382612966565b915061353e83612966565b925082820261354c81612966565b91508282048414831517613563576135626134f9565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006135a482612966565b91506135af83612966565b9250826135bf576135be61356a565b5b828204905092915050565b60006135d582612966565b91506135e083612966565b92508282019050808211156135f8576135f76134f9565b5b92915050565b600061360982612966565b915061361483612966565b925082820390508181111561362c5761362b6134f9565b5b92915050565b600081905092915050565b60008190508160005260206000209050919050565b6000815461365f816134c8565b6136698186613632565b945060018216600081146136845760018114613699576136cc565b60ff19831686528115158202860193506136cc565b6136a28561363d565b60005b838110156136c4578154818901526001820191506020810190506136a5565b838801955050505b50505092915050565b60006136e0826128b4565b6136ea8185613632565b93506136fa8185602086016128d0565b80840191505092915050565b60006137128286613652565b915061371e82856136d5565b915061372a8284613652565b9150819050949350505050565b600061374282612966565b915060008203613755576137546134f9565b5b600182039050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026137ad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613770565b6137b78683613770565b95508019841693508086168417925050509392505050565b6000819050919050565b60006137f46137ef6137ea84612966565b6137cf565b612966565b9050919050565b6000819050919050565b61380e836137d9565b61382261381a826137fb565b84845461377d565b825550505050565b600090565b61383761382a565b613842818484613805565b505050565b5b818110156138665761385b60008261382f565b600181019050613848565b5050565b601f8211156138ab5761387c8161363d565b61388584613760565b81016020851015613894578190505b6138a86138a085613760565b830182613847565b50505b505050565b600082821c905092915050565b60006138ce600019846008026138b0565b1980831691505092915050565b60006138e783836138bd565b9150826002028217905092915050565b613900826128b4565b67ffffffffffffffff81111561391957613918612a9b565b5b61392382546134c8565b61392e82828561386a565b600060209050601f831160018114613961576000841561394f578287015190505b61395985826138db565b8655506139c1565b601f19841661396f8661363d565b60005b8281101561399757848901518255600182019150602085019450602081019050613972565b868310156139b457848901516139b0601f8916826138bd565b8355505b6001600288020188555050505b505050505050565b600060408201905081810360008301526139e3818561290b565b905081810360208301526139f7818461290b565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60c082016000820151613a4560008501826130da565b506020820151613a5860208501826130da565b506040820151613a6b60408501826130e9565b506060820151613a7e60608501826130f8565b506080820151613a916080850182613107565b5060a0820151613aa460a0850182613116565b50505050565b600060c082019050613abf6000830184613a2f565b92915050565b60008160601b9050919050565b6000613add82613ac5565b9050919050565b6000613aef82613ad2565b9050919050565b613b07613b02826129e9565b613ae4565b82525050565b60008160c01b9050919050565b6000613b2582613b0d565b9050919050565b613b3d613b3882612d87565b613b1a565b82525050565b6000613b4f8285613af6565b601482019150613b5f8284613b2c565b6008820191508190509392505050565b6000613b7b8284613af6565b60148201915081905092915050565b600081905092915050565b50565b6000613ba5600083613b8a565b9150613bb082613b95565b600082019050919050565b6000613bc682613b98565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000613c06600f836128bf565b9150613c1182613bd0565b602082019050919050565b60006020820190508181036000830152613c3581613bf9565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613c6382613c3c565b613c6d8185613c47565b9350613c7d8185602086016128d0565b613c86816128fa565b840191505092915050565b6000608082019050613ca660008301876129fb565b613cb360208301866129fb565b613cc06040830185612c3e565b8181036060830152613cd28184613c58565b905095945050505050565b600081519050613cec81612825565b92915050565b600060208284031215613d0857613d076127ef565b5b6000613d1684828501613cdd565b91505092915050565b6000613d3a613d35613d30846133d5565b6137cf565b612966565b9050919050565b613d4a81613d1f565b82525050565b6000604082019050613d656000830185613d41565b613d726020830184612c3e565b939250505056fea264697066735822122001088b708ef41bac9b71fff46b595568e20f51615f8ee4b4bad87926a35696cc64736f6c634300081b0033",
  "deployedBytecode": "0x6080604052600436106101405760003560e01c8063715018a6116100b6578063a22cb4651161006f578063a22cb46514610427578063b88d4fde14610450578063c87b56dd1461046c578063d691e43c146104a9578063e985e9c5146104d2578063f2fde38b1461050f57610140565b8063715018a61461034a5780638da5cb5b14610361578063903f00251461038c578063945dc1c2146103b557806395d89b41146103d1578063a06343a3146103fc57610140565b806318160ddd1161010857806318160ddd1461022f57806323b872dd1461025a5780632a55205a1461027657806342842e0e146102b45780636352211e146102d057806370a082311461030d57610140565b806301ffc9a71461014557806306fdde0314610182578063081812fc146101ad578063095ea7b3146101ea5780631789e2d814610206575b600080fd5b34801561015157600080fd5b5061016c60048036038101906101679190612851565b610538565b6040516101799190612899565b60405180910390f35b34801561018e57600080fd5b5061019761054a565b6040516101a49190612944565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf919061299c565b6105dc565b6040516101e19190612a0a565b60405180910390f35b61020460048036038101906101ff9190612a51565b61063a565b005b34801561021257600080fd5b5061022d60048036038101906102289190612bc6565b61064a565b005b34801561023b57600080fd5b5061024461066c565b6040516102519190612c4d565b60405180910390f35b610274600480360381019061026f9190612c68565b6106b9565b005b34801561028257600080fd5b5061029d60048036038101906102989190612cbb565b61097a565b6040516102ab929190612cfb565b60405180910390f35b6102ce60048036038101906102c99190612c68565b610aaa565b005b3480156102dc57600080fd5b506102f760048036038101906102f2919061299c565b610aca565b6040516103049190612a0a565b60405180910390f35b34801561031957600080fd5b50610334600480360381019061032f9190612d24565b610adc565b6040516103419190612c4d565b60405180910390f35b34801561035657600080fd5b5061035f610b73565b005b34801561036d57600080fd5b50610376610b87565b6040516103839190612a0a565b60405180910390f35b34801561039857600080fd5b506103b360048036038101906103ae9190612f70565b610bb1565b005b6103cf60048036038101906103ca9190613014565b610bd0565b005b3480156103dd57600080fd5b506103e6610cf0565b6040516103f39190612944565b60405180910390f35b34801561040857600080fd5b50610411610d82565b60405161041e9190613223565b60405180910390f35b34801561043357600080fd5b5061044e60048036038101906104499190613271565b610d93565b005b61046a60048036038101906104659190613352565b610e9e565b005b34801561047857600080fd5b50610493600480360381019061048e919061299c565b610ef0565b6040516104a09190612944565b60405180910390f35b3480156104b557600080fd5b506104d060048036038101906104cb9190613419565b610f7a565b005b3480156104de57600080fd5b506104f960048036038101906104f49190613459565b610f90565b6040516105069190612899565b60405180910390f35b34801561051b57600080fd5b5061053660048036038101906105319190612d24565b611024565b005b6000610543826110aa565b9050919050565b606060028054610559906134c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610585906134c8565b80156105d25780601f106105a7576101008083540402835291602001916105d2565b820191906000526020600020905b8154815290600101906020018083116105b557829003601f168201915b5050505050905090565b60006105e782611124565b6105fc576105fb63cf4700e460e01b6111d0565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610646828260016111da565b5050565b610652611309565b6106688282600d6113909092919063ffffffff16565b5050565b60006106766113f2565b600154600054030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106a96113fb565b146106b657600854810190505b90565b60006106c482611423565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107395761073863a114810060e01b6111d0565b5b6000806107458461153c565b9150915061075b8187610756611563565b61156b565b610786576107708661076b611563565b610f90565b610785576107846359c896be60e01b6111d0565b5b5b61079386868660016115af565b801561079e57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061086c856108488888876115b5565b7c0200000000000000000000000000000000000000000000000000000000176115dd565b600460008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416036108f257600060018501905060006004600083815260200190815260200160002054036108f05760005481146108ef578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081036109645761096363ea553b3460e01b6111d0565b5b6109718787876001611608565b50505050505050565b6000806000600c6000868152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008260000160149054906101000a90046bffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a5b57600b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b60000160149054906101000a90046bffffffffffffffffffffffff1690505b6000610a6561160e565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610a8d9190613528565b610a979190613599565b9050828195509550505050509250929050565b610ac583838360405180602001604052806000815250610e9e565b505050565b6000610ad582611423565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b2257610b21638f4eb60460e01b6111d0565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610b7b611309565b610b856000611618565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610bb9611309565b610bcd81600d6116de90919063ffffffff16565b50565b610bd86118a9565b600080610c038867ffffffffffffffff168888888888600d6118ef909695949392919063ffffffff16565b915091508567ffffffffffffffff16600d6002016000828254610c2691906135ca565b925050819055508567ffffffffffffffff16600d60030160008a67ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ca491906135ca565b92505081905550610cb58282611d92565b610cca338234610cc591906135fe565b611d92565b610cde878767ffffffffffffffff16611e4d565b5050610ce8611e6b565b505050505050565b606060038054610cff906134c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b906134c8565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b5050505050905090565b6060610d8e600d611e75565b905090565b8060076000610da0611563565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e4d611563565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e929190612899565b60405180910390a35050565b610ea98484846106b9565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610eea57610ed484848484611fcc565b610ee957610ee863d1a57ed660e01b6111d0565b5b5b50505050565b6060610efb82611124565b610f1057610f0f63a14c4b5060e01b6111d0565b5b6000600d6004018054610f22906134c8565b905003610f3e5760405180602001604052806000815250610f73565b600d600401610f4c836120fb565b600d600501604051602001610f6393929190613706565b6040516020818303038152906040525b9050919050565b610f82611309565b610f8c828261214b565b5050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61102c611309565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361109e5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016110959190612a0a565b60405180910390fd5b6110a781611618565b50565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061111d575061111c826122ed565b5b9050919050565b60008161112f6113f2565b116111ca5761113c6113fb565b8211156111665761115f6004600084815260200190815260200160002054612357565b90506111cb565b6000548210156111c95760005b60006004600085815260200190815260200160002054915081036111a2578261119b90613737565b9250611173565b60007c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b8060005260046000fd5b60006111e583610aca565b905081801561122757508073ffffffffffffffffffffffffffffffffffffffff1661120e611563565b73ffffffffffffffffffffffffffffffffffffffff1614155b156112535761123d81611238611563565b610f90565b6112525761125163cfb3b94260e01b6111d0565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b611311612398565b73ffffffffffffffffffffffffffffffffffffffff1661132f610b87565b73ffffffffffffffffffffffffffffffffffffffff161461138e57611352612398565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016113859190612a0a565b60405180910390fd5b565b818360040190816113a191906138f7565b50808360050190816113b391906138f7565b507f927a41e440ce6a96781dbee2e5693388ce49325e4729d62114f699d43dea385e82826040516113e59291906139c9565b60405180910390a1505050565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60008161142e6113f2565b1161152657600460008381526020019081526020016000205490506114516113fb565b8211156114765761146181612357565b6115375761147563df2d9b4260e01b6111d0565b5b600081036114fd5760005482106114985761149763df2d9b4260e01b6111d0565b5b5b600460008360019003935083815260200190815260200160002054905060008103156114f85760007c010000000000000000000000000000000000000000000000000000000082160315611537576114f763df2d9b4260e01b6111d0565b5b611499565b60007c010000000000000000000000000000000000000000000000000000000082160315611537575b61153663df2d9b4260e01b6111d0565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e86115cc8686846123a0565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8160000160006116ee9190612726565b60005b81518110156118a45761171d8282815181106117105761170f613a00565b5b60200260200101516123a9565b8260000182828151811061173457611733613a00565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d2871318383838151811061187c5761187b613a00565b5b60200260200101516040516118919190613aaa565b60405180910390a28060010190506116f1565b505050565b6002600a54036118e5576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600a81905550565b60008088600101548667ffffffffffffffff168a6002015461191191906135ca565b1115611949576040517f1e186f7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008960030160008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008a6000018a815481106119b8576119b7613a00565b5b906000526020600020906005020160020160009054906101000a900463ffffffff1663ffffffff16905060008082146119f157816119fd565b8767ffffffffffffffff165b905060008114158015611a245750808967ffffffffffffffff1684611a2291906135ca565b115b15611a5b576040517ff0700b7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611a7157611a70613a00565b5b9060005260206000209060050201600301548967ffffffffffffffff16611a989190613528565b341015611ad1576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611ae757611ae6613a00565b5b906000526020600020906005020160000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421180611b6857508b6000018b81548110611b3557611b34613a00565b5b906000526020600020906005020160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1642105b15611b9f576040517f951b974f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060001b8d6000018d81548110611bbb57611bba613a00565b5b90600052602060002090600502016001015403611bd9576001611cb4565b611cb3888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508e6000018e81548110611c3457611c33613a00565b5b90600052602060002090600502016001015460008c67ffffffffffffffff1614611c86578d8c604051602001611c6b929190613b43565b60405160208183030381529060405280519060200120611cae565b8d604051602001611c979190613b6f565b604051602081830303815290604052805190602001205b61246b565b5b905080611ced576040517fb05e92fa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008d6000018d81548110611d0557611d04613a00565b5b906000526020600020906005020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008e6000018e81548110611d5157611d50613a00565b5b9060005260206000209060050201600301548c67ffffffffffffffff16611d789190613528565b905081819750975050505050505097509795505050505050565b6000810315611e495760008273ffffffffffffffffffffffffffffffffffffffff1682604051611dc190613bbb565b60006040518083038185875af1925050503d8060008114611dfe576040519150601f19603f3d011682016040523d82523d6000602084013e611e03565b606091505b5050905080611e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3e90613c1c565b60405180910390fd5b505b5050565b611e67828260405180602001604052806000815250612482565b5050565b6001600a81905550565b606081600001805480602002602001604051908101604052809291908181526020016000905b82821015611fc157838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001600182015481526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611e9b565b505050509050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ff2611563565b8786866040518563ffffffff1660e01b81526004016120149493929190613c91565b6020604051808303816000875af192505050801561205057506040513d601f19601f8201168201806040525081019061204d9190613cf2565b60015b6120a8573d8060008114612080576040519150601f19603f3d011682016040523d82523d6000602084013e612085565b606091505b5060008151036120a05761209f63d1a57ed660e01b6111d0565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060a060405101806040526020810391506000825281835b60011561213657600184039350600a81066030018453600a8104905080612114575b50828103602084039350808452505050919050565b600061215561160e565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156121ba5781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016121b1929190613d50565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361222c5760006040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016122239190612a0a565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b600033905090565b60009392505050565b806020015167ffffffffffffffff16816000015167ffffffffffffffff16106123fe576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff1603612468576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60008261247885846124fe565b1490509392505050565b61248c838361254e565b60008373ffffffffffffffffffffffffffffffffffffffff163b146124f957600080549050600083820390505b6124cc6000868380600101945086611fcc565b6124e1576124e063d1a57ed660e01b6111d0565b5b8181106124b95781600054146124f657600080fd5b50505b505050565b60008082905060005b8451811015612543576125348286838151811061252757612526613a00565b5b60200260200101516126d4565b91508080600101915050612507565b508091505092915050565b6000805490506000820361256d5761256c63b562e8dd60e01b6111d0565b5b61257a60008483856115af565b61259a8361258b60008660006115b5565b612594856126ff565b176115dd565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690506000810361265257612651632e07630060e01b6111d0565b5b6000838301905060008390506126666113fb565b600183031115612681576126806381647e3a60e01b6111d0565b5b5b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a481816001019150810361268257816000819055505050506126cf6000848385611608565b505050565b60008183106126ec576126e7828461270f565b6126f7565b6126f6838361270f565b5b905092915050565b60006001821460e11b9050919050565b600082600052816020526040600020905092915050565b5080546000825560050290600052602060002090810190612747919061274a565b50565b5b808211156127e157600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060050161274b565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61282e816127f9565b811461283957600080fd5b50565b60008135905061284b81612825565b92915050565b600060208284031215612867576128666127ef565b5b60006128758482850161283c565b91505092915050565b60008115159050919050565b6128938161287e565b82525050565b60006020820190506128ae600083018461288a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156128ee5780820151818401526020810190506128d3565b60008484015250505050565b6000601f19601f8301169050919050565b6000612916826128b4565b61292081856128bf565b93506129308185602086016128d0565b612939816128fa565b840191505092915050565b6000602082019050818103600083015261295e818461290b565b905092915050565b6000819050919050565b61297981612966565b811461298457600080fd5b50565b60008135905061299681612970565b92915050565b6000602082840312156129b2576129b16127ef565b5b60006129c084828501612987565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006129f4826129c9565b9050919050565b612a04816129e9565b82525050565b6000602082019050612a1f60008301846129fb565b92915050565b612a2e816129e9565b8114612a3957600080fd5b50565b600081359050612a4b81612a25565b92915050565b60008060408385031215612a6857612a676127ef565b5b6000612a7685828601612a3c565b9250506020612a8785828601612987565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612ad3826128fa565b810181811067ffffffffffffffff82111715612af257612af1612a9b565b5b80604052505050565b6000612b056127e5565b9050612b118282612aca565b919050565b600067ffffffffffffffff821115612b3157612b30612a9b565b5b612b3a826128fa565b9050602081019050919050565b82818337600083830152505050565b6000612b69612b6484612b16565b612afb565b905082815260208101848484011115612b8557612b84612a96565b5b612b90848285612b47565b509392505050565b600082601f830112612bad57612bac612a91565b5b8135612bbd848260208601612b56565b91505092915050565b60008060408385031215612bdd57612bdc6127ef565b5b600083013567ffffffffffffffff811115612bfb57612bfa6127f4565b5b612c0785828601612b98565b925050602083013567ffffffffffffffff811115612c2857612c276127f4565b5b612c3485828601612b98565b9150509250929050565b612c4781612966565b82525050565b6000602082019050612c626000830184612c3e565b92915050565b600080600060608486031215612c8157612c806127ef565b5b6000612c8f86828701612a3c565b9350506020612ca086828701612a3c565b9250506040612cb186828701612987565b9150509250925092565b60008060408385031215612cd257612cd16127ef565b5b6000612ce085828601612987565b9250506020612cf185828601612987565b9150509250929050565b6000604082019050612d1060008301856129fb565b612d1d6020830184612c3e565b9392505050565b600060208284031215612d3a57612d396127ef565b5b6000612d4884828501612a3c565b91505092915050565b600067ffffffffffffffff821115612d6c57612d6b612a9b565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b612da481612d87565b8114612daf57600080fd5b50565b600081359050612dc181612d9b565b92915050565b6000819050919050565b612dda81612dc7565b8114612de557600080fd5b50565b600081359050612df781612dd1565b92915050565b600063ffffffff82169050919050565b612e1681612dfd565b8114612e2157600080fd5b50565b600081359050612e3381612e0d565b92915050565b600060c08284031215612e4f57612e4e612d82565b5b612e5960c0612afb565b90506000612e6984828501612db2565b6000830152506020612e7d84828501612db2565b6020830152506040612e9184828501612de8565b6040830152506060612ea584828501612e24565b6060830152506080612eb984828501612987565b60808301525060a0612ecd84828501612a3c565b60a08301525092915050565b6000612eec612ee784612d51565b612afb565b90508083825260208201905060c08402830185811115612f0f57612f0e612d7d565b5b835b81811015612f385780612f248882612e39565b84526020840193505060c081019050612f11565b5050509392505050565b600082601f830112612f5757612f56612a91565b5b8135612f67848260208601612ed9565b91505092915050565b600060208284031215612f8657612f856127ef565b5b600082013567ffffffffffffffff811115612fa457612fa36127f4565b5b612fb084828501612f42565b91505092915050565b600080fd5b60008083601f840112612fd457612fd3612a91565b5b8235905067ffffffffffffffff811115612ff157612ff0612fb9565b5b60208301915083602082028301111561300d5761300c612d7d565b5b9250929050565b60008060008060008060a08789031215613031576130306127ef565b5b600061303f89828a01612db2565b965050602061305089828a01612a3c565b955050604061306189828a01612db2565b945050606061307289828a01612db2565b935050608087013567ffffffffffffffff811115613093576130926127f4565b5b61309f89828a01612fbe565b92509250509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6130e381612d87565b82525050565b6130f281612dc7565b82525050565b61310181612dfd565b82525050565b61311081612966565b82525050565b61311f816129e9565b82525050565b60c08201600082015161313b60008501826130da565b50602082015161314e60208501826130da565b50604082015161316160408501826130e9565b50606082015161317460608501826130f8565b5060808201516131876080850182613107565b5060a082015161319a60a0850182613116565b50505050565b60006131ac8383613125565b60c08301905092915050565b6000602082019050919050565b60006131d0826130ae565b6131da81856130b9565b93506131e5836130ca565b8060005b838110156132165781516131fd88826131a0565b9750613208836131b8565b9250506001810190506131e9565b5085935050505092915050565b6000602082019050818103600083015261323d81846131c5565b905092915050565b61324e8161287e565b811461325957600080fd5b50565b60008135905061326b81613245565b92915050565b60008060408385031215613288576132876127ef565b5b600061329685828601612a3c565b92505060206132a78582860161325c565b9150509250929050565b600067ffffffffffffffff8211156132cc576132cb612a9b565b5b6132d5826128fa565b9050602081019050919050565b60006132f56132f0846132b1565b612afb565b90508281526020810184848401111561331157613310612a96565b5b61331c848285612b47565b509392505050565b600082601f83011261333957613338612a91565b5b81356133498482602086016132e2565b91505092915050565b6000806000806080858703121561336c5761336b6127ef565b5b600061337a87828801612a3c565b945050602061338b87828801612a3c565b935050604061339c87828801612987565b925050606085013567ffffffffffffffff8111156133bd576133bc6127f4565b5b6133c987828801613324565b91505092959194509250565b60006bffffffffffffffffffffffff82169050919050565b6133f6816133d5565b811461340157600080fd5b50565b600081359050613413816133ed565b92915050565b600080604083850312156134305761342f6127ef565b5b600061343e85828601612a3c565b925050602061344f85828601613404565b9150509250929050565b600080604083850312156134705761346f6127ef565b5b600061347e85828601612a3c565b925050602061348f85828601612a3c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134e057607f821691505b6020821081036134f3576134f2613499565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061353382612966565b915061353e83612966565b925082820261354c81612966565b91508282048414831517613563576135626134f9565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006135a482612966565b91506135af83612966565b9250826135bf576135be61356a565b5b828204905092915050565b60006135d582612966565b91506135e083612966565b92508282019050808211156135f8576135f76134f9565b5b92915050565b600061360982612966565b915061361483612966565b925082820390508181111561362c5761362b6134f9565b5b92915050565b600081905092915050565b60008190508160005260206000209050919050565b6000815461365f816134c8565b6136698186613632565b945060018216600081146136845760018114613699576136cc565b60ff19831686528115158202860193506136cc565b6136a28561363d565b60005b838110156136c4578154818901526001820191506020810190506136a5565b838801955050505b50505092915050565b60006136e0826128b4565b6136ea8185613632565b93506136fa8185602086016128d0565b80840191505092915050565b60006137128286613652565b915061371e82856136d5565b915061372a8284613652565b9150819050949350505050565b600061374282612966565b915060008203613755576137546134f9565b5b600182039050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026137ad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613770565b6137b78683613770565b95508019841693508086168417925050509392505050565b6000819050919050565b60006137f46137ef6137ea84612966565b6137cf565b612966565b9050919050565b6000819050919050565b61380e836137d9565b61382261381a826137fb565b84845461377d565b825550505050565b600090565b61383761382a565b613842818484613805565b505050565b5b818110156138665761385b60008261382f565b600181019050613848565b5050565b601f8211156138ab5761387c8161363d565b61388584613760565b81016020851015613894578190505b6138a86138a085613760565b830182613847565b50505b505050565b600082821c905092915050565b60006138ce600019846008026138b0565b1980831691505092915050565b60006138e783836138bd565b9150826002028217905092915050565b613900826128b4565b67ffffffffffffffff81111561391957613918612a9b565b5b61392382546134c8565b61392e82828561386a565b600060209050601f831160018114613961576000841561394f578287015190505b61395985826138db565b8655506139c1565b601f19841661396f8661363d565b60005b8281101561399757848901518255600182019150602085019450602081019050613972565b868310156139b457848901516139b0601f8916826138bd565b8355505b6001600288020188555050505b505050505050565b600060408201905081810360008301526139e3818561290b565b905081810360208301526139f7818461290b565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60c082016000820151613a4560008501826130da565b506020820151613a5860208501826130da565b506040820151613a6b60408501826130e9565b506060820151613a7e60608501826130f8565b506080820151613a916080850182613107565b5060a0820151613aa460a0850182613116565b50505050565b600060c082019050613abf6000830184613a2f565b92915050565b60008160601b9050919050565b6000613add82613ac5565b9050919050565b6000613aef82613ad2565b9050919050565b613b07613b02826129e9565b613ae4565b82525050565b60008160c01b9050919050565b6000613b2582613b0d565b9050919050565b613b3d613b3882612d87565b613b1a565b82525050565b6000613b4f8285613af6565b601482019150613b5f8284613b2c565b6008820191508190509392505050565b6000613b7b8284613af6565b60148201915081905092915050565b600081905092915050565b50565b6000613ba5600083613b8a565b9150613bb082613b95565b600082019050919050565b6000613bc682613b98565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000613c06600f836128bf565b9150613c1182613bd0565b602082019050919050565b60006020820190508181036000830152613c3581613bf9565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613c6382613c3c565b613c6d8185613c47565b9350613c7d8185602086016128d0565b613c86816128fa565b840191505092915050565b6000608082019050613ca660008301876129fb565b613cb360208301866129fb565b613cc06040830185612c3e565b8181036060830152613cd28184613c58565b905095945050505050565b600081519050613cec81612825565b92915050565b600060208284031215613d0857613d076127ef565b5b6000613d1684828501613cdd565b91505092915050565b6000613d3a613d35613d30846133d5565b6137cf565b612966565b9050919050565b613d4a81613d1f565b82525050565b6000604082019050613d656000830185613d41565b613d726020830184612c3e565b939250505056fea264697066735822122001088b708ef41bac9b71fff46b595568e20f51615f8ee4b4bad87926a35696cc64736f6c634300081b0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
};