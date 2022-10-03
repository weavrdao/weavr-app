/**
 * Asset model.
 * @property {string} id ID of the asset
 * @property {string} state
 * @property {} amountDeposited
 * @property {} target
 * @property {} thread
 * @property {} erc20
 * @property {} deposits
 * @property {} whitedrawls
 * @property {} distributions
 */
 class Needle {
    constructor(
      id,
      state,
      amountDeposited,
      target,
      thread,
      erc20,
      deposits,
      whitedrawls,
      distributions
    ) {
      this.id = id
      this.state = state,
      this.amountDeposited = amountDeposited,
      this.target = target,
      this.thread = thread,
      this.erc20 = erc20,
      this.deposits = deposits,
      this.whitedrawls = whitedrawls,
      this.distributions = distributions
    }
  }
  
  export default Needle