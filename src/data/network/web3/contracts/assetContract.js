import EthereumClient from '../ethereum/ethereumClient'

const contractAddress = "0x0" // TODO: ADD CONTRACT ADDRESS
const contractAbi = [
  // Vote Yes on a certain proposal
  "function voteYes(uint256 id)",

  // Vote No on a certain proposal
  "function voteNo(uint256 id)",
]
const startBlock = 0 // TODO: ADD CONTRACT DEPLOYMENT BLOCK TO AVOID QUERYING EXTRA HISTORY

/**
 * Asset contract
 * @param {EthereumClient} ethereumClient Ethereum client
 */
class AssetContract {
  constructor(
    ethereumClient
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
