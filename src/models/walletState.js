/**
 * Wallet state model.
 * @property {string} address Address of the wallet
 * @property {number} ethBalance Balance of the wallet in ETH
 */
class WalletState {
  constructor(
    address,
    ethBalance,
    error
  ) {
    this.address = error ? null : address;
    this.ethBalance = error ? 0 : ethBalance;
    this.error = error;
  }
}

export default WalletState