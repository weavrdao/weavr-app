import EthereumClient from '../ethereum/ethereumClient'

const contractAbi = [
  // Vote Yes on a certain proposal
  "function voteYes(uint256 id)",

  // Vote No on a certain proposal
  "function voteNo(uint256 id)",
]
const startBlock = 9140112

/**
 * Asset contract
 * @param {EthereumClient} ethereumClient Ethereum client
 */
class AssetContract {
  constructor(
    ethereumClient,
    contractAddress
  ) {
    this.contract = ethereumClient.getContract(contractAddress, contractAbi)
    this.mutableContract = ethereumClient.getMutableContract(this.contract)
  }

  /**
   * Vote Yes on a certain proposal
   * @param {string} proposalID ID of the proposal
   */
  async voteYes(
    proposalID
  ) {
    return await this.mutableContract.voteYes(proposalID)
  }

  /**
   * Vote No on a certain proposal
   * @param {string} proposalID ID of the proposal
   */
  async voteNo(
    proposalID
  ) {
    return await this.mutableContract.voteNo(proposalID)
  }
}

export default AssetContract
