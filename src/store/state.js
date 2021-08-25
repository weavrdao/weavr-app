import ServiceProvider from '../services/provider'
import WalletState from '../models/walletState'
import { MarketOrderType } from '../models/marketOrder'
import { bigIntMax, bigIntMin } from '../utils/common'

const wallet = ServiceProvider.wallet()
const market = ServiceProvider.market()

function state() {
  return {
    user: {
      wallet: WalletState
    },
    platform: {
      assets: []
    },
    interface: {
      alert: null
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

  // TODO: Quick implementation for testing, need something smarter than that
  bestAssetPrices(state) {
    var assetPriceMap = new Map()

    state.platform.assets
      .forEach(asset => { 
        let buyPrices = asset.marketOrders
          .filter(o => { return o.orderType == MarketOrderType.Buy })
          .map(o => { return o.price })
        let sellPrices = asset.marketOrders
          .filter(o => { return o.orderType == MarketOrderType.Sell })
          .map(o => { return o.price })

        const prices = {
          bid: bigIntMax(buyPrices),
          ask: bigIntMin(sellPrices)
        }

        assetPriceMap.set(asset.id, prices)
      })

      console.log('Best asset prices:')
      console.log(assetPriceMap)

      return assetPriceMap
  },

  marketplaceActiveAssets(state) {
    return state.platform.assets
  },

  activeAlert(state) {
    return state.interface.alert
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
  },

  dismissAlert(context) {
    context.commit('setAlert', null)
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
  },

  setAlert(state, alert) {
    state.interface.alert = alert
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}