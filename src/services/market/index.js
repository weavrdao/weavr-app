import AssetContract from '../../data/network/web3/contracts/assetContract'
import StorageNetwork from '../../data/network/storage/storageNetwork'

/**
 * Market Provider service
 * @param {AssetContract} assetContract Asset contract instance
 * @param {StorageNetwork} storageNetwork Storage network to use
 */
class Market {
  constructor (
    assetContract,
    storageNetwork,
  ) {
    this.assetContract = assetContract
    this.storageNetwork = storageNetwork
  }
  
  /**
   * Get assets that are currently trading on the market.
   * @param {number} limit
   * @param {number} offset
   * @param {Object} idsArray ids to return; everything is returned if null
   * @param {string} sort accepted format is [field_name]:[asc|desc]
   * @param {number} minBlockNumber The min block number
   * @returns {Object} {Array of asset objects}
   * @example
   * await getAssetsOnTheMarket()
   * await getAssetsOnTheMarket(100, 0, [1,2,3,4,5])
   */
  async getAssetsOnTheMarket(
    limit = 100, 
    offset = 0, 
    idsArray = null, 
    sort = null, 
    minBlockNumber = null
  ) {
    // TODO: IMPLEMENT SERVICE METHOD
  }
}

export default Market
