import ServiceProvider from '../services/provider'
import WalletState from '../models/walletState'

const wallet = ServiceProvider.wallet()
const market = ServiceProvider.market()

function state() {
  return {
    user: {
      wallet: WalletState
    },
    marketplace: {
      assets: []
    }
  }
}

const getters = {
  userWalletAddress(state) {
    return state.user.wallet.address
  },

  userEthBalance(state) {
    return state.user.wallet.ethBalance
  },

  marketplaceActiveAssets(state) {
    return state.marketplace.assets
  }
}

const actions = {
  async syncWallet(context) {
    const walletState = await wallet.getState()
    context.commit('setWallet', walletState)
  },

  async refreshMarketplaceData(context) {
    let assets = await market.getAssetsOnTheMarket()
    context.commit('setMarketplaceAssets', assets)
  }
}

const mutations = {
  setWallet(state, wallet) {
    state.user.wallet = wallet
  },

  setEthBalance(state, ethBalance) {
    state.user.wallet.ethBalance = ethBalance
  },

  setMarketplaceAssets(state, assets) {
    state.marketplace.assets = assets
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}