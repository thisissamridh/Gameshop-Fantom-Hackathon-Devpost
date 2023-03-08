require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const { privateKeys } = require("./keys.json");
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    fantom: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: privateKeys,
    },

  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis"
  },
  mocha: {
    timeout: 40000
  }
}