# CED-DApp-Full

Full DApp example for CED.

## 🛠 Built With

[![Node.js](https://img.shields.io/badge/node.js-olivedrab?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/express-olivedrab?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/ejs-orange?style=for-the-badge&logo=javascript&logoColor=white)](https://ejs.co/)
[![Ethers](https://img.shields.io/badge/ethers-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://docs.ethers.org/v6/)
[![MetaMask](https://img.shields.io/badge/metamask-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://metamask.io/)
[![Hardhat](https://img.shields.io/badge/hardhat-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://hardhat.org/)
[![Solidity](https://img.shields.io/badge/solidity-sienna?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)

## ⚙️ Run Locally

Clone the project

```bash
git clone https://github.com/Kerala-Blockchain-Academy/ced-dapp-full.git
cd ced-dapp-full
```

Install dependencies for hardhat

```bash
cd hardhat
npm install
```

Create a '.env' and add the following variables

```bash
CHAIN=sepolia
API_KEY=<your-alchemy-api-key>
PRIVATE_KEY=<your-ethereum-private-key>
```

Deploy the contract

```bash
npm run deploy:sepolia
```

Copy '.env' to api

```bash
cp .env ../api/
```

Install dependencies for api

```bash
cd .. && cd api/
npm install
```

Start the application

```bash
npm run dev
```

Open [browser](http://127.0.0.1:8080) for UI
