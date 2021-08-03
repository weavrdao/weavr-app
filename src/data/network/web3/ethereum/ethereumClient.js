require('dotenv').config()
const { ethers } = require("ethers")

const infuraNodeId = process.env.INFURA_ETH_PROJECT_ID

class EthereumClient {
  constructor() {
    // Using Infura to talk to the network
    this.provider = new ethers.providers.InfuraProvider('rinkeby', infuraNodeId)

    // Using in-browser wallet to sign transactions
    this.signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()
  }

  /**
   * Get current block number.
   */
  async getBlockNumber() {
    const number = await this.provider.getBlockNumber()
    console.log(number)
  }

  /**
   * Initialize contract.
   * @param {string} address Contract address
   * @param {string} abi Contract ABI
   * @returns Read-only contract instance
   */
  getContract(address, abi) {
    return new ethers.Contract(address, abi, this.provider)
  }

  /**
   * Get a copy of the contract where signable transactions can be executed.
   * @param {ethers.Contract} contract Contract
   * @returns {ethers.Contract} Contract instance with signer (wallet) connected to it
   */
  getMutableContract(contract) {
    return contract.connect(this.signer)
  } 
}

export default EthereumClient