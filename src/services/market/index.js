import * as CommonUtils from '../../utils/common'
import PlatformContract from '../../data/network/web3/contracts/platformContract'
import StorageNetwork from '../../data/network/storage/storageNetwork'
import Asset from '../../models/asset'
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
    this.platformContract = platformContract
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
    // Get indexed on-chain data

    var assets = await this.graphQLAPIClient
      .query(
        ALL_ASSETS_QUERY, 
        {}, 
        (mapper, response) => { return mapper.mapAssets(response.data.deployedAssets) }
      )

    // TODO: CONSIDER DISCONTINUED/DEACTIVATED ASSETS

    // Fetch and append off-chain data

    const assetDataURIArray = assets
      .map(asset => asset.dataURI)
    let assetOffchainDataArray = (
        await this.storageNetwork
          .getFiles(assetDataURIArray.map(uri => CommonUtils.pathFromURL(uri)))
      )
      .map(obj => obj.world.property)

    console.log('Data: ')
    console.log(assetOffchainDataArray)

    if (assetOffchainDataArray.length != assets.length) {
      throw("Off-chain data count doesn't match the on-chain data")
    }

    for (var i = 0; i < assets.length; i++) {
      let asset = assets[i]
      let data = assetOffchainDataArray[i]

      let completeAsset = new Asset(
        asset.id,
        asset.dataURI,
        asset.contractAddress,
        asset.symbol,
        asset.numOfShares,
        asset.owners,
        asset.proposals,
        data.address,
        data.area,
        data.coverImage,
        data.currentRent,
        data.description,
        data.grossYieldPct,
        data.marketValue,
        data.rooms.bdCount,
        data.rooms.baCount,
        data.yearBuilt
      )

      assets[i] = completeAsset
    }

    return assets
  }
}

export default Market
