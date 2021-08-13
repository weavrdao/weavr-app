import EthereumClient from '../../data/network/web3/ethereum/ethereumClient'

/**
 * Wallet service
 * @param {EthereumClient} ethereumClient Ethereum client
 */
 class Wallet {
  constructor(
    ethereumClient
  ) {
    this.client = ethereumClient
  }
  
  async getAddress() {
    return this.client.getWalletAddress()
  }
}

export default Wallet