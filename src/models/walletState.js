/**
 * Wallet state model.
 * @property {string} address Address of the wallet
 * @property {number} ethBalance Balance of the wallet in ETH
 */

const networks = {
  'mainnet': '1',
  'kovan': '42',
  'ropsten': '3',
  'rinkeby': '4',
  'goerli': '5',
  'arbitrum': '42161'
}

class WalletState {
  constructor(
    address,
    ethBalance,
    error
  ) {
    this.address = error ? null : address;
    this.ethBalance = error ? 0 : ethBalance;
    this.error = error;
    this.chainId = window.ethereum.networkVersion;
  }
}

export { WalletState, networks }