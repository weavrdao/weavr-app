import EthereumClient from "../../data/network/web3/ethereum/ethereumClient"
import { WalletState } from "../../models/walletState"

/**
 * Wallet service
 * @property {EthereumClient} client Ethereum client
 */
class Wallet {
  constructor(
    ethereumClient
  ) {
    this.client = ethereumClient
  }

  async getState() {
    const result = await this.client.syncWallet();

    if (!result.ok) {
      console.log(19, result);
      return new WalletState(null, 0, result);
    }
    return new WalletState(
      (await this.client.getWalletAddress() || '').toLowerCase(),
      this.client.getWalletEthBalance() / Math.pow(10, 18)
    )
  }
}

export default Wallet