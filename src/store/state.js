import ServiceProvider from '../services/provider'

const wallet = ServiceProvider.wallet()
const market = ServiceProvider.market()

function state() {
  return {
    user: {
      wallet: {
        address: null
      }
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
  }
}

const actions = {
  async syncWallet(context) {
    const address = await wallet.getAddress()
    context.commit('setWalletAddress', address)
  },

  async refreshMarketplaceData(context) {
    let assets = await market.getAssetsOnTheMarket()
    context.commit('setMarketplaceOffers', assets)
  }
}

const mutations = {
  setWalletAddress(state, address) {
    state.user.wallet.address = address
  },

  setMarketplaceOffers(state, offers) {
    state.marketplace.offers = offers
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}