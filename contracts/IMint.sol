//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IMint{
   function mint(address _to, uint _tokenId,string calldata _uri) external;

}