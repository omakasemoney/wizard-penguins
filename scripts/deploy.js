const hre = require("hardhat");

async function main() {
  const WizardCouncil = await hre.ethers.getContractFactory("WizardCouncil");
  const wizardCouncil = await WizardCouncil.deploy();

  await wizardCouncil.deployed();

  const receipt = await wizardCouncil.deployTransaction.wait();
  const gasUsed = hexToDec(receipt.gasUsed._hex);
  const aveGwei = 0.000000069;  
  const etherPrice = 1669;  
  console.log("wizardCouncil deployed to:", wizardCouncil.address);
  console.log("gas units: ", gasUsed);
  console.log("cost to deploy: ", `\$${gasUsed * aveGwei * etherPrice}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  function hexToDec(hexString){
    return parseInt(hexString, 16);
  } 