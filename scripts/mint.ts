import {ethers} from "hardhat";

async function main() {
    const  [signer] = await ethers.getSigners();
    const erc721 = await ethers.getContractAt("IMint",
     "0xFa7119cCf5aa95c6B3bE44a819f35020a4D933D3");

    await erc721.mint(signer.address, 6,
    "ipfs://QmUfxyLwTyfHqWKyZTWBbMudkzEkoMrzhBmt48oEeBoy5V/")
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });