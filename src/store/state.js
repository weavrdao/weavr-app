import ServiceProvider from '../services/provider'
import WalletState from '../models/walletState'

const wallet = ServiceProvider.wallet()
const market = ServiceProvider.market()

function state() {
  return {
    user: {
      wallet: WalletState
    },
    platform: {
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

  ownedAssets(state) {
    return state.platform.assets
      .filter(asset => { return asset.owners.get(state.user.wallet.address) })
  },

  marketplaceActiveAssets(state) {
    return state.platform.assets
  }
}

const actions = {
  async syncWallet(context) {
    const walletState = await wallet.getState()
    context.commit('setWallet', walletState)
  },

  async refreshOwnedAssetsData(context) {
    let assets = await market.getAssetsOnTheMarket()
    context.commit('setAssets', assets)
  },

  async refreshMarketplaceData(context) {
    let assets = await market.getAssetsOnTheMarket()
    context.commit('setAssets', assets)
  }
}

const mutations = {
  setWallet(state, wallet) {
    state.user.wallet = wallet
  },

  setEthBalance(state, ethBalance) {
    state.user.wallet.ethBalance = ethBalance
  },

  setAssets(state, assets) {
    state.platform.assets = assets
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}