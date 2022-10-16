import contractAbi from "./abi/Crowdfund";

class CrowdfundContract {
  constructor(
    ethereumClient,
    contractAddress
  ) {
    this.contract = ethereumClient.getContract(contractAddress, contractAbi)
    this.mutableContract = ethereumClient.getMutableContract(this.contract)
  }

  /**
   * @ Deposit funds to a needle
   * @param {string} amount Amount of tokens to deposit into crowdfund
   */
  async deposit(amount) {
    console.log(amount)
    console.log(this.mutableContract)
    return (await this.mutableContract.deposit(amount));
  }

  async token() {
    return (await this.contract.token());
  }

}

export default CrowdfundContract;
