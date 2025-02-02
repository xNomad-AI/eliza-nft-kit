// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

pragma solidity ^0.8.26;

library LibStorage {
    struct MintStage {
        uint64 startDate;
        uint64 endDate;
        bytes32 merkleRoot; // 0x => public
        uint32 mintLimit; // 0 => unlimit
        uint256 mintPrice;
        address recipient;
    }

    struct LaunchpadStorage {
        MintStage[] stageArray;
        uint256 maxSupply;
        uint256 totalMinted;
        mapping(uint256 => mapping(address => uint256)) accountMintedMap;
        string baseURI;
        string uriSuffix;
    }

    error InvalidStageDate();
    error InvalidMerkleProof();
    error ExceedMaxSupply();
    error ExceedWalletLimit();
    error InsufficientNativeValue();
    error MintNotOpen();
    error InvalidAddress();

    event StageUpdated(uint256 indexed stageIndex, MintStage newStage);
    event URIUpdated(string uri, string uriSuffix);

    function getMintStages(LaunchpadStorage storage _storage) internal view returns (MintStage[] memory) {
        return _storage.stageArray;
    }

    function updateMintStages(LaunchpadStorage storage _storage, MintStage[] memory newStages) internal {
        delete _storage.stageArray;

        for (uint256 i = 0; i < newStages.length;) {
            verifyStage(newStages[i]);
            _storage.stageArray.push(newStages[i]);
            emit StageUpdated(i, newStages[i]);

            unchecked {
                ++i;
            }
        }
    }

    function updateURI(LaunchpadStorage storage _storage, string memory _uri, string memory _uriSuffix) internal  {
        _storage.baseURI = _uri;
        _storage.uriSuffix = _uriSuffix;
        emit URIUpdated(_uri, _uriSuffix);
    }    

    function verifyStage(
        MintStage memory stage
    ) private pure {
        if (stage.startDate >= stage.endDate) {
            revert InvalidStageDate();
        }
        if (stage.recipient == address(0)) {
            revert InvalidAddress();
        }
    }

    function checkStageMint(
        LaunchpadStorage storage _storage,
        uint256 stageIndex,
        address account,
        uint64 quantity,
        uint64 maxQuantity,
        bytes32[] calldata proof
    ) internal view returns(address, uint256) {
        if (_storage.totalMinted + quantity > _storage.maxSupply) {
            revert ExceedMaxSupply();
        }

        uint256 accountMinted = _storage.accountMintedMap[stageIndex][account];
        uint256 stageMintLimit = _storage.stageArray[stageIndex].mintLimit;
        uint256 validLimit = stageMintLimit == 0 ? maxQuantity : stageMintLimit;

        if (validLimit != 0 && accountMinted + quantity > validLimit) {
            revert ExceedWalletLimit();
        }

        if (msg.value < quantity * _storage.stageArray[stageIndex].mintPrice) {
            revert InsufficientNativeValue();
        }

        if (
            block.timestamp > _storage.stageArray[stageIndex].endDate ||
            block.timestamp < _storage.stageArray[stageIndex].startDate
        ) {
            revert MintNotOpen();
        }

        bool validProof = _storage.stageArray[stageIndex].merkleRoot != bytes32(0) ? MerkleProof.verify(
            proof,
            _storage.stageArray[stageIndex].merkleRoot,
            maxQuantity == 0 ? keccak256(abi.encodePacked(account)) : keccak256(abi.encodePacked(account, maxQuantity))
        ) : true;

        if (!validProof) {
            revert InvalidMerkleProof();
        }

        address mintFeeRecipient = _storage.stageArray[stageIndex].recipient;
        uint256 totalMintFee = quantity * _storage.stageArray[stageIndex].mintPrice;

        return (mintFeeRecipient, totalMintFee);
    }
}
