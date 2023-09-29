require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    alfajores: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainID: 44787,
    }
  }
};
