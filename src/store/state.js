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
      offers: []
    }
  }
}

const getters = {
  userWalletAddress(state) {
    return state.user.wallet.address
  },

  marketplaceActiveOffers(state) {
    return state.marketplace.offers
  userEthBalance(state) {
    return state.user.wallet.ethBalance
  },

  }
}

const actions = {
  async syncWallet(context) {
    const walletState = await wallet.getState()
    context.commit('setWallet', walletState)
  },

  async refreshMarketplaceData(context) {
    let assets = await market.getAssetsOnTheMarket()
    context.commit('setMarketplaceOffers', assets)
  }
}

const mutations = {
  setWallet(state, wallet) {
    state.user.wallet = wallet
  },

  setMarketplaceOffers(state, offers) {
    state.marketplace.offers = offers
  setEthBalance(state, ethBalance) {
    state.user.wallet.ethBalance = ethBalance
  },

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}