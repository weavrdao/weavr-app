import EthereumClient from '../ethereum/ethereumClient'

const contractAddress = "0x0" // TODO: ADD CONTRACT ADDRESS
const contractAbi = [
  // Proposal Yes on a certain proposal
  "function proposalYes(uint256 id)",

  // Proposal No on a certain proposal
  "function proposalNo(uint256 id)",

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
   * Proposal Yes on a certain proposal
   * @param {string} proposalID ID of the proposal
   */
  async proposalYes(
    proposalID
  ) {
    return await this.mutableContract.proposalYes(proposalID)
  }

  /**
   * Proposal No on a certain proposal
   * @param {string} proposalID ID of the proposal
   */
  async proposalNo(
    proposalID
  ) {
    return await this.mutableContract.proposalNo(proposalID)
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
