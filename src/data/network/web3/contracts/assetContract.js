import EthereumClient from '../ethereum/ethereumClient'

const contractAddress = "0x0" // TODO: ADD CONTRACT ADDRESS
const contractAbi = [
  // Vote Yes on a certain proposal
  "function voteYes(uint256 id)",

  // Vote No on a certain proposal
  "function voteNo(uint256 id)",

  // Event triggered whenever a new proposal is created in the asset's DAO
  "event NewProposal(uint256 id, address creator, string info)",
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

  /**
   * List all the proposals ever created for the asset
   * @param {string} address 
   * @returns {Promise<Array<ethers.Event>>} Raw EVM events for now.
   */
  async listProposals() {
    const filter = this.contract.filters.NewProposal(
      null, 
      null,
      null
    )
    
    return await this.contract.queryFilter(filter, startBlock)
  }
}

export default AssetContract
