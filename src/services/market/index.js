import PlatformContract from '../../data/network/web3/contracts/platformContract'
import StorageNetwork from '../../data/network/storage/storageNetwork'
import Asset from './models/asset'

/**
 * Market Provider service
 * @param {PlatformContract} platformContract Platform contract instance
 * @param {StorageNetwork} storageNetwork Storage network to use
 */
class Market {
  constructor (
    platformContract,
    storageNetwork,
  ) {
    this.assetContract = platformContract
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
    /*
      On-chain info to request:
        - Token address
        - Holder count 
        - Market cap

      Off-chain info to request:
        See JSON schema
    */

    // Request all the assets that are created AND currently active on the chain.

    const assetCreationEvents = this.platformContract.listAssetsCreated()

    // TODO: CONSIDER DISCONTINUED/DEACTIVATED ASSETS

    // Load the data for every asset in the list

    let assetDataArray = await this.storageNetwork
      .getFiles(assetCreationEvents.map(e => e.uri))
    
    // Combine and return the assets

    let assets = assetCreationEvents
      .map((event, index) => { 
        return new Asset(
          event.address, 
          assetDataArray[index]
        )
      })

    return assets
  }
}

export default Market
