import ServiceProvider from '../services/provider'

const market = ServiceProvider.market()

function state() {
  return {
    marketplace: {
      offers: []
    }
  }
}

const getters = {
  marketplaceActiveOffers(state) {
    return state.marketplace.offers
  }
}

const actions = {
  async refreshMarketplaceData(context) {
    let assets = await market.getAssetsOnTheMarket()
    context.commit('setMarketplaceOffers', assets)
  }
}

const mutations = {
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