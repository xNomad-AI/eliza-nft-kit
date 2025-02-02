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
  "bytecode": "0x608060405234801561001057600080fd5b50604051614c6f380380614c6f83398181016040528101906100329190610bf9565b84898981600290816100449190610f66565b5080600390816100549190610f66565b5061006361018860201b60201c565b60008190555061007761018860201b60201c565b61008561019160201b60201c565b10156100a2576100a163fed8210f60e01b6101b960201b60201c565b5b5050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101165760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161010d9190611047565b60405180910390fd5b610125816101c360201b60201c565b5086600c60040190816101389190610f66565b5085600c600501908161014b9190610f66565b5083600c60010181905550610166838361028960201b60201c565b61017a81600c61043160201b90919060201c565b5050505050505050506111db565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b8060005260046000fd5b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600061029961060260201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156102fe5781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016102f59291906110a2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036103705760006040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016103679190611047565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b81600001600061044191906106ce565b60005b81518110156105fd57610476828281518110610463576104626110cb565b5b602002602001015161060c60201b60201c565b8260000182828151811061048d5761048c6110cb565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d287131838383815181106105d5576105d46110cb565b5b60200260200101516040516105ea91906111c0565b60405180910390a2806001019050610444565b505050565b6000612710905090565b806020015167ffffffffffffffff16816000015167ffffffffffffffff1610610661576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16036106cb576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b50805460008255600502906000526020600020908101906106ef91906106f2565b50565b5b8082111561078957600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016106f3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107f4826107ab565b810181811067ffffffffffffffff82111715610813576108126107bc565b5b80604052505050565b600061082661078d565b905061083282826107eb565b919050565b600067ffffffffffffffff821115610852576108516107bc565b5b61085b826107ab565b9050602081019050919050565b60005b8381101561088657808201518184015260208101905061086b565b60008484015250505050565b60006108a56108a084610837565b61081c565b9050828152602081018484840111156108c1576108c06107a6565b5b6108cc848285610868565b509392505050565b600082601f8301126108e9576108e86107a1565b5b81516108f9848260208601610892565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061092d82610902565b9050919050565b61093d81610922565b811461094857600080fd5b50565b60008151905061095a81610934565b92915050565b6000819050919050565b61097381610960565b811461097e57600080fd5b50565b6000815190506109908161096a565b92915050565b60006bffffffffffffffffffffffff82169050919050565b6109b781610996565b81146109c257600080fd5b50565b6000815190506109d4816109ae565b92915050565b600067ffffffffffffffff8211156109f5576109f46107bc565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b610a2d81610a10565b8114610a3857600080fd5b50565b600081519050610a4a81610a24565b92915050565b6000819050919050565b610a6381610a50565b8114610a6e57600080fd5b50565b600081519050610a8081610a5a565b92915050565b600063ffffffff82169050919050565b610a9f81610a86565b8114610aaa57600080fd5b50565b600081519050610abc81610a96565b92915050565b600060c08284031215610ad857610ad7610a0b565b5b610ae260c061081c565b90506000610af284828501610a3b565b6000830152506020610b0684828501610a3b565b6020830152506040610b1a84828501610a71565b6040830152506060610b2e84828501610aad565b6060830152506080610b4284828501610981565b60808301525060a0610b568482850161094b565b60a08301525092915050565b6000610b75610b70846109da565b61081c565b90508083825260208201905060c08402830185811115610b9857610b97610a06565b5b835b81811015610bc15780610bad8882610ac2565b84526020840193505060c081019050610b9a565b5050509392505050565b600082601f830112610be057610bdf6107a1565b5b8151610bf0848260208601610b62565b91505092915050565b60008060008060008060008060006101208a8c031215610c1c57610c1b610797565b5b60008a015167ffffffffffffffff811115610c3a57610c3961079c565b5b610c468c828d016108d4565b99505060208a015167ffffffffffffffff811115610c6757610c6661079c565b5b610c738c828d016108d4565b98505060408a015167ffffffffffffffff811115610c9457610c9361079c565b5b610ca08c828d016108d4565b97505060608a015167ffffffffffffffff811115610cc157610cc061079c565b5b610ccd8c828d016108d4565b9650506080610cde8c828d0161094b565b95505060a0610cef8c828d01610981565b94505060c0610d008c828d0161094b565b93505060e0610d118c828d016109c5565b9250506101008a015167ffffffffffffffff811115610d3357610d3261079c565b5b610d3f8c828d01610bcb565b9150509295985092959850929598565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da157607f821691505b602082108103610db457610db3610d5a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e1c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ddf565b610e268683610ddf565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610e63610e5e610e5984610960565b610e3e565b610960565b9050919050565b6000819050919050565b610e7d83610e48565b610e91610e8982610e6a565b848454610dec565b825550505050565b600090565b610ea6610e99565b610eb1818484610e74565b505050565b5b81811015610ed557610eca600082610e9e565b600181019050610eb7565b5050565b601f821115610f1a57610eeb81610dba565b610ef484610dcf565b81016020851015610f03578190505b610f17610f0f85610dcf565b830182610eb6565b50505b505050565b600082821c905092915050565b6000610f3d60001984600802610f1f565b1980831691505092915050565b6000610f568383610f2c565b9150826002028217905092915050565b610f6f82610d4f565b67ffffffffffffffff811115610f8857610f876107bc565b5b610f928254610d89565b610f9d828285610ed9565b600060209050601f831160018114610fd05760008415610fbe578287015190505b610fc88582610f4a565b865550611030565b601f198416610fde86610dba565b60005b8281101561100657848901518255600182019150602085019450602081019050610fe1565b86831015611023578489015161101f601f891682610f2c565b8355505b6001600288020188555050505b505050505050565b61104181610922565b82525050565b600060208201905061105c6000830184611038565b92915050565b600061107d61107861107384610996565b610e3e565b610960565b9050919050565b61108d81611062565b82525050565b61109c81610960565b82525050565b60006040820190506110b76000830185611084565b6110c46020830184611093565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61110381610a10565b82525050565b61111281610a50565b82525050565b61112181610a86565b82525050565b61113081610960565b82525050565b61113f81610922565b82525050565b60c08201600082015161115b60008501826110fa565b50602082015161116e60208501826110fa565b5060408201516111816040850182611109565b5060608201516111946060850182611118565b5060808201516111a76080850182611127565b5060a08201516111ba60a0850182611136565b50505050565b600060c0820190506111d56000830184611145565b92915050565b613a85806111ea6000396000f3fe6080604052600436106101355760003560e01c8063715018a6116100ab578063a06343a31161006f578063a06343a3146103f1578063a22cb4651461041c578063b88d4fde14610445578063c87b56dd14610461578063e985e9c51461049e578063f2fde38b146104db57610135565b8063715018a61461033f5780638da5cb5b14610356578063903f002514610381578063945dc1c2146103aa57806395d89b41146103c657610135565b806318160ddd116100fd57806318160ddd1461022457806323b872dd1461024f5780632a55205a1461026b57806342842e0e146102a95780636352211e146102c557806370a082311461030257610135565b806301ffc9a71461013a57806306fdde0314610177578063081812fc146101a2578063095ea7b3146101df5780631789e2d8146101fb575b600080fd5b34801561014657600080fd5b50610161600480360381019061015c9190612605565b610504565b60405161016e919061264d565b60405180910390f35b34801561018357600080fd5b5061018c610516565b60405161019991906126f8565b60405180910390f35b3480156101ae57600080fd5b506101c960048036038101906101c49190612750565b6105a8565b6040516101d691906127be565b60405180910390f35b6101f960048036038101906101f49190612805565b610606565b005b34801561020757600080fd5b50610222600480360381019061021d919061297a565b610616565b005b34801561023057600080fd5b50610239610638565b6040516102469190612a01565b60405180910390f35b61026960048036038101906102649190612a1c565b610685565b005b34801561027757600080fd5b50610292600480360381019061028d9190612a6f565b610946565b6040516102a0929190612aaf565b60405180910390f35b6102c360048036038101906102be9190612a1c565b610a76565b005b3480156102d157600080fd5b506102ec60048036038101906102e79190612750565b610a96565b6040516102f991906127be565b60405180910390f35b34801561030e57600080fd5b5061032960048036038101906103249190612ad8565b610aa8565b6040516103369190612a01565b60405180910390f35b34801561034b57600080fd5b50610354610b3f565b005b34801561036257600080fd5b5061036b610b53565b60405161037891906127be565b60405180910390f35b34801561038d57600080fd5b506103a860048036038101906103a39190612d24565b610b7d565b005b6103c460048036038101906103bf9190612dc8565b610b9c565b005b3480156103d257600080fd5b506103db610cac565b6040516103e891906126f8565b60405180910390f35b3480156103fd57600080fd5b50610406610d3e565b6040516104139190612fd7565b60405180910390f35b34801561042857600080fd5b50610443600480360381019061043e9190613025565b610d4f565b005b61045f600480360381019061045a9190613106565b610e5a565b005b34801561046d57600080fd5b5061048860048036038101906104839190612750565b610eac565b60405161049591906126f8565b60405180910390f35b3480156104aa57600080fd5b506104c560048036038101906104c09190613189565b610f36565b6040516104d2919061264d565b60405180910390f35b3480156104e757600080fd5b5061050260048036038101906104fd9190612ad8565b610fca565b005b600061050f82611050565b9050919050565b606060028054610525906131f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610551906131f8565b801561059e5780601f106105735761010080835404028352916020019161059e565b820191906000526020600020905b81548152906001019060200180831161058157829003601f168201915b5050505050905090565b60006105b3826110ca565b6105c8576105c763cf4700e460e01b611176565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61061282826001611180565b5050565b61061e6112af565b6106348282600c6113369092919063ffffffff16565b5050565b6000610642611398565b600154600054030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106756113a1565b1461068257600854810190505b90565b6000610690826113c9565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107055761070463a114810060e01b611176565b5b600080610711846114e2565b915091506107278187610722611509565b611511565b6107525761073c86610737611509565b610f36565b610751576107506359c896be60e01b611176565b5b5b61075f8686866001611555565b801561076a57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154600101919050819055506108388561081488888761155b565b7c020000000000000000000000000000000000000000000000000000000017611583565b600460008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416036108be57600060018501905060006004600083815260200190815260200160002054036108bc5760005481146108bb578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081036109305761092f63ea553b3460e01b611176565b5b61093d87878760016115ae565b50505050505050565b6000806000600b6000868152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008260000160149054906101000a90046bffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a2757600a60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600a60000160149054906101000a90046bffffffffffffffffffffffff1690505b6000610a316115b4565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610a599190613258565b610a6391906132c9565b9050828195509550505050509250929050565b610a9183838360405180602001604052806000815250610e5a565b505050565b6000610aa1826113c9565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aee57610aed638f4eb60460e01b611176565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610b476112af565b610b5160006115be565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610b856112af565b610b9981600c61168490919063ffffffff16565b50565b600080610bc78867ffffffffffffffff168888888888600c61184f909695949392919063ffffffff16565b915091508567ffffffffffffffff16600c6002016000828254610bea91906132fa565b925050819055508567ffffffffffffffff16600c60030160008a67ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c6891906132fa565b92505081905550610c798282611cf2565b610c8e338234610c89919061332e565b611cf2565b610ca2878767ffffffffffffffff16611dad565b5050505050505050565b606060038054610cbb906131f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce7906131f8565b8015610d345780601f10610d0957610100808354040283529160200191610d34565b820191906000526020600020905b815481529060010190602001808311610d1757829003601f168201915b5050505050905090565b6060610d4a600c611dcb565b905090565b8060076000610d5c611509565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e09611509565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e4e919061264d565b60405180910390a35050565b610e65848484610685565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610ea657610e9084848484611f22565b610ea557610ea463d1a57ed660e01b611176565b5b5b50505050565b6060610eb7826110ca565b610ecc57610ecb63a14c4b5060e01b611176565b5b6000600c6004018054610ede906131f8565b905003610efa5760405180602001604052806000815250610f2f565b600c600401610f0883612051565b600c600501604051602001610f1f93929190613436565b6040516020818303038152906040525b9050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610fd26112af565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110445760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161103b91906127be565b60405180910390fd5b61104d816115be565b50565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806110c357506110c2826120a1565b5b9050919050565b6000816110d5611398565b11611170576110e26113a1565b82111561110c57611105600460008481526020019081526020016000205461210b565b9050611171565b60005482101561116f5760005b6000600460008581526020019081526020016000205491508103611148578261114190613467565b9250611119565b60007c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b8060005260046000fd5b600061118b83610a96565b90508180156111cd57508073ffffffffffffffffffffffffffffffffffffffff166111b4611509565b73ffffffffffffffffffffffffffffffffffffffff1614155b156111f9576111e3816111de611509565b610f36565b6111f8576111f763cfb3b94260e01b611176565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b6112b761214c565b73ffffffffffffffffffffffffffffffffffffffff166112d5610b53565b73ffffffffffffffffffffffffffffffffffffffff1614611334576112f861214c565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161132b91906127be565b60405180910390fd5b565b818360040190816113479190613627565b50808360050190816113599190613627565b507f927a41e440ce6a96781dbee2e5693388ce49325e4729d62114f699d43dea385e828260405161138b9291906136f9565b60405180910390a1505050565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b6000816113d4611398565b116114cc57600460008381526020019081526020016000205490506113f76113a1565b82111561141c576114078161210b565b6114dd5761141b63df2d9b4260e01b611176565b5b600081036114a357600054821061143e5761143d63df2d9b4260e01b611176565b5b5b6004600083600190039350838152602001908152602001600020549050600081031561149e5760007c0100000000000000000000000000000000000000000000000000000000821603156114dd5761149d63df2d9b4260e01b611176565b5b61143f565b60007c0100000000000000000000000000000000000000000000000000000000821603156114dd575b6114dc63df2d9b4260e01b611176565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e8611572868684612154565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b81600001600061169491906124da565b60005b815181101561184a576116c38282815181106116b6576116b5613730565b5b602002602001015161215d565b826000018282815181106116da576116d9613730565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d2871318383838151811061182257611821613730565b5b602002602001015160405161183791906137da565b60405180910390a2806001019050611697565b505050565b60008088600101548667ffffffffffffffff168a6002015461187191906132fa565b11156118a9576040517f1e186f7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008960030160008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008a6000018a8154811061191857611917613730565b5b906000526020600020906005020160020160009054906101000a900463ffffffff1663ffffffff1690506000808214611951578161195d565b8767ffffffffffffffff165b9050600081141580156119845750808967ffffffffffffffff168461198291906132fa565b115b156119bb576040517ff0700b7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b815481106119d1576119d0613730565b5b9060005260206000209060050201600301548967ffffffffffffffff166119f89190613258565b341015611a31576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611a4757611a46613730565b5b906000526020600020906005020160000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421180611ac857508b6000018b81548110611a9557611a94613730565b5b906000526020600020906005020160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1642105b15611aff576040517f951b974f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060001b8d6000018d81548110611b1b57611b1a613730565b5b90600052602060002090600502016001015403611b39576001611c14565b611c13888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508e6000018e81548110611b9457611b93613730565b5b90600052602060002090600502016001015460008c67ffffffffffffffff1614611be6578d8c604051602001611bcb929190613873565b60405160208183030381529060405280519060200120611c0e565b8d604051602001611bf7919061389f565b604051602081830303815290604052805190602001205b61221f565b5b905080611c4d576040517fb05e92fa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008d6000018d81548110611c6557611c64613730565b5b906000526020600020906005020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008e6000018e81548110611cb157611cb0613730565b5b9060005260206000209060050201600301548c67ffffffffffffffff16611cd89190613258565b905081819750975050505050505097509795505050505050565b6000810315611da95760008273ffffffffffffffffffffffffffffffffffffffff1682604051611d21906138eb565b60006040518083038185875af1925050503d8060008114611d5e576040519150601f19603f3d011682016040523d82523d6000602084013e611d63565b606091505b5050905080611da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d9e9061394c565b60405180910390fd5b505b5050565b611dc7828260405180602001604052806000815250612236565b5050565b606081600001805480602002602001604051908101604052809291908181526020016000905b82821015611f1757838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001600182015481526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611df1565b505050509050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611f48611509565b8786866040518563ffffffff1660e01b8152600401611f6a94939291906139c1565b6020604051808303816000875af1925050508015611fa657506040513d601f19601f82011682018060405250810190611fa39190613a22565b60015b611ffe573d8060008114611fd6576040519150601f19603f3d011682016040523d82523d6000602084013e611fdb565b606091505b506000815103611ff657611ff563d1a57ed660e01b611176565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060a060405101806040526020810391506000825281835b60011561208c57600184039350600a81066030018453600a810490508061206a575b50828103602084039350808452505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b600033905090565b60009392505050565b806020015167ffffffffffffffff16816000015167ffffffffffffffff16106121b2576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff160361221c576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60008261222c85846122b2565b1490509392505050565b6122408383612302565b60008373ffffffffffffffffffffffffffffffffffffffff163b146122ad57600080549050600083820390505b6122806000868380600101945086611f22565b6122955761229463d1a57ed660e01b611176565b5b81811061226d5781600054146122aa57600080fd5b50505b505050565b60008082905060005b84518110156122f7576122e8828683815181106122db576122da613730565b5b6020026020010151612488565b915080806001019150506122bb565b508091505092915050565b600080549050600082036123215761232063b562e8dd60e01b611176565b5b61232e6000848385611555565b61234e8361233f600086600061155b565b612348856124b3565b17611583565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690506000810361240657612405632e07630060e01b611176565b5b60008383019050600083905061241a6113a1565b600183031115612435576124346381647e3a60e01b611176565b5b5b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103612436578160008190555050505061248360008483856115ae565b505050565b60008183106124a05761249b82846124c3565b6124ab565b6124aa83836124c3565b5b905092915050565b60006001821460e11b9050919050565b600082600052816020526040600020905092915050565b50805460008255600502906000526020600020908101906124fb91906124fe565b50565b5b8082111561259557600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016124ff565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6125e2816125ad565b81146125ed57600080fd5b50565b6000813590506125ff816125d9565b92915050565b60006020828403121561261b5761261a6125a3565b5b6000612629848285016125f0565b91505092915050565b60008115159050919050565b61264781612632565b82525050565b6000602082019050612662600083018461263e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156126a2578082015181840152602081019050612687565b60008484015250505050565b6000601f19601f8301169050919050565b60006126ca82612668565b6126d48185612673565b93506126e4818560208601612684565b6126ed816126ae565b840191505092915050565b6000602082019050818103600083015261271281846126bf565b905092915050565b6000819050919050565b61272d8161271a565b811461273857600080fd5b50565b60008135905061274a81612724565b92915050565b600060208284031215612766576127656125a3565b5b60006127748482850161273b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006127a88261277d565b9050919050565b6127b88161279d565b82525050565b60006020820190506127d360008301846127af565b92915050565b6127e28161279d565b81146127ed57600080fd5b50565b6000813590506127ff816127d9565b92915050565b6000806040838503121561281c5761281b6125a3565b5b600061282a858286016127f0565b925050602061283b8582860161273b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612887826126ae565b810181811067ffffffffffffffff821117156128a6576128a561284f565b5b80604052505050565b60006128b9612599565b90506128c5828261287e565b919050565b600067ffffffffffffffff8211156128e5576128e461284f565b5b6128ee826126ae565b9050602081019050919050565b82818337600083830152505050565b600061291d612918846128ca565b6128af565b9050828152602081018484840111156129395761293861284a565b5b6129448482856128fb565b509392505050565b600082601f83011261296157612960612845565b5b813561297184826020860161290a565b91505092915050565b60008060408385031215612991576129906125a3565b5b600083013567ffffffffffffffff8111156129af576129ae6125a8565b5b6129bb8582860161294c565b925050602083013567ffffffffffffffff8111156129dc576129db6125a8565b5b6129e88582860161294c565b9150509250929050565b6129fb8161271a565b82525050565b6000602082019050612a1660008301846129f2565b92915050565b600080600060608486031215612a3557612a346125a3565b5b6000612a43868287016127f0565b9350506020612a54868287016127f0565b9250506040612a658682870161273b565b9150509250925092565b60008060408385031215612a8657612a856125a3565b5b6000612a948582860161273b565b9250506020612aa58582860161273b565b9150509250929050565b6000604082019050612ac460008301856127af565b612ad160208301846129f2565b9392505050565b600060208284031215612aee57612aed6125a3565b5b6000612afc848285016127f0565b91505092915050565b600067ffffffffffffffff821115612b2057612b1f61284f565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b612b5881612b3b565b8114612b6357600080fd5b50565b600081359050612b7581612b4f565b92915050565b6000819050919050565b612b8e81612b7b565b8114612b9957600080fd5b50565b600081359050612bab81612b85565b92915050565b600063ffffffff82169050919050565b612bca81612bb1565b8114612bd557600080fd5b50565b600081359050612be781612bc1565b92915050565b600060c08284031215612c0357612c02612b36565b5b612c0d60c06128af565b90506000612c1d84828501612b66565b6000830152506020612c3184828501612b66565b6020830152506040612c4584828501612b9c565b6040830152506060612c5984828501612bd8565b6060830152506080612c6d8482850161273b565b60808301525060a0612c81848285016127f0565b60a08301525092915050565b6000612ca0612c9b84612b05565b6128af565b90508083825260208201905060c08402830185811115612cc357612cc2612b31565b5b835b81811015612cec5780612cd88882612bed565b84526020840193505060c081019050612cc5565b5050509392505050565b600082601f830112612d0b57612d0a612845565b5b8135612d1b848260208601612c8d565b91505092915050565b600060208284031215612d3a57612d396125a3565b5b600082013567ffffffffffffffff811115612d5857612d576125a8565b5b612d6484828501612cf6565b91505092915050565b600080fd5b60008083601f840112612d8857612d87612845565b5b8235905067ffffffffffffffff811115612da557612da4612d6d565b5b602083019150836020820283011115612dc157612dc0612b31565b5b9250929050565b60008060008060008060a08789031215612de557612de46125a3565b5b6000612df389828a01612b66565b9650506020612e0489828a016127f0565b9550506040612e1589828a01612b66565b9450506060612e2689828a01612b66565b935050608087013567ffffffffffffffff811115612e4757612e466125a8565b5b612e5389828a01612d72565b92509250509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612e9781612b3b565b82525050565b612ea681612b7b565b82525050565b612eb581612bb1565b82525050565b612ec48161271a565b82525050565b612ed38161279d565b82525050565b60c082016000820151612eef6000850182612e8e565b506020820151612f026020850182612e8e565b506040820151612f156040850182612e9d565b506060820151612f286060850182612eac565b506080820151612f3b6080850182612ebb565b5060a0820151612f4e60a0850182612eca565b50505050565b6000612f608383612ed9565b60c08301905092915050565b6000602082019050919050565b6000612f8482612e62565b612f8e8185612e6d565b9350612f9983612e7e565b8060005b83811015612fca578151612fb18882612f54565b9750612fbc83612f6c565b925050600181019050612f9d565b5085935050505092915050565b60006020820190508181036000830152612ff18184612f79565b905092915050565b61300281612632565b811461300d57600080fd5b50565b60008135905061301f81612ff9565b92915050565b6000806040838503121561303c5761303b6125a3565b5b600061304a858286016127f0565b925050602061305b85828601613010565b9150509250929050565b600067ffffffffffffffff8211156130805761307f61284f565b5b613089826126ae565b9050602081019050919050565b60006130a96130a484613065565b6128af565b9050828152602081018484840111156130c5576130c461284a565b5b6130d08482856128fb565b509392505050565b600082601f8301126130ed576130ec612845565b5b81356130fd848260208601613096565b91505092915050565b600080600080608085870312156131205761311f6125a3565b5b600061312e878288016127f0565b945050602061313f878288016127f0565b93505060406131508782880161273b565b925050606085013567ffffffffffffffff811115613171576131706125a8565b5b61317d878288016130d8565b91505092959194509250565b600080604083850312156131a05761319f6125a3565b5b60006131ae858286016127f0565b92505060206131bf858286016127f0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061321057607f821691505b602082108103613223576132226131c9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006132638261271a565b915061326e8361271a565b925082820261327c8161271a565b9150828204841483151761329357613292613229565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006132d48261271a565b91506132df8361271a565b9250826132ef576132ee61329a565b5b828204905092915050565b60006133058261271a565b91506133108361271a565b925082820190508082111561332857613327613229565b5b92915050565b60006133398261271a565b91506133448361271a565b925082820390508181111561335c5761335b613229565b5b92915050565b600081905092915050565b60008190508160005260206000209050919050565b6000815461338f816131f8565b6133998186613362565b945060018216600081146133b457600181146133c9576133fc565b60ff19831686528115158202860193506133fc565b6133d28561336d565b60005b838110156133f4578154818901526001820191506020810190506133d5565b838801955050505b50505092915050565b600061341082612668565b61341a8185613362565b935061342a818560208601612684565b80840191505092915050565b60006134428286613382565b915061344e8285613405565b915061345a8284613382565b9150819050949350505050565b60006134728261271a565b91506000820361348557613484613229565b5b600182039050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026134dd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826134a0565b6134e786836134a0565b95508019841693508086168417925050509392505050565b6000819050919050565b600061352461351f61351a8461271a565b6134ff565b61271a565b9050919050565b6000819050919050565b61353e83613509565b61355261354a8261352b565b8484546134ad565b825550505050565b600090565b61356761355a565b613572818484613535565b505050565b5b818110156135965761358b60008261355f565b600181019050613578565b5050565b601f8211156135db576135ac8161336d565b6135b584613490565b810160208510156135c4578190505b6135d86135d085613490565b830182613577565b50505b505050565b600082821c905092915050565b60006135fe600019846008026135e0565b1980831691505092915050565b600061361783836135ed565b9150826002028217905092915050565b61363082612668565b67ffffffffffffffff8111156136495761364861284f565b5b61365382546131f8565b61365e82828561359a565b600060209050601f831160018114613691576000841561367f578287015190505b613689858261360b565b8655506136f1565b601f19841661369f8661336d565b60005b828110156136c7578489015182556001820191506020850194506020810190506136a2565b868310156136e457848901516136e0601f8916826135ed565b8355505b6001600288020188555050505b505050505050565b6000604082019050818103600083015261371381856126bf565b9050818103602083015261372781846126bf565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60c0820160008201516137756000850182612e8e565b5060208201516137886020850182612e8e565b50604082015161379b6040850182612e9d565b5060608201516137ae6060850182612eac565b5060808201516137c16080850182612ebb565b5060a08201516137d460a0850182612eca565b50505050565b600060c0820190506137ef600083018461375f565b92915050565b60008160601b9050919050565b600061380d826137f5565b9050919050565b600061381f82613802565b9050919050565b6138376138328261279d565b613814565b82525050565b60008160c01b9050919050565b60006138558261383d565b9050919050565b61386d61386882612b3b565b61384a565b82525050565b600061387f8285613826565b60148201915061388f828461385c565b6008820191508190509392505050565b60006138ab8284613826565b60148201915081905092915050565b600081905092915050565b50565b60006138d56000836138ba565b91506138e0826138c5565b600082019050919050565b60006138f6826138c8565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000613936600f83612673565b915061394182613900565b602082019050919050565b6000602082019050818103600083015261396581613929565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006139938261396c565b61399d8185613977565b93506139ad818560208601612684565b6139b6816126ae565b840191505092915050565b60006080820190506139d660008301876127af565b6139e360208301866127af565b6139f060408301856129f2565b8181036060830152613a028184613988565b905095945050505050565b600081519050613a1c816125d9565b92915050565b600060208284031215613a3857613a376125a3565b5b6000613a4684828501613a0d565b9150509291505056fea2646970667358221220a210d6f2a656101a4b9439e1e91e1c2322c2650cfad8a3c080de8afa035bcdc664736f6c634300081b0033",
  "deployedBytecode": "0x6080604052600436106101355760003560e01c8063715018a6116100ab578063a06343a31161006f578063a06343a3146103f1578063a22cb4651461041c578063b88d4fde14610445578063c87b56dd14610461578063e985e9c51461049e578063f2fde38b146104db57610135565b8063715018a61461033f5780638da5cb5b14610356578063903f002514610381578063945dc1c2146103aa57806395d89b41146103c657610135565b806318160ddd116100fd57806318160ddd1461022457806323b872dd1461024f5780632a55205a1461026b57806342842e0e146102a95780636352211e146102c557806370a082311461030257610135565b806301ffc9a71461013a57806306fdde0314610177578063081812fc146101a2578063095ea7b3146101df5780631789e2d8146101fb575b600080fd5b34801561014657600080fd5b50610161600480360381019061015c9190612605565b610504565b60405161016e919061264d565b60405180910390f35b34801561018357600080fd5b5061018c610516565b60405161019991906126f8565b60405180910390f35b3480156101ae57600080fd5b506101c960048036038101906101c49190612750565b6105a8565b6040516101d691906127be565b60405180910390f35b6101f960048036038101906101f49190612805565b610606565b005b34801561020757600080fd5b50610222600480360381019061021d919061297a565b610616565b005b34801561023057600080fd5b50610239610638565b6040516102469190612a01565b60405180910390f35b61026960048036038101906102649190612a1c565b610685565b005b34801561027757600080fd5b50610292600480360381019061028d9190612a6f565b610946565b6040516102a0929190612aaf565b60405180910390f35b6102c360048036038101906102be9190612a1c565b610a76565b005b3480156102d157600080fd5b506102ec60048036038101906102e79190612750565b610a96565b6040516102f991906127be565b60405180910390f35b34801561030e57600080fd5b5061032960048036038101906103249190612ad8565b610aa8565b6040516103369190612a01565b60405180910390f35b34801561034b57600080fd5b50610354610b3f565b005b34801561036257600080fd5b5061036b610b53565b60405161037891906127be565b60405180910390f35b34801561038d57600080fd5b506103a860048036038101906103a39190612d24565b610b7d565b005b6103c460048036038101906103bf9190612dc8565b610b9c565b005b3480156103d257600080fd5b506103db610cac565b6040516103e891906126f8565b60405180910390f35b3480156103fd57600080fd5b50610406610d3e565b6040516104139190612fd7565b60405180910390f35b34801561042857600080fd5b50610443600480360381019061043e9190613025565b610d4f565b005b61045f600480360381019061045a9190613106565b610e5a565b005b34801561046d57600080fd5b5061048860048036038101906104839190612750565b610eac565b60405161049591906126f8565b60405180910390f35b3480156104aa57600080fd5b506104c560048036038101906104c09190613189565b610f36565b6040516104d2919061264d565b60405180910390f35b3480156104e757600080fd5b5061050260048036038101906104fd9190612ad8565b610fca565b005b600061050f82611050565b9050919050565b606060028054610525906131f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610551906131f8565b801561059e5780601f106105735761010080835404028352916020019161059e565b820191906000526020600020905b81548152906001019060200180831161058157829003601f168201915b5050505050905090565b60006105b3826110ca565b6105c8576105c763cf4700e460e01b611176565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61061282826001611180565b5050565b61061e6112af565b6106348282600c6113369092919063ffffffff16565b5050565b6000610642611398565b600154600054030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106756113a1565b1461068257600854810190505b90565b6000610690826113c9565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107055761070463a114810060e01b611176565b5b600080610711846114e2565b915091506107278187610722611509565b611511565b6107525761073c86610737611509565b610f36565b610751576107506359c896be60e01b611176565b5b5b61075f8686866001611555565b801561076a57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154600101919050819055506108388561081488888761155b565b7c020000000000000000000000000000000000000000000000000000000017611583565b600460008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416036108be57600060018501905060006004600083815260200190815260200160002054036108bc5760005481146108bb578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081036109305761092f63ea553b3460e01b611176565b5b61093d87878760016115ae565b50505050505050565b6000806000600b6000868152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008260000160149054906101000a90046bffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a2757600a60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600a60000160149054906101000a90046bffffffffffffffffffffffff1690505b6000610a316115b4565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610a599190613258565b610a6391906132c9565b9050828195509550505050509250929050565b610a9183838360405180602001604052806000815250610e5a565b505050565b6000610aa1826113c9565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aee57610aed638f4eb60460e01b611176565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610b476112af565b610b5160006115be565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610b856112af565b610b9981600c61168490919063ffffffff16565b50565b600080610bc78867ffffffffffffffff168888888888600c61184f909695949392919063ffffffff16565b915091508567ffffffffffffffff16600c6002016000828254610bea91906132fa565b925050819055508567ffffffffffffffff16600c60030160008a67ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c6891906132fa565b92505081905550610c798282611cf2565b610c8e338234610c89919061332e565b611cf2565b610ca2878767ffffffffffffffff16611dad565b5050505050505050565b606060038054610cbb906131f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce7906131f8565b8015610d345780601f10610d0957610100808354040283529160200191610d34565b820191906000526020600020905b815481529060010190602001808311610d1757829003601f168201915b5050505050905090565b6060610d4a600c611dcb565b905090565b8060076000610d5c611509565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e09611509565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e4e919061264d565b60405180910390a35050565b610e65848484610685565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610ea657610e9084848484611f22565b610ea557610ea463d1a57ed660e01b611176565b5b5b50505050565b6060610eb7826110ca565b610ecc57610ecb63a14c4b5060e01b611176565b5b6000600c6004018054610ede906131f8565b905003610efa5760405180602001604052806000815250610f2f565b600c600401610f0883612051565b600c600501604051602001610f1f93929190613436565b6040516020818303038152906040525b9050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610fd26112af565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110445760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161103b91906127be565b60405180910390fd5b61104d816115be565b50565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806110c357506110c2826120a1565b5b9050919050565b6000816110d5611398565b11611170576110e26113a1565b82111561110c57611105600460008481526020019081526020016000205461210b565b9050611171565b60005482101561116f5760005b6000600460008581526020019081526020016000205491508103611148578261114190613467565b9250611119565b60007c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b8060005260046000fd5b600061118b83610a96565b90508180156111cd57508073ffffffffffffffffffffffffffffffffffffffff166111b4611509565b73ffffffffffffffffffffffffffffffffffffffff1614155b156111f9576111e3816111de611509565b610f36565b6111f8576111f763cfb3b94260e01b611176565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b6112b761214c565b73ffffffffffffffffffffffffffffffffffffffff166112d5610b53565b73ffffffffffffffffffffffffffffffffffffffff1614611334576112f861214c565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161132b91906127be565b60405180910390fd5b565b818360040190816113479190613627565b50808360050190816113599190613627565b507f927a41e440ce6a96781dbee2e5693388ce49325e4729d62114f699d43dea385e828260405161138b9291906136f9565b60405180910390a1505050565b60006001905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b6000816113d4611398565b116114cc57600460008381526020019081526020016000205490506113f76113a1565b82111561141c576114078161210b565b6114dd5761141b63df2d9b4260e01b611176565b5b600081036114a357600054821061143e5761143d63df2d9b4260e01b611176565b5b5b6004600083600190039350838152602001908152602001600020549050600081031561149e5760007c0100000000000000000000000000000000000000000000000000000000821603156114dd5761149d63df2d9b4260e01b611176565b5b61143f565b60007c0100000000000000000000000000000000000000000000000000000000821603156114dd575b6114dc63df2d9b4260e01b611176565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e8611572868684612154565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b81600001600061169491906124da565b60005b815181101561184a576116c38282815181106116b6576116b5613730565b5b602002602001015161215d565b826000018282815181106116da576116d9613730565b5b6020026020010151908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506040820151816001015560608201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055506080820151816003015560a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050807fc273537cb88246ec210945bef4f91472aaf9e6095dc379984609771d2871318383838151811061182257611821613730565b5b602002602001015160405161183791906137da565b60405180910390a2806001019050611697565b505050565b60008088600101548667ffffffffffffffff168a6002015461187191906132fa565b11156118a9576040517f1e186f7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008960030160008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008a6000018a8154811061191857611917613730565b5b906000526020600020906005020160020160009054906101000a900463ffffffff1663ffffffff1690506000808214611951578161195d565b8767ffffffffffffffff165b9050600081141580156119845750808967ffffffffffffffff168461198291906132fa565b115b156119bb576040517ff0700b7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b815481106119d1576119d0613730565b5b9060005260206000209060050201600301548967ffffffffffffffff166119f89190613258565b341015611a31576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6000018b81548110611a4757611a46613730565b5b906000526020600020906005020160000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421180611ac857508b6000018b81548110611a9557611a94613730565b5b906000526020600020906005020160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1642105b15611aff576040517f951b974f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060001b8d6000018d81548110611b1b57611b1a613730565b5b90600052602060002090600502016001015403611b39576001611c14565b611c13888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508e6000018e81548110611b9457611b93613730565b5b90600052602060002090600502016001015460008c67ffffffffffffffff1614611be6578d8c604051602001611bcb929190613873565b60405160208183030381529060405280519060200120611c0e565b8d604051602001611bf7919061389f565b604051602081830303815290604052805190602001205b61221f565b5b905080611c4d576040517fb05e92fa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008d6000018d81548110611c6557611c64613730565b5b906000526020600020906005020160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008e6000018e81548110611cb157611cb0613730565b5b9060005260206000209060050201600301548c67ffffffffffffffff16611cd89190613258565b905081819750975050505050505097509795505050505050565b6000810315611da95760008273ffffffffffffffffffffffffffffffffffffffff1682604051611d21906138eb565b60006040518083038185875af1925050503d8060008114611d5e576040519150601f19603f3d011682016040523d82523d6000602084013e611d63565b606091505b5050905080611da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d9e9061394c565b60405180910390fd5b505b5050565b611dc7828260405180602001604052806000815250612236565b5050565b606081600001805480602002602001604051908101604052809291908181526020016000905b82821015611f1757838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152602001600182015481526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611df1565b505050509050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611f48611509565b8786866040518563ffffffff1660e01b8152600401611f6a94939291906139c1565b6020604051808303816000875af1925050508015611fa657506040513d601f19601f82011682018060405250810190611fa39190613a22565b60015b611ffe573d8060008114611fd6576040519150601f19603f3d011682016040523d82523d6000602084013e611fdb565b606091505b506000815103611ff657611ff563d1a57ed660e01b611176565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060a060405101806040526020810391506000825281835b60011561208c57600184039350600a81066030018453600a810490508061206a575b50828103602084039350808452505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b600033905090565b60009392505050565b806020015167ffffffffffffffff16816000015167ffffffffffffffff16106121b2576040517f6bbbe08000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff160361221c576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60008261222c85846122b2565b1490509392505050565b6122408383612302565b60008373ffffffffffffffffffffffffffffffffffffffff163b146122ad57600080549050600083820390505b6122806000868380600101945086611f22565b6122955761229463d1a57ed660e01b611176565b5b81811061226d5781600054146122aa57600080fd5b50505b505050565b60008082905060005b84518110156122f7576122e8828683815181106122db576122da613730565b5b6020026020010151612488565b915080806001019150506122bb565b508091505092915050565b600080549050600082036123215761232063b562e8dd60e01b611176565b5b61232e6000848385611555565b61234e8361233f600086600061155b565b612348856124b3565b17611583565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690506000810361240657612405632e07630060e01b611176565b5b60008383019050600083905061241a6113a1565b600183031115612435576124346381647e3a60e01b611176565b5b5b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103612436578160008190555050505061248360008483856115ae565b505050565b60008183106124a05761249b82846124c3565b6124ab565b6124aa83836124c3565b5b905092915050565b60006001821460e11b9050919050565b600082600052816020526040600020905092915050565b50805460008255600502906000526020600020908101906124fb91906124fe565b50565b5b8082111561259557600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905560018201600090556002820160006101000a81549063ffffffff021916905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506005016124ff565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6125e2816125ad565b81146125ed57600080fd5b50565b6000813590506125ff816125d9565b92915050565b60006020828403121561261b5761261a6125a3565b5b6000612629848285016125f0565b91505092915050565b60008115159050919050565b61264781612632565b82525050565b6000602082019050612662600083018461263e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156126a2578082015181840152602081019050612687565b60008484015250505050565b6000601f19601f8301169050919050565b60006126ca82612668565b6126d48185612673565b93506126e4818560208601612684565b6126ed816126ae565b840191505092915050565b6000602082019050818103600083015261271281846126bf565b905092915050565b6000819050919050565b61272d8161271a565b811461273857600080fd5b50565b60008135905061274a81612724565b92915050565b600060208284031215612766576127656125a3565b5b60006127748482850161273b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006127a88261277d565b9050919050565b6127b88161279d565b82525050565b60006020820190506127d360008301846127af565b92915050565b6127e28161279d565b81146127ed57600080fd5b50565b6000813590506127ff816127d9565b92915050565b6000806040838503121561281c5761281b6125a3565b5b600061282a858286016127f0565b925050602061283b8582860161273b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612887826126ae565b810181811067ffffffffffffffff821117156128a6576128a561284f565b5b80604052505050565b60006128b9612599565b90506128c5828261287e565b919050565b600067ffffffffffffffff8211156128e5576128e461284f565b5b6128ee826126ae565b9050602081019050919050565b82818337600083830152505050565b600061291d612918846128ca565b6128af565b9050828152602081018484840111156129395761293861284a565b5b6129448482856128fb565b509392505050565b600082601f83011261296157612960612845565b5b813561297184826020860161290a565b91505092915050565b60008060408385031215612991576129906125a3565b5b600083013567ffffffffffffffff8111156129af576129ae6125a8565b5b6129bb8582860161294c565b925050602083013567ffffffffffffffff8111156129dc576129db6125a8565b5b6129e88582860161294c565b9150509250929050565b6129fb8161271a565b82525050565b6000602082019050612a1660008301846129f2565b92915050565b600080600060608486031215612a3557612a346125a3565b5b6000612a43868287016127f0565b9350506020612a54868287016127f0565b9250506040612a658682870161273b565b9150509250925092565b60008060408385031215612a8657612a856125a3565b5b6000612a948582860161273b565b9250506020612aa58582860161273b565b9150509250929050565b6000604082019050612ac460008301856127af565b612ad160208301846129f2565b9392505050565b600060208284031215612aee57612aed6125a3565b5b6000612afc848285016127f0565b91505092915050565b600067ffffffffffffffff821115612b2057612b1f61284f565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b612b5881612b3b565b8114612b6357600080fd5b50565b600081359050612b7581612b4f565b92915050565b6000819050919050565b612b8e81612b7b565b8114612b9957600080fd5b50565b600081359050612bab81612b85565b92915050565b600063ffffffff82169050919050565b612bca81612bb1565b8114612bd557600080fd5b50565b600081359050612be781612bc1565b92915050565b600060c08284031215612c0357612c02612b36565b5b612c0d60c06128af565b90506000612c1d84828501612b66565b6000830152506020612c3184828501612b66565b6020830152506040612c4584828501612b9c565b6040830152506060612c5984828501612bd8565b6060830152506080612c6d8482850161273b565b60808301525060a0612c81848285016127f0565b60a08301525092915050565b6000612ca0612c9b84612b05565b6128af565b90508083825260208201905060c08402830185811115612cc357612cc2612b31565b5b835b81811015612cec5780612cd88882612bed565b84526020840193505060c081019050612cc5565b5050509392505050565b600082601f830112612d0b57612d0a612845565b5b8135612d1b848260208601612c8d565b91505092915050565b600060208284031215612d3a57612d396125a3565b5b600082013567ffffffffffffffff811115612d5857612d576125a8565b5b612d6484828501612cf6565b91505092915050565b600080fd5b60008083601f840112612d8857612d87612845565b5b8235905067ffffffffffffffff811115612da557612da4612d6d565b5b602083019150836020820283011115612dc157612dc0612b31565b5b9250929050565b60008060008060008060a08789031215612de557612de46125a3565b5b6000612df389828a01612b66565b9650506020612e0489828a016127f0565b9550506040612e1589828a01612b66565b9450506060612e2689828a01612b66565b935050608087013567ffffffffffffffff811115612e4757612e466125a8565b5b612e5389828a01612d72565b92509250509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612e9781612b3b565b82525050565b612ea681612b7b565b82525050565b612eb581612bb1565b82525050565b612ec48161271a565b82525050565b612ed38161279d565b82525050565b60c082016000820151612eef6000850182612e8e565b506020820151612f026020850182612e8e565b506040820151612f156040850182612e9d565b506060820151612f286060850182612eac565b506080820151612f3b6080850182612ebb565b5060a0820151612f4e60a0850182612eca565b50505050565b6000612f608383612ed9565b60c08301905092915050565b6000602082019050919050565b6000612f8482612e62565b612f8e8185612e6d565b9350612f9983612e7e565b8060005b83811015612fca578151612fb18882612f54565b9750612fbc83612f6c565b925050600181019050612f9d565b5085935050505092915050565b60006020820190508181036000830152612ff18184612f79565b905092915050565b61300281612632565b811461300d57600080fd5b50565b60008135905061301f81612ff9565b92915050565b6000806040838503121561303c5761303b6125a3565b5b600061304a858286016127f0565b925050602061305b85828601613010565b9150509250929050565b600067ffffffffffffffff8211156130805761307f61284f565b5b613089826126ae565b9050602081019050919050565b60006130a96130a484613065565b6128af565b9050828152602081018484840111156130c5576130c461284a565b5b6130d08482856128fb565b509392505050565b600082601f8301126130ed576130ec612845565b5b81356130fd848260208601613096565b91505092915050565b600080600080608085870312156131205761311f6125a3565b5b600061312e878288016127f0565b945050602061313f878288016127f0565b93505060406131508782880161273b565b925050606085013567ffffffffffffffff811115613171576131706125a8565b5b61317d878288016130d8565b91505092959194509250565b600080604083850312156131a05761319f6125a3565b5b60006131ae858286016127f0565b92505060206131bf858286016127f0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061321057607f821691505b602082108103613223576132226131c9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006132638261271a565b915061326e8361271a565b925082820261327c8161271a565b9150828204841483151761329357613292613229565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006132d48261271a565b91506132df8361271a565b9250826132ef576132ee61329a565b5b828204905092915050565b60006133058261271a565b91506133108361271a565b925082820190508082111561332857613327613229565b5b92915050565b60006133398261271a565b91506133448361271a565b925082820390508181111561335c5761335b613229565b5b92915050565b600081905092915050565b60008190508160005260206000209050919050565b6000815461338f816131f8565b6133998186613362565b945060018216600081146133b457600181146133c9576133fc565b60ff19831686528115158202860193506133fc565b6133d28561336d565b60005b838110156133f4578154818901526001820191506020810190506133d5565b838801955050505b50505092915050565b600061341082612668565b61341a8185613362565b935061342a818560208601612684565b80840191505092915050565b60006134428286613382565b915061344e8285613405565b915061345a8284613382565b9150819050949350505050565b60006134728261271a565b91506000820361348557613484613229565b5b600182039050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026134dd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826134a0565b6134e786836134a0565b95508019841693508086168417925050509392505050565b6000819050919050565b600061352461351f61351a8461271a565b6134ff565b61271a565b9050919050565b6000819050919050565b61353e83613509565b61355261354a8261352b565b8484546134ad565b825550505050565b600090565b61356761355a565b613572818484613535565b505050565b5b818110156135965761358b60008261355f565b600181019050613578565b5050565b601f8211156135db576135ac8161336d565b6135b584613490565b810160208510156135c4578190505b6135d86135d085613490565b830182613577565b50505b505050565b600082821c905092915050565b60006135fe600019846008026135e0565b1980831691505092915050565b600061361783836135ed565b9150826002028217905092915050565b61363082612668565b67ffffffffffffffff8111156136495761364861284f565b5b61365382546131f8565b61365e82828561359a565b600060209050601f831160018114613691576000841561367f578287015190505b613689858261360b565b8655506136f1565b601f19841661369f8661336d565b60005b828110156136c7578489015182556001820191506020850194506020810190506136a2565b868310156136e457848901516136e0601f8916826135ed565b8355505b6001600288020188555050505b505050505050565b6000604082019050818103600083015261371381856126bf565b9050818103602083015261372781846126bf565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60c0820160008201516137756000850182612e8e565b5060208201516137886020850182612e8e565b50604082015161379b6040850182612e9d565b5060608201516137ae6060850182612eac565b5060808201516137c16080850182612ebb565b5060a08201516137d460a0850182612eca565b50505050565b600060c0820190506137ef600083018461375f565b92915050565b60008160601b9050919050565b600061380d826137f5565b9050919050565b600061381f82613802565b9050919050565b6138376138328261279d565b613814565b82525050565b60008160c01b9050919050565b60006138558261383d565b9050919050565b61386d61386882612b3b565b61384a565b82525050565b600061387f8285613826565b60148201915061388f828461385c565b6008820191508190509392505050565b60006138ab8284613826565b60148201915081905092915050565b600081905092915050565b50565b60006138d56000836138ba565b91506138e0826138c5565b600082019050919050565b60006138f6826138c8565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000613936600f83612673565b915061394182613900565b602082019050919050565b6000602082019050818103600083015261396581613929565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006139938261396c565b61399d8185613977565b93506139ad818560208601612684565b6139b6816126ae565b840191505092915050565b60006080820190506139d660008301876127af565b6139e360208301866127af565b6139f060408301856129f2565b8181036060830152613a028184613988565b905095945050505050565b600081519050613a1c816125d9565b92915050565b600060208284031215613a3857613a376125a3565b5b6000613a4684828501613a0d565b9150509291505056fea2646970667358221220a210d6f2a656101a4b9439e1e91e1c2322c2650cfad8a3c080de8afa035bcdc664736f6c634300081b0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
};