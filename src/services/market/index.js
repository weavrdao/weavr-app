import PlatformContract from '../../data/network/web3/contracts/platformContract'
import StorageNetwork from '../../data/network/storage/storageNetwork'
import Asset from './models/asset'
import { GraphQLAPIClient, ALL_ASSETS_QUERY } from '../../data/network/graph/graphQLAPIClient'

/**
 * Market Provider service
 * @param {GraphQLAPIClient} graphQLAPIClient GraphQL API Client
 * @param {PlatformContract} platformContract Platform contract instance
 * @param {StorageNetwork} storageNetwork Storage network to use
 */
class Market {
  constructor (
    graphQLAPIClient,
    platformContract,
    storageNetwork,
  ) {
    this.graphQLAPIClient = graphQLAPIClient
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
    const assets = await this.graphQLAPIClient
      .query(ALL_ASSETS_QUERY)

      console.log("Received asset data:")
      console.log(assets)

    // TODO: CONSIDER DISCONTINUED/DEACTIVATED ASSETS

    return assets
  }
}

export default Market
