// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import {LibStorage} from "./libs/LibStorage.sol";

contract McvLaunchNFT is ERC721A, Ownable, ReentrancyGuard, ERC2981 {
    LibStorage.LaunchpadStorage private launchpadStorage;

    using LibStorage for LibStorage.LaunchpadStorage;
    
    constructor(
        string memory name,
        string memory symbol,
        string memory _uri,
        string memory _uriSuffix,
        address _initOwner,
        uint256 _maxSupply,
        address _royaltyRecipient,
        uint96 _royaltyBps,
        LibStorage.MintStage[] memory _stages
    ) 
        ERC721A(name, symbol)
        Ownable(_initOwner)
    {
        launchpadStorage.baseURI = _uri;
        launchpadStorage.uriSuffix = _uriSuffix;
        launchpadStorage.maxSupply = _maxSupply;
        _setDefaultRoyalty(_royaltyRecipient, _royaltyBps);
        launchpadStorage.updateMintStages(_stages);
    }

    function mintWithLimit(
        uint64 stageIndex,
        address account,
        uint64 quantity,
        uint64 maxQuantity,
        bytes32[] calldata proof
    ) external payable nonReentrant {
        (address mintFeeRecipient, uint256 totalMintFee) = launchpadStorage.checkStageMint(
            stageIndex,
            account,
            quantity,
            maxQuantity,
            proof
        );
        launchpadStorage.totalMinted += quantity;
        launchpadStorage.accountMintedMap[stageIndex][account] += quantity;
        sendNativeToken(mintFeeRecipient, totalMintFee);
        sendNativeToken(msg.sender, msg.value - totalMintFee);
        _safeMint(account, quantity);
    }

    function tokenURI(uint256 tokenId) public view virtual override (ERC721A) returns(string memory) {
        if (!_exists(tokenId)) _revert(URIQueryForNonexistentToken.selector);
        return bytes(launchpadStorage.baseURI).length != 0 ? 
            string(abi.encodePacked(launchpadStorage.baseURI, _toString(tokenId), launchpadStorage.uriSuffix)) : "";
    }

    function getMintStages() external view returns (LibStorage.MintStage[] memory) {
        return launchpadStorage.getMintStages();
    }

    function updateURI(string memory _uri, string memory _uriSuffix) external onlyOwner {
        launchpadStorage.updateURI(_uri, _uriSuffix);
    }

    function updateMintStages(LibStorage.MintStage[] memory newStages) external onlyOwner {
        launchpadStorage.updateMintStages(newStages);
    }

    function updateDefaultRoyalty(address _receiver, uint96 _feeNumerator) external onlyOwner {
        _setDefaultRoyalty(_receiver, _feeNumerator);
    }
    
    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721A, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function sendNativeToken(address recipient, uint256 value) internal {
        if (value == 0) {
            return ;
        }
        (bool success, ) = recipient.call{value: value}("");
        require(success, "Transfer failed");
    }
}
