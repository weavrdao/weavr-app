/**
 * Asset model.
 * @property {string} address Address of the asset on the chain
 * @property {Object} data Asset data (off-chain)
 */
class Asset {
  constructor(
    address,
    data
  ) {
    this.address = address
    this.data = data
  }
}