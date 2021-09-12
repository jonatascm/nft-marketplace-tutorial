require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;
const infuraProjectId = process.env.PROJECT_ID;

https: module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
