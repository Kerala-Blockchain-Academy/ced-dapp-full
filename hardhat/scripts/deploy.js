// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { writeFile } = require("fs");

async function main() {
  const cert = await hre.ethers.deployContract("Cert");

  await cert.waitForDeployment();

  const details = {
    deployer: cert.deploymentTransaction().from,
    contract: await cert.getAddress(),
  };

  console.log(`${details.deployer} deployed ${details.contract}`);

  writeFile(
    "../api/src/artifacts/details.json",
    JSON.stringify(details, null, 2),
    (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log("Details are saved!!");
    }
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
