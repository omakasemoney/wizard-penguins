# wizard-penguins
smart contract for wizard penguins art piece 
- will mint to each address 
- WizardCouncil (WC)
- all will point to the same metadata
- no max supply

# deployment

npm install

npx hardhat compile

npx hardhat run scripts/deploy.js --network mainnet

npx hardhat verify <CONTRACT_ADDRESS_HERE> --network mainnet

# minting 

mint(receiver, quantity)