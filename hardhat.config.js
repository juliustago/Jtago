

module.exports = {
  networks: {
    development: {
      url: "http://localhost:8545", // URL of the local development network
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID", // URL of the Rinkeby test network
      accounts: ["PRIVATE_KEY"], // Private key(s) of the accounts to use for deployment
    },
  },
};

module.exports = {
  solidity: {
    version: "0.8.4", // Version of the Solidity compiler
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

module.exports = {
  paths: {
    sources: "./contracts", // Path to Solidity contract files
    tests: "./tests", // Path to test files (if any)
  },
};

const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");

module.exports = {
  // ... other configurations

  // Hardhat plugins
  plugins: [
    // Plugins configurations
    "hardhat-waffle",
    "hardhat-deploy",
  ],
};
