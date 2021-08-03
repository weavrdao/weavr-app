import Market from './market'
import AssetContract from '../data/network/web3/contracts/assetContract'
import IPFSStorageNetwork from '../data/network/storage/ipfs/IPFSStorageNetwork'
import EthereumClient from '../data/network/web3/ethereum/ethereumClient'

const ethereumClient = new EthereumClient()
const storageNetwork = new IPFSStorageNetwork()

class ServiceProvider {
  /**
   * Creates market service.
   * @returns {Market} Market service
   */
  static market() {
    return new Market(
      new AssetContract(ethereumClient),
      storageNetwork
    )
  }
}

export default ServiceProvider