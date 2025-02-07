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
  "bytecode": "0x608060405234801561001057600080fd5b5060405161504338038061504383398181016040528101906100329190610c01565b84898981600290816100449190610f6e565b5080600390816100549190610f6e565b5061006361019060201b60201c565b60008190555061007761019060201b60201c565b61008561019960201b60201c565b10156100a2576100a163fed8210f60e01b6101c160201b60201c565b5b5050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101165760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161010d919061104f565b60405180910390fd5b610125816101cb60201b60201c565b506001600a8190555086600d60040190816101409190610f6e565b5085600d60050190816101539190610f6e565b5083600d6001018190555061016e838361029160201b60201c565b61018281600d61043960201b90919060201c565b5050505050505050506111e3565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b8060005260046000fd5b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006102a161060a60201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156103065781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016102fd9291906110aa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036103785760006040517fb6d9900a00000000000000000000000000000000000000000000000000000000815260040161036f919061104f565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b81600001600061044991906106d6565b60005b81518110156106055761047e82828151811061046b5761046a6110d3565b5b602002602001015161061460201b60201c565b82600001828281518110610495576104946110d3565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d287131838383815181106105dd576105dc6110d3565b5b60200260200101516040516105f291906111c8565b60405180910390a280600101905061044c565b505050565b6000612710905090565b806020015167ffffffffffffffff16816000015167ffffffffffffffff1610610669576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16036106d3576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b50805460008255600502906000526020600020908101906106f791906106fa565b50565b5b8082111561079157600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016106fb565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107fc826107b3565b810181811067ffffffffffffffff8211171561081b5761081a6107c4565b5b80604052505050565b600061082e610795565b905061083a82826107f3565b919050565b600067ffffffffffffffff82111561085a576108596107c4565b5b610863826107b3565b9050602081019050919050565b60005b8381101561088e578082015181840152602081019050610873565b60008484015250505050565b60006108ad6108a88461083f565b610824565b9050828152602081018484840111156108c9576108c86107ae565b5b6108d4848285610870565b509392505050565b600082601f8301126108f1576108f06107a9565b5b815161090184826020860161089a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109358261090a565b9050919050565b6109458161092a565b811461095057600080fd5b50565b6000815190506109628161093c565b92915050565b6000819050919050565b61097b81610968565b811461098657600080fd5b50565b60008151905061099881610972565b92915050565b60006bffffffffffffffffffffffff82169050919050565b6109bf8161099e565b81146109ca57600080fd5b50565b6000815190506109dc816109b6565b92915050565b600067ffffffffffffffff8211156109fd576109fc6107c4565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b610a3581610a18565b8114610a4057600080fd5b50565b600081519050610a5281610a2c565b92915050565b6000819050919050565b610a6b81610a58565b8114610a7657600080fd5b50565b600081519050610a8881610a62565b92915050565b600063ffffffff82169050919050565b610aa781610a8e565b8114610ab257600080fd5b50565b600081519050610ac481610a9e565b92915050565b600060c08284031215610ae057610adf610a13565b5b610aea60c0610824565b90506000610afa84828501610a43565b6000830152506020610b0e84828501610a43565b6020830152506040610b2284828501610a79565b6040830152506060610b3684828501610ab5565b6060830152506080610b4a84828501610989565b60808301525060a0610b5e84828501610953565b60a08301525092915050565b6000610b7d610b78846109e2565b610824565b90508083825260208201905060c08402830185811115610ba057610b9f610a0e565b5b835b81811015610bc95780610bb58882610aca565b84526020840193505060c081019050610ba2565b5050509392505050565b600082601f830112610be857610be76107a9565b5b8151610bf8848260208601610b6a565b91505092915050565b60008060008060008060008060006101208a8c031215610c2457610c2361079f565b5b60008a015167ffffffffffffffff811115610c4257610c416107a4565b5b610c4e8c828d016108dc565b99505060208a015167ffffffffffffffff811115610c6f57610c6e6107a4565b5b610c7b8c828d016108dc565b98505060408a015167ffffffffffffffff811115610c9c57610c9b6107a4565b5b610ca88c828d016108dc565b97505060608a015167ffffffffffffffff811115610cc957610cc86107a4565b5b610cd58c828d016108dc565b9650506080610ce68c828d01610953565b95505060a0610cf78c828d01610989565b94505060c0610d088c828d01610953565b93505060e0610d198c828d016109cd565b9250506101008a015167ffffffffffffffff811115610d3b57610d3a6107a4565b5b610d478c828d01610bd3565b9150509295985092959850929598565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da957607f821691505b602082108103610dbc57610dbb610d62565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610de7565b610e2e8683610de7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610e6b610e66610e6184610968565b610e46565b610968565b9050919050565b6000819050919050565b610e8583610e50565b610e99610e9182610e72565b848454610df4565b825550505050565b600090565b610eae610ea1565b610eb9818484610e7c565b505050565b5b81811015610edd57610ed2600082610ea6565b600181019050610ebf565b5050565b601f821115610f2257610ef381610dc2565b610efc84610dd7565b81016020851015610f0b578190505b610f1f610f1785610dd7565b830182610ebe565b50505b505050565b600082821c905092915050565b6000610f4560001984600802610f27565b1980831691505092915050565b6000610f5e8383610f34565b9150826002028217905092915050565b610f7782610d57565b67ffffffffffffffff811115610f9057610f8f6107c4565b5b610f9a8254610d91565b610fa5828285610ee1565b600060209050601f831160018114610fd85760008415610fc6578287015190505b610fd08582610f52565b865550611038565b601f198416610fe686610dc2565b60005b8281101561100e57848901518255600182019150602085019450602081019050610fe9565b8683101561102b5784890151611027601f891682610f34565b8355505b6001600288020188555050505b505050505050565b6110498161092a565b82525050565b60006020820190506110646000830184611040565b92915050565b600061108561108061107b8461099e565b610e46565b610968565b9050919050565b6110958161106a565b82525050565b6110a481610968565b82525050565b60006040820190506110bf600083018561108c565b6110cc602083018461109b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61110b81610a18565b82525050565b61111a81610a58565b82525050565b61112981610a8e565b82525050565b61113881610968565b82525050565b6111478161092a565b82525050565b60c0820160008201516111636000850182611102565b5060208201516111766020850182611102565b5060408201516111896040850182611111565b50606082015161119c6060850182611120565b5060808201516111af608085018261112f565b5060a08201516111c260a085018261113e565b50505050565b600060c0820190506111dd600083018461114d565b92915050565b613e51806111f26000396000f3fe6080604052600436106101405760003560e01c8063715018a6116100b6578063a22cb4651161006f578063a22cb46514610427578063b88d4fde14610450578063c87b56dd1461046c578063d691e43c146104a9578063e985e9c5146104d2578063f2fde38b1461050f57610140565b8063715018a61461034a5780638da5cb5b14610361578063903f00251461038c578063945dc1c2146103b557806395d89b41146103d1578063a06343a3146103fc57610140565b806318160ddd1161010857806318160ddd1461022f57806323b872dd1461025a5780632a55205a1461027657806342842e0e146102b45780636352211e146102d057806370a082311461030d57610140565b806301ffc9a71461014557806306fdde0314610182578063081812fc146101ad578063095ea7b3146101ea5780631789e2d814610206575b600080fd5b34801561015157600080fd5b5061016c600480360381019061016791906128f3565b610538565b604051610179919061293b565b60405180910390f35b34801561018e57600080fd5b5061019761055a565b6040516101a491906129e6565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf9190612a3e565b6105ec565b6040516101e19190612aac565b60405180910390f35b61020460048036038101906101ff9190612af3565b61064a565b005b34801561021257600080fd5b5061022d60048036038101906102289190612c68565b61065a565b005b34801561023b57600080fd5b5061024461067c565b6040516102519190612cef565b60405180910390f35b610274600480360381019061026f9190612d0a565b6106c9565b005b34801561028257600080fd5b5061029d60048036038101906102989190612d5d565b61098a565b6040516102ab929190612d9d565b60405180910390f35b6102ce60048036038101906102c99190612d0a565b610aba565b005b3480156102dc57600080fd5b506102f760048036038101906102f29190612a3e565b610ada565b6040516103049190612aac565b60405180910390f35b34801561031957600080fd5b50610334600480360381019061032f9190612dc6565b610aec565b6040516103419190612cef565b60405180910390f35b34801561035657600080fd5b5061035f610b83565b005b34801561036d57600080fd5b50610376610b97565b6040516103839190612aac565b60405180910390f35b34801561039857600080fd5b506103b360048036038101906103ae9190613012565b610bc1565b005b6103cf60048036038101906103ca91906130b6565b610be0565b005b3480156103dd57600080fd5b506103e6610d00565b6040516103f391906129e6565b60405180910390f35b34801561040857600080fd5b50610411610d92565b60405161041e91906132c5565b60405180910390f35b34801561043357600080fd5b5061044e60048036038101906104499190613313565b610da3565b005b61046a600480360381019061046591906133f4565b610eae565b005b34801561047857600080fd5b50610493600480360381019061048e9190612a3e565b610f00565b6040516104a091906129e6565b60405180910390f35b3480156104b557600080fd5b506104d060048036038101906104cb91906134bb565b610f8a565b005b3480156104de57600080fd5b506104f960048036038101906104f491906134fb565b610fa0565b604051610506919061293b565b60405180910390f35b34801561051b57600080fd5b5061053660048036038101906105319190612dc6565b611034565b005b6000610543826110ba565b8061055357506105528261114c565b5b9050919050565b6060600280546105699061356a565b80601f01602080910402602001604051908101604052809291908181526020018280546105959061356a565b80156105e25780601f106105b7576101008083540402835291602001916105e2565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b5050505050905090565b60006105f7826111c6565b61060c5761060b63cf4700e460e01b611272565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6106568282600161127c565b5050565b6106626113ab565b6106788282600d6114329092919063ffffffff16565b5050565b6000610686611494565b600154600054030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106b961149d565b146106c657600854810190505b90565b60006106d4826114c5565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107495761074863a114810060e01b611272565b5b600080610755846115de565b9150915061076b8187610766611605565b61160d565b610796576107808661077b611605565b610fa0565b610795576107946359c896be60e01b611272565b5b5b6107a38686866001611651565b80156107ae57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061087c85610858888887611657565b7c02000000000000000000000000000000000000000000000000000000001761167f565b600460008681526020019081526020016000208190555060007c020000000000000000000000000000000000000000000000000000000084160361090257600060018501905060006004600083815260200190815260200160002054036109005760005481146108ff578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081036109745761097363ea553b3460e01b611272565b5b61098187878760016116aa565b50505050505050565b6000806000600c6000868152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008260000160149054906101000a90046bffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a6b57600b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b60000160149054906101000a90046bffffffffffffffffffffffff1690505b6000610a756116b0565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610a9d91906135ca565b610aa7919061363b565b9050828195509550505050509250929050565b610ad583838360405180602001604052806000815250610eae565b505050565b6000610ae5826114c5565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b3257610b31638f4eb60460e01b611272565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610b8b6113ab565b610b9560006116ba565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610bc96113ab565b610bdd81600d61178090919063ffffffff16565b50565b610be861194b565b600080610c138867ffffffffffffffff168888888888600d611991909695949392919063ffffffff16565b915091508567ffffffffffffffff16600d6002016000828254610c36919061366c565b925050819055508567ffffffffffffffff16600d60030160008a67ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cb4919061366c565b92505081905550610cc58282611e34565b610cda338234610cd591906136a0565b611e34565b610cee878767ffffffffffffffff16611eef565b5050610cf8611f0d565b505050505050565b606060038054610d0f9061356a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3b9061356a565b8015610d885780601f10610d5d57610100808354040283529160200191610d88565b820191906000526020600020905b815481529060010190602001808311610d6b57829003601f168201915b5050505050905090565b6060610d9e600d611f17565b905090565b8060076000610db0611605565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e5d611605565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ea2919061293b565b60405180910390a35050565b610eb98484846106c9565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610efa57610ee48484848461206e565b610ef957610ef863d1a57ed660e01b611272565b5b5b50505050565b6060610f0b826111c6565b610f2057610f1f63a14c4b5060e01b611272565b5b6000600d6004018054610f329061356a565b905003610f4e5760405180602001604052806000815250610f83565b600d600401610f5c8361219d565b600d600501604051602001610f73939291906137a8565b6040516020818303038152906040525b9050919050565b610f926113ab565b610f9c82826121ed565b5050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61103c6113ab565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110ae5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016110a59190612aac565b60405180910390fd5b6110b7816116ba565b50565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061111557506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806111455750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806111bf57506111be8261238f565b5b9050919050565b6000816111d1611494565b1161126c576111de61149d565b8211156112085761120160046000848152602001908152602001600020546123f9565b905061126d565b60005482101561126b5760005b6000600460008581526020019081526020016000205491508103611244578261123d906137d9565b9250611215565b60007c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b8060005260046000fd5b600061128783610ada565b90508180156112c957508073ffffffffffffffffffffffffffffffffffffffff166112b0611605565b73ffffffffffffffffffffffffffffffffffffffff1614155b156112f5576112df816112da611605565b610fa0565b6112f4576112f363cfb3b94260e01b611272565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b6113b361243a565b73ffffffffffffffffffffffffffffffffffffffff166113d1610b97565b73ffffffffffffffffffffffffffffffffffffffff1614611430576113f461243a565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016114279190612aac565b60405180910390fd5b565b818360040190816114439190613999565b50808360050190816114559190613999565b507f927a41e440ce6a96781dbee2e5693388ce49325e4729d62114f699d43dea385e8282604051611487929190613a6b565b60405180910390a1505050565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b6000816114d0611494565b116115c857600460008381526020019081526020016000205490506114f361149d565b82111561151857611503816123f9565b6115d95761151763df2d9b4260e01b611272565b5b6000810361159f57600054821061153a5761153963df2d9b4260e01b611272565b5b5b6004600083600190039350838152602001908152602001600020549050600081031561159a5760007c0100000000000000000000000000000000000000000000000000000000821603156115d95761159963df2d9b4260e01b611272565b5b61153b565b60007c0100000000000000000000000000000000000000000000000000000000821603156115d9575b6115d863df2d9b4260e01b611272565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e861166e868684612442565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b81600001600061179091906127c8565b60005b8151811015611946576117bf8282815181106117b2576117b1613aa2565b5b602002602001015161244b565b826000018282815181106117d6576117d5613aa2565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d2871318383838151811061191e5761191d613aa2565b5b60200260200101516040516119339190613b4c565b60405180910390a2806001019050611793565b505050565b6002600a5403611987576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600a81905550565b60008088600101548667ffffffffffffffff168a600201546119b3919061366c565b11156119eb576040517f1e186f7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008960030160008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008a6000018a81548110611a5a57611a59613aa2565b5b906000526020600020906005020160020160009054906101000a900463ffffffff1663ffffffff1690506000808214611a935781611a9f565b8767ffffffffffffffff165b905060008114158015611ac65750808967ffffffffffffffff1684611ac4919061366c565b115b15611afd576040517ff0700b7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611b1357611b12613aa2565b5b9060005260206000209060050201600301548967ffffffffffffffff16611b3a91906135ca565b341015611b73576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611b8957611b88613aa2565b5b906000526020600020906005020160000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421180611c0a57508b6000018b81548110611bd757611bd6613aa2565b5b906000526020600020906005020160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1642105b15611c41576040517f951b974f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060001b8d6000018d81548110611c5d57611c5c613aa2565b5b90600052602060002090600502016001015403611c7b576001611d56565b611d55888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508e6000018e81548110611cd657611cd5613aa2565b5b90600052602060002090600502016001015460008c67ffffffffffffffff1614611d28578d8c604051602001611d0d929190613be5565b60405160208183030381529060405280519060200120611d50565b8d604051602001611d399190613c11565b604051602081830303815290604052805190602001205b61250d565b5b905080611d8f576040517fb05e92fa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008d6000018d81548110611da757611da6613aa2565b5b906000526020600020906005020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008e6000018e81548110611df357611df2613aa2565b5b9060005260206000209060050201600301548c67ffffffffffffffff16611e1a91906135ca565b905081819750975050505050505097509795505050505050565b6000810315611eeb5760008273ffffffffffffffffffffffffffffffffffffffff1682604051611e6390613c5d565b60006040518083038185875af1925050503d8060008114611ea0576040519150601f19603f3d011682016040523d82523d6000602084013e611ea5565b606091505b5050905080611ee9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee090613cbe565b60405180910390fd5b505b5050565b611f09828260405180602001604052806000815250612524565b5050565b6001600a81905550565b606081600001805480602002602001604051908101604052809291908181526020016000905b8282101561206357838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001600182015481526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611f3d565b505050509050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612094611605565b8786866040518563ffffffff1660e01b81526004016120b69493929190613d33565b6020604051808303816000875af19250505080156120f257506040513d601f19601f820116820180604052508101906120ef9190613d94565b60015b61214a573d8060008114612122576040519150601f19603f3d011682016040523d82523d6000602084013e612127565b606091505b5060008151036121425761214163d1a57ed660e01b611272565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060a060405101806040526020810391506000825281835b6001156121d857600184039350600a81066030018453600a81049050806121b6575b50828103602084039350808452505050919050565b60006121f76116b0565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff16111561225c5781816040517f6f483d09000000000000000000000000000000000000000000000000000000008152600401612253929190613df2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036122ce5760006040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016122c59190612aac565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b600033905090565b60009392505050565b806020015167ffffffffffffffff16816000015167ffffffffffffffff16106124a0576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff160361250a576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60008261251a85846125a0565b1490509392505050565b61252e83836125f0565b60008373ffffffffffffffffffffffffffffffffffffffff163b1461259b57600080549050600083820390505b61256e600086838060010194508661206e565b6125835761258263d1a57ed660e01b611272565b5b81811061255b57816000541461259857600080fd5b50505b505050565b60008082905060005b84518110156125e5576125d6828683815181106125c9576125c8613aa2565b5b6020026020010151612776565b915080806001019150506125a9565b508091505092915050565b6000805490506000820361260f5761260e63b562e8dd60e01b611272565b5b61261c6000848385611651565b61263c8361262d6000866000611657565b612636856127a1565b1761167f565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff16169050600081036126f4576126f3632e07630060e01b611272565b5b60008383019050600083905061270861149d565b600183031115612723576127226381647e3a60e01b611272565b5b5b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103612724578160008190555050505061277160008483856116aa565b505050565b600081831061278e5761278982846127b1565b612799565b61279883836127b1565b5b905092915050565b60006001821460e11b9050919050565b600082600052816020526040600020905092915050565b50805460008255600502906000526020600020908101906127e991906127ec565b50565b5b8082111561288357600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016127ed565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6128d08161289b565b81146128db57600080fd5b50565b6000813590506128ed816128c7565b92915050565b60006020828403121561290957612908612891565b5b6000612917848285016128de565b91505092915050565b60008115159050919050565b61293581612920565b82525050565b6000602082019050612950600083018461292c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612990578082015181840152602081019050612975565b60008484015250505050565b6000601f19601f8301169050919050565b60006129b882612956565b6129c28185612961565b93506129d2818560208601612972565b6129db8161299c565b840191505092915050565b60006020820190508181036000830152612a0081846129ad565b905092915050565b6000819050919050565b612a1b81612a08565b8114612a2657600080fd5b50565b600081359050612a3881612a12565b92915050565b600060208284031215612a5457612a53612891565b5b6000612a6284828501612a29565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612a9682612a6b565b9050919050565b612aa681612a8b565b82525050565b6000602082019050612ac16000830184612a9d565b92915050565b612ad081612a8b565b8114612adb57600080fd5b50565b600081359050612aed81612ac7565b92915050565b60008060408385031215612b0a57612b09612891565b5b6000612b1885828601612ade565b9250506020612b2985828601612a29565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612b758261299c565b810181811067ffffffffffffffff82111715612b9457612b93612b3d565b5b80604052505050565b6000612ba7612887565b9050612bb38282612b6c565b919050565b600067ffffffffffffffff821115612bd357612bd2612b3d565b5b612bdc8261299c565b9050602081019050919050565b82818337600083830152505050565b6000612c0b612c0684612bb8565b612b9d565b905082815260208101848484011115612c2757612c26612b38565b5b612c32848285612be9565b509392505050565b600082601f830112612c4f57612c4e612b33565b5b8135612c5f848260208601612bf8565b91505092915050565b60008060408385031215612c7f57612c7e612891565b5b600083013567ffffffffffffffff811115612c9d57612c9c612896565b5b612ca985828601612c3a565b925050602083013567ffffffffffffffff811115612cca57612cc9612896565b5b612cd685828601612c3a565b9150509250929050565b612ce981612a08565b82525050565b6000602082019050612d046000830184612ce0565b92915050565b600080600060608486031215612d2357612d22612891565b5b6000612d3186828701612ade565b9350506020612d4286828701612ade565b9250506040612d5386828701612a29565b9150509250925092565b60008060408385031215612d7457612d73612891565b5b6000612d8285828601612a29565b9250506020612d9385828601612a29565b9150509250929050565b6000604082019050612db26000830185612a9d565b612dbf6020830184612ce0565b9392505050565b600060208284031215612ddc57612ddb612891565b5b6000612dea84828501612ade565b91505092915050565b600067ffffffffffffffff821115612e0e57612e0d612b3d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b612e4681612e29565b8114612e5157600080fd5b50565b600081359050612e6381612e3d565b92915050565b6000819050919050565b612e7c81612e69565b8114612e8757600080fd5b50565b600081359050612e9981612e73565b92915050565b600063ffffffff82169050919050565b612eb881612e9f565b8114612ec357600080fd5b50565b600081359050612ed581612eaf565b92915050565b600060c08284031215612ef157612ef0612e24565b5b612efb60c0612b9d565b90506000612f0b84828501612e54565b6000830152506020612f1f84828501612e54565b6020830152506040612f3384828501612e8a565b6040830152506060612f4784828501612ec6565b6060830152506080612f5b84828501612a29565b60808301525060a0612f6f84828501612ade565b60a08301525092915050565b6000612f8e612f8984612df3565b612b9d565b90508083825260208201905060c08402830185811115612fb157612fb0612e1f565b5b835b81811015612fda5780612fc68882612edb565b84526020840193505060c081019050612fb3565b5050509392505050565b600082601f830112612ff957612ff8612b33565b5b8135613009848260208601612f7b565b91505092915050565b60006020828403121561302857613027612891565b5b600082013567ffffffffffffffff81111561304657613045612896565b5b61305284828501612fe4565b91505092915050565b600080fd5b60008083601f84011261307657613075612b33565b5b8235905067ffffffffffffffff8111156130935761309261305b565b5b6020830191508360208202830111156130af576130ae612e1f565b5b9250929050565b60008060008060008060a087890312156130d3576130d2612891565b5b60006130e189828a01612e54565b96505060206130f289828a01612ade565b955050604061310389828a01612e54565b945050606061311489828a01612e54565b935050608087013567ffffffffffffffff81111561313557613134612896565b5b61314189828a01613060565b92509250509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61318581612e29565b82525050565b61319481612e69565b82525050565b6131a381612e9f565b82525050565b6131b281612a08565b82525050565b6131c181612a8b565b82525050565b60c0820160008201516131dd600085018261317c565b5060208201516131f0602085018261317c565b506040820151613203604085018261318b565b506060820151613216606085018261319a565b50608082015161322960808501826131a9565b5060a082015161323c60a08501826131b8565b50505050565b600061324e83836131c7565b60c08301905092915050565b6000602082019050919050565b600061327282613150565b61327c818561315b565b93506132878361316c565b8060005b838110156132b857815161329f8882613242565b97506132aa8361325a565b92505060018101905061328b565b5085935050505092915050565b600060208201905081810360008301526132df8184613267565b905092915050565b6132f081612920565b81146132fb57600080fd5b50565b60008135905061330d816132e7565b92915050565b6000806040838503121561332a57613329612891565b5b600061333885828601612ade565b9250506020613349858286016132fe565b9150509250929050565b600067ffffffffffffffff82111561336e5761336d612b3d565b5b6133778261299c565b9050602081019050919050565b600061339761339284613353565b612b9d565b9050828152602081018484840111156133b3576133b2612b38565b5b6133be848285612be9565b509392505050565b600082601f8301126133db576133da612b33565b5b81356133eb848260208601613384565b91505092915050565b6000806000806080858703121561340e5761340d612891565b5b600061341c87828801612ade565b945050602061342d87828801612ade565b935050604061343e87828801612a29565b925050606085013567ffffffffffffffff81111561345f5761345e612896565b5b61346b878288016133c6565b91505092959194509250565b60006bffffffffffffffffffffffff82169050919050565b61349881613477565b81146134a357600080fd5b50565b6000813590506134b58161348f565b92915050565b600080604083850312156134d2576134d1612891565b5b60006134e085828601612ade565b92505060206134f1858286016134a6565b9150509250929050565b6000806040838503121561351257613511612891565b5b600061352085828601612ade565b925050602061353185828601612ade565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061358257607f821691505b6020821081036135955761359461353b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006135d582612a08565b91506135e083612a08565b92508282026135ee81612a08565b915082820484148315176136055761360461359b565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061364682612a08565b915061365183612a08565b9250826136615761366061360c565b5b828204905092915050565b600061367782612a08565b915061368283612a08565b925082820190508082111561369a5761369961359b565b5b92915050565b60006136ab82612a08565b91506136b683612a08565b92508282039050818111156136ce576136cd61359b565b5b92915050565b600081905092915050565b60008190508160005260206000209050919050565b600081546137018161356a565b61370b81866136d4565b94506001821660008114613726576001811461373b5761376e565b60ff198316865281151582028601935061376e565b613744856136df565b60005b8381101561376657815481890152600182019150602081019050613747565b838801955050505b50505092915050565b600061378282612956565b61378c81856136d4565b935061379c818560208601612972565b80840191505092915050565b60006137b482866136f4565b91506137c08285613777565b91506137cc82846136f4565b9150819050949350505050565b60006137e482612a08565b9150600082036137f7576137f661359b565b5b600182039050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261384f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613812565b6138598683613812565b95508019841693508086168417925050509392505050565b6000819050919050565b600061389661389161388c84612a08565b613871565b612a08565b9050919050565b6000819050919050565b6138b08361387b565b6138c46138bc8261389d565b84845461381f565b825550505050565b600090565b6138d96138cc565b6138e48184846138a7565b505050565b5b81811015613908576138fd6000826138d1565b6001810190506138ea565b5050565b601f82111561394d5761391e816136df565b61392784613802565b81016020851015613936578190505b61394a61394285613802565b8301826138e9565b50505b505050565b600082821c905092915050565b600061397060001984600802613952565b1980831691505092915050565b6000613989838361395f565b9150826002028217905092915050565b6139a282612956565b67ffffffffffffffff8111156139bb576139ba612b3d565b5b6139c5825461356a565b6139d082828561390c565b600060209050601f831160018114613a0357600084156139f1578287015190505b6139fb858261397d565b865550613a63565b601f198416613a11866136df565b60005b82811015613a3957848901518255600182019150602085019450602081019050613a14565b86831015613a565784890151613a52601f89168261395f565b8355505b6001600288020188555050505b505050505050565b60006040820190508181036000830152613a8581856129ad565b90508181036020830152613a9981846129ad565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60c082016000820151613ae7600085018261317c565b506020820151613afa602085018261317c565b506040820151613b0d604085018261318b565b506060820151613b20606085018261319a565b506080820151613b3360808501826131a9565b5060a0820151613b4660a08501826131b8565b50505050565b600060c082019050613b616000830184613ad1565b92915050565b60008160601b9050919050565b6000613b7f82613b67565b9050919050565b6000613b9182613b74565b9050919050565b613ba9613ba482612a8b565b613b86565b82525050565b60008160c01b9050919050565b6000613bc782613baf565b9050919050565b613bdf613bda82612e29565b613bbc565b82525050565b6000613bf18285613b98565b601482019150613c018284613bce565b6008820191508190509392505050565b6000613c1d8284613b98565b60148201915081905092915050565b600081905092915050565b50565b6000613c47600083613c2c565b9150613c5282613c37565b600082019050919050565b6000613c6882613c3a565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000613ca8600f83612961565b9150613cb382613c72565b602082019050919050565b60006020820190508181036000830152613cd781613c9b565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613d0582613cde565b613d0f8185613ce9565b9350613d1f818560208601612972565b613d288161299c565b840191505092915050565b6000608082019050613d486000830187612a9d565b613d556020830186612a9d565b613d626040830185612ce0565b8181036060830152613d748184613cfa565b905095945050505050565b600081519050613d8e816128c7565b92915050565b600060208284031215613daa57613da9612891565b5b6000613db884828501613d7f565b91505092915050565b6000613ddc613dd7613dd284613477565b613871565b612a08565b9050919050565b613dec81613dc1565b82525050565b6000604082019050613e076000830185613de3565b613e146020830184612ce0565b939250505056fea26469706673582212205ad357813189e122d34923186ac7ebd6cd8ce8e51d0053ea986850029a370cdd64736f6c634300081b0033",
  "deployedBytecode": "0x6080604052600436106101405760003560e01c8063715018a6116100b6578063a22cb4651161006f578063a22cb46514610427578063b88d4fde14610450578063c87b56dd1461046c578063d691e43c146104a9578063e985e9c5146104d2578063f2fde38b1461050f57610140565b8063715018a61461034a5780638da5cb5b14610361578063903f00251461038c578063945dc1c2146103b557806395d89b41146103d1578063a06343a3146103fc57610140565b806318160ddd1161010857806318160ddd1461022f57806323b872dd1461025a5780632a55205a1461027657806342842e0e146102b45780636352211e146102d057806370a082311461030d57610140565b806301ffc9a71461014557806306fdde0314610182578063081812fc146101ad578063095ea7b3146101ea5780631789e2d814610206575b600080fd5b34801561015157600080fd5b5061016c600480360381019061016791906128f3565b610538565b604051610179919061293b565b60405180910390f35b34801561018e57600080fd5b5061019761055a565b6040516101a491906129e6565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf9190612a3e565b6105ec565b6040516101e19190612aac565b60405180910390f35b61020460048036038101906101ff9190612af3565b61064a565b005b34801561021257600080fd5b5061022d60048036038101906102289190612c68565b61065a565b005b34801561023b57600080fd5b5061024461067c565b6040516102519190612cef565b60405180910390f35b610274600480360381019061026f9190612d0a565b6106c9565b005b34801561028257600080fd5b5061029d60048036038101906102989190612d5d565b61098a565b6040516102ab929190612d9d565b60405180910390f35b6102ce60048036038101906102c99190612d0a565b610aba565b005b3480156102dc57600080fd5b506102f760048036038101906102f29190612a3e565b610ada565b6040516103049190612aac565b60405180910390f35b34801561031957600080fd5b50610334600480360381019061032f9190612dc6565b610aec565b6040516103419190612cef565b60405180910390f35b34801561035657600080fd5b5061035f610b83565b005b34801561036d57600080fd5b50610376610b97565b6040516103839190612aac565b60405180910390f35b34801561039857600080fd5b506103b360048036038101906103ae9190613012565b610bc1565b005b6103cf60048036038101906103ca91906130b6565b610be0565b005b3480156103dd57600080fd5b506103e6610d00565b6040516103f391906129e6565b60405180910390f35b34801561040857600080fd5b50610411610d92565b60405161041e91906132c5565b60405180910390f35b34801561043357600080fd5b5061044e60048036038101906104499190613313565b610da3565b005b61046a600480360381019061046591906133f4565b610eae565b005b34801561047857600080fd5b50610493600480360381019061048e9190612a3e565b610f00565b6040516104a091906129e6565b60405180910390f35b3480156104b557600080fd5b506104d060048036038101906104cb91906134bb565b610f8a565b005b3480156104de57600080fd5b506104f960048036038101906104f491906134fb565b610fa0565b604051610506919061293b565b60405180910390f35b34801561051b57600080fd5b5061053660048036038101906105319190612dc6565b611034565b005b6000610543826110ba565b8061055357506105528261114c565b5b9050919050565b6060600280546105699061356a565b80601f01602080910402602001604051908101604052809291908181526020018280546105959061356a565b80156105e25780601f106105b7576101008083540402835291602001916105e2565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b5050505050905090565b60006105f7826111c6565b61060c5761060b63cf4700e460e01b611272565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6106568282600161127c565b5050565b6106626113ab565b6106788282600d6114329092919063ffffffff16565b5050565b6000610686611494565b600154600054030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106b961149d565b146106c657600854810190505b90565b60006106d4826114c5565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107495761074863a114810060e01b611272565b5b600080610755846115de565b9150915061076b8187610766611605565b61160d565b610796576107808661077b611605565b610fa0565b610795576107946359c896be60e01b611272565b5b5b6107a38686866001611651565b80156107ae57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061087c85610858888887611657565b7c02000000000000000000000000000000000000000000000000000000001761167f565b600460008681526020019081526020016000208190555060007c020000000000000000000000000000000000000000000000000000000084160361090257600060018501905060006004600083815260200190815260200160002054036109005760005481146108ff578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081036109745761097363ea553b3460e01b611272565b5b61098187878760016116aa565b50505050505050565b6000806000600c6000868152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008260000160149054906101000a90046bffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a6b57600b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b60000160149054906101000a90046bffffffffffffffffffffffff1690505b6000610a756116b0565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610a9d91906135ca565b610aa7919061363b565b9050828195509550505050509250929050565b610ad583838360405180602001604052806000815250610eae565b505050565b6000610ae5826114c5565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b3257610b31638f4eb60460e01b611272565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610b8b6113ab565b610b9560006116ba565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610bc96113ab565b610bdd81600d61178090919063ffffffff16565b50565b610be861194b565b600080610c138867ffffffffffffffff168888888888600d611991909695949392919063ffffffff16565b915091508567ffffffffffffffff16600d6002016000828254610c36919061366c565b925050819055508567ffffffffffffffff16600d60030160008a67ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cb4919061366c565b92505081905550610cc58282611e34565b610cda338234610cd591906136a0565b611e34565b610cee878767ffffffffffffffff16611eef565b5050610cf8611f0d565b505050505050565b606060038054610d0f9061356a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3b9061356a565b8015610d885780601f10610d5d57610100808354040283529160200191610d88565b820191906000526020600020905b815481529060010190602001808311610d6b57829003601f168201915b5050505050905090565b6060610d9e600d611f17565b905090565b8060076000610db0611605565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e5d611605565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ea2919061293b565b60405180910390a35050565b610eb98484846106c9565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610efa57610ee48484848461206e565b610ef957610ef863d1a57ed660e01b611272565b5b5b50505050565b6060610f0b826111c6565b610f2057610f1f63a14c4b5060e01b611272565b5b6000600d6004018054610f329061356a565b905003610f4e5760405180602001604052806000815250610f83565b600d600401610f5c8361219d565b600d600501604051602001610f73939291906137a8565b6040516020818303038152906040525b9050919050565b610f926113ab565b610f9c82826121ed565b5050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61103c6113ab565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110ae5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016110a59190612aac565b60405180910390fd5b6110b7816116ba565b50565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061111557506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806111455750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806111bf57506111be8261238f565b5b9050919050565b6000816111d1611494565b1161126c576111de61149d565b8211156112085761120160046000848152602001908152602001600020546123f9565b905061126d565b60005482101561126b5760005b6000600460008581526020019081526020016000205491508103611244578261123d906137d9565b9250611215565b60007c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b8060005260046000fd5b600061128783610ada565b90508180156112c957508073ffffffffffffffffffffffffffffffffffffffff166112b0611605565b73ffffffffffffffffffffffffffffffffffffffff1614155b156112f5576112df816112da611605565b610fa0565b6112f4576112f363cfb3b94260e01b611272565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b6113b361243a565b73ffffffffffffffffffffffffffffffffffffffff166113d1610b97565b73ffffffffffffffffffffffffffffffffffffffff1614611430576113f461243a565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016114279190612aac565b60405180910390fd5b565b818360040190816114439190613999565b50808360050190816114559190613999565b507f927a41e440ce6a96781dbee2e5693388ce49325e4729d62114f699d43dea385e8282604051611487929190613a6b565b60405180910390a1505050565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b6000816114d0611494565b116115c857600460008381526020019081526020016000205490506114f361149d565b82111561151857611503816123f9565b6115d95761151763df2d9b4260e01b611272565b5b6000810361159f57600054821061153a5761153963df2d9b4260e01b611272565b5b5b6004600083600190039350838152602001908152602001600020549050600081031561159a5760007c0100000000000000000000000000000000000000000000000000000000821603156115d95761159963df2d9b4260e01b611272565b5b61153b565b60007c0100000000000000000000000000000000000000000000000000000000821603156115d9575b6115d863df2d9b4260e01b611272565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e861166e868684612442565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b81600001600061179091906127c8565b60005b8151811015611946576117bf8282815181106117b2576117b1613aa2565b5b602002602001015161244b565b826000018282815181106117d6576117d5613aa2565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d2871318383838151811061191e5761191d613aa2565b5b60200260200101516040516119339190613b4c565b60405180910390a2806001019050611793565b505050565b6002600a5403611987576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600a81905550565b60008088600101548667ffffffffffffffff168a600201546119b3919061366c565b11156119eb576040517f1e186f7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008960030160008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008a6000018a81548110611a5a57611a59613aa2565b5b906000526020600020906005020160020160009054906101000a900463ffffffff1663ffffffff1690506000808214611a935781611a9f565b8767ffffffffffffffff165b905060008114158015611ac65750808967ffffffffffffffff1684611ac4919061366c565b115b15611afd576040517ff0700b7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611b1357611b12613aa2565b5b9060005260206000209060050201600301548967ffffffffffffffff16611b3a91906135ca565b341015611b73576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611b8957611b88613aa2565b5b906000526020600020906005020160000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421180611c0a57508b6000018b81548110611bd757611bd6613aa2565b5b906000526020600020906005020160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1642105b15611c41576040517f951b974f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060001b8d6000018d81548110611c5d57611c5c613aa2565b5b90600052602060002090600502016001015403611c7b576001611d56565b611d55888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508e6000018e81548110611cd657611cd5613aa2565b5b90600052602060002090600502016001015460008c67ffffffffffffffff1614611d28578d8c604051602001611d0d929190613be5565b60405160208183030381529060405280519060200120611d50565b8d604051602001611d399190613c11565b604051602081830303815290604052805190602001205b61250d565b5b905080611d8f576040517fb05e92fa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008d6000018d81548110611da757611da6613aa2565b5b906000526020600020906005020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008e6000018e81548110611df357611df2613aa2565b5b9060005260206000209060050201600301548c67ffffffffffffffff16611e1a91906135ca565b905081819750975050505050505097509795505050505050565b6000810315611eeb5760008273ffffffffffffffffffffffffffffffffffffffff1682604051611e6390613c5d565b60006040518083038185875af1925050503d8060008114611ea0576040519150601f19603f3d011682016040523d82523d6000602084013e611ea5565b606091505b5050905080611ee9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee090613cbe565b60405180910390fd5b505b5050565b611f09828260405180602001604052806000815250612524565b5050565b6001600a81905550565b606081600001805480602002602001604051908101604052809291908181526020016000905b8282101561206357838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001600182015481526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611f3d565b505050509050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612094611605565b8786866040518563ffffffff1660e01b81526004016120b69493929190613d33565b6020604051808303816000875af19250505080156120f257506040513d601f19601f820116820180604052508101906120ef9190613d94565b60015b61214a573d8060008114612122576040519150601f19603f3d011682016040523d82523d6000602084013e612127565b606091505b5060008151036121425761214163d1a57ed660e01b611272565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060a060405101806040526020810391506000825281835b6001156121d857600184039350600a81066030018453600a81049050806121b6575b50828103602084039350808452505050919050565b60006121f76116b0565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff16111561225c5781816040517f6f483d09000000000000000000000000000000000000000000000000000000008152600401612253929190613df2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036122ce5760006040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016122c59190612aac565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b600033905090565b60009392505050565b806020015167ffffffffffffffff16816000015167ffffffffffffffff16106124a0576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff160361250a576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60008261251a85846125a0565b1490509392505050565b61252e83836125f0565b60008373ffffffffffffffffffffffffffffffffffffffff163b1461259b57600080549050600083820390505b61256e600086838060010194508661206e565b6125835761258263d1a57ed660e01b611272565b5b81811061255b57816000541461259857600080fd5b50505b505050565b60008082905060005b84518110156125e5576125d6828683815181106125c9576125c8613aa2565b5b6020026020010151612776565b915080806001019150506125a9565b508091505092915050565b6000805490506000820361260f5761260e63b562e8dd60e01b611272565b5b61261c6000848385611651565b61263c8361262d6000866000611657565b612636856127a1565b1761167f565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff16169050600081036126f4576126f3632e07630060e01b611272565b5b60008383019050600083905061270861149d565b600183031115612723576127226381647e3a60e01b611272565b5b5b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103612724578160008190555050505061277160008483856116aa565b505050565b600081831061278e5761278982846127b1565b612799565b61279883836127b1565b5b905092915050565b60006001821460e11b9050919050565b600082600052816020526040600020905092915050565b50805460008255600502906000526020600020908101906127e991906127ec565b50565b5b8082111561288357600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016127ed565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6128d08161289b565b81146128db57600080fd5b50565b6000813590506128ed816128c7565b92915050565b60006020828403121561290957612908612891565b5b6000612917848285016128de565b91505092915050565b60008115159050919050565b61293581612920565b82525050565b6000602082019050612950600083018461292c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612990578082015181840152602081019050612975565b60008484015250505050565b6000601f19601f8301169050919050565b60006129b882612956565b6129c28185612961565b93506129d2818560208601612972565b6129db8161299c565b840191505092915050565b60006020820190508181036000830152612a0081846129ad565b905092915050565b6000819050919050565b612a1b81612a08565b8114612a2657600080fd5b50565b600081359050612a3881612a12565b92915050565b600060208284031215612a5457612a53612891565b5b6000612a6284828501612a29565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612a9682612a6b565b9050919050565b612aa681612a8b565b82525050565b6000602082019050612ac16000830184612a9d565b92915050565b612ad081612a8b565b8114612adb57600080fd5b50565b600081359050612aed81612ac7565b92915050565b60008060408385031215612b0a57612b09612891565b5b6000612b1885828601612ade565b9250506020612b2985828601612a29565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612b758261299c565b810181811067ffffffffffffffff82111715612b9457612b93612b3d565b5b80604052505050565b6000612ba7612887565b9050612bb38282612b6c565b919050565b600067ffffffffffffffff821115612bd357612bd2612b3d565b5b612bdc8261299c565b9050602081019050919050565b82818337600083830152505050565b6000612c0b612c0684612bb8565b612b9d565b905082815260208101848484011115612c2757612c26612b38565b5b612c32848285612be9565b509392505050565b600082601f830112612c4f57612c4e612b33565b5b8135612c5f848260208601612bf8565b91505092915050565b60008060408385031215612c7f57612c7e612891565b5b600083013567ffffffffffffffff811115612c9d57612c9c612896565b5b612ca985828601612c3a565b925050602083013567ffffffffffffffff811115612cca57612cc9612896565b5b612cd685828601612c3a565b9150509250929050565b612ce981612a08565b82525050565b6000602082019050612d046000830184612ce0565b92915050565b600080600060608486031215612d2357612d22612891565b5b6000612d3186828701612ade565b9350506020612d4286828701612ade565b9250506040612d5386828701612a29565b9150509250925092565b60008060408385031215612d7457612d73612891565b5b6000612d8285828601612a29565b9250506020612d9385828601612a29565b9150509250929050565b6000604082019050612db26000830185612a9d565b612dbf6020830184612ce0565b9392505050565b600060208284031215612ddc57612ddb612891565b5b6000612dea84828501612ade565b91505092915050565b600067ffffffffffffffff821115612e0e57612e0d612b3d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b612e4681612e29565b8114612e5157600080fd5b50565b600081359050612e6381612e3d565b92915050565b6000819050919050565b612e7c81612e69565b8114612e8757600080fd5b50565b600081359050612e9981612e73565b92915050565b600063ffffffff82169050919050565b612eb881612e9f565b8114612ec357600080fd5b50565b600081359050612ed581612eaf565b92915050565b600060c08284031215612ef157612ef0612e24565b5b612efb60c0612b9d565b90506000612f0b84828501612e54565b6000830152506020612f1f84828501612e54565b6020830152506040612f3384828501612e8a565b6040830152506060612f4784828501612ec6565b6060830152506080612f5b84828501612a29565b60808301525060a0612f6f84828501612ade565b60a08301525092915050565b6000612f8e612f8984612df3565b612b9d565b90508083825260208201905060c08402830185811115612fb157612fb0612e1f565b5b835b81811015612fda5780612fc68882612edb565b84526020840193505060c081019050612fb3565b5050509392505050565b600082601f830112612ff957612ff8612b33565b5b8135613009848260208601612f7b565b91505092915050565b60006020828403121561302857613027612891565b5b600082013567ffffffffffffffff81111561304657613045612896565b5b61305284828501612fe4565b91505092915050565b600080fd5b60008083601f84011261307657613075612b33565b5b8235905067ffffffffffffffff8111156130935761309261305b565b5b6020830191508360208202830111156130af576130ae612e1f565b5b9250929050565b60008060008060008060a087890312156130d3576130d2612891565b5b60006130e189828a01612e54565b96505060206130f289828a01612ade565b955050604061310389828a01612e54565b945050606061311489828a01612e54565b935050608087013567ffffffffffffffff81111561313557613134612896565b5b61314189828a01613060565b92509250509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61318581612e29565b82525050565b61319481612e69565b82525050565b6131a381612e9f565b82525050565b6131b281612a08565b82525050565b6131c181612a8b565b82525050565b60c0820160008201516131dd600085018261317c565b5060208201516131f0602085018261317c565b506040820151613203604085018261318b565b506060820151613216606085018261319a565b50608082015161322960808501826131a9565b5060a082015161323c60a08501826131b8565b50505050565b600061324e83836131c7565b60c08301905092915050565b6000602082019050919050565b600061327282613150565b61327c818561315b565b93506132878361316c565b8060005b838110156132b857815161329f8882613242565b97506132aa8361325a565b92505060018101905061328b565b5085935050505092915050565b600060208201905081810360008301526132df8184613267565b905092915050565b6132f081612920565b81146132fb57600080fd5b50565b60008135905061330d816132e7565b92915050565b6000806040838503121561332a57613329612891565b5b600061333885828601612ade565b9250506020613349858286016132fe565b9150509250929050565b600067ffffffffffffffff82111561336e5761336d612b3d565b5b6133778261299c565b9050602081019050919050565b600061339761339284613353565b612b9d565b9050828152602081018484840111156133b3576133b2612b38565b5b6133be848285612be9565b509392505050565b600082601f8301126133db576133da612b33565b5b81356133eb848260208601613384565b91505092915050565b6000806000806080858703121561340e5761340d612891565b5b600061341c87828801612ade565b945050602061342d87828801612ade565b935050604061343e87828801612a29565b925050606085013567ffffffffffffffff81111561345f5761345e612896565b5b61346b878288016133c6565b91505092959194509250565b60006bffffffffffffffffffffffff82169050919050565b61349881613477565b81146134a357600080fd5b50565b6000813590506134b58161348f565b92915050565b600080604083850312156134d2576134d1612891565b5b60006134e085828601612ade565b92505060206134f1858286016134a6565b9150509250929050565b6000806040838503121561351257613511612891565b5b600061352085828601612ade565b925050602061353185828601612ade565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061358257607f821691505b6020821081036135955761359461353b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006135d582612a08565b91506135e083612a08565b92508282026135ee81612a08565b915082820484148315176136055761360461359b565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061364682612a08565b915061365183612a08565b9250826136615761366061360c565b5b828204905092915050565b600061367782612a08565b915061368283612a08565b925082820190508082111561369a5761369961359b565b5b92915050565b60006136ab82612a08565b91506136b683612a08565b92508282039050818111156136ce576136cd61359b565b5b92915050565b600081905092915050565b60008190508160005260206000209050919050565b600081546137018161356a565b61370b81866136d4565b94506001821660008114613726576001811461373b5761376e565b60ff198316865281151582028601935061376e565b613744856136df565b60005b8381101561376657815481890152600182019150602081019050613747565b838801955050505b50505092915050565b600061378282612956565b61378c81856136d4565b935061379c818560208601612972565b80840191505092915050565b60006137b482866136f4565b91506137c08285613777565b91506137cc82846136f4565b9150819050949350505050565b60006137e482612a08565b9150600082036137f7576137f661359b565b5b600182039050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261384f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613812565b6138598683613812565b95508019841693508086168417925050509392505050565b6000819050919050565b600061389661389161388c84612a08565b613871565b612a08565b9050919050565b6000819050919050565b6138b08361387b565b6138c46138bc8261389d565b84845461381f565b825550505050565b600090565b6138d96138cc565b6138e48184846138a7565b505050565b5b81811015613908576138fd6000826138d1565b6001810190506138ea565b5050565b601f82111561394d5761391e816136df565b61392784613802565b81016020851015613936578190505b61394a61394285613802565b8301826138e9565b50505b505050565b600082821c905092915050565b600061397060001984600802613952565b1980831691505092915050565b6000613989838361395f565b9150826002028217905092915050565b6139a282612956565b67ffffffffffffffff8111156139bb576139ba612b3d565b5b6139c5825461356a565b6139d082828561390c565b600060209050601f831160018114613a0357600084156139f1578287015190505b6139fb858261397d565b865550613a63565b601f198416613a11866136df565b60005b82811015613a3957848901518255600182019150602085019450602081019050613a14565b86831015613a565784890151613a52601f89168261395f565b8355505b6001600288020188555050505b505050505050565b60006040820190508181036000830152613a8581856129ad565b90508181036020830152613a9981846129ad565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60c082016000820151613ae7600085018261317c565b506020820151613afa602085018261317c565b506040820151613b0d604085018261318b565b506060820151613b20606085018261319a565b506080820151613b3360808501826131a9565b5060a0820151613b4660a08501826131b8565b50505050565b600060c082019050613b616000830184613ad1565b92915050565b60008160601b9050919050565b6000613b7f82613b67565b9050919050565b6000613b9182613b74565b9050919050565b613ba9613ba482612a8b565b613b86565b82525050565b60008160c01b9050919050565b6000613bc782613baf565b9050919050565b613bdf613bda82612e29565b613bbc565b82525050565b6000613bf18285613b98565b601482019150613c018284613bce565b6008820191508190509392505050565b6000613c1d8284613b98565b60148201915081905092915050565b600081905092915050565b50565b6000613c47600083613c2c565b9150613c5282613c37565b600082019050919050565b6000613c6882613c3a565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000613ca8600f83612961565b9150613cb382613c72565b602082019050919050565b60006020820190508181036000830152613cd781613c9b565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613d0582613cde565b613d0f8185613ce9565b9350613d1f818560208601612972565b613d288161299c565b840191505092915050565b6000608082019050613d486000830187612a9d565b613d556020830186612a9d565b613d626040830185612ce0565b8181036060830152613d748184613cfa565b905095945050505050565b600081519050613d8e816128c7565b92915050565b600060208284031215613daa57613da9612891565b5b6000613db884828501613d7f565b91505092915050565b6000613ddc613dd7613dd284613477565b613871565b612a08565b9050919050565b613dec81613dc1565b82525050565b6000604082019050613e076000830185613de3565b613e146020830184612ce0565b939250505056fea26469706673582212205ad357813189e122d34923186ac7ebd6cd8ce8e51d0053ea986850029a370cdd64736f6c634300081b0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
};