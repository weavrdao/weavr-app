import ServiceProvider from "../services/provider";
import WalletState, { networks } from "../models/walletState";
import { MarketOrderType } from "../models/marketOrder";
import { bigIntMax, bigIntMin } from "../utils/common";
import { CONTRACTS } from "../services/constants";
import {
  whitelistState,
  whitelistGetters,
  whitelistActions,
  whitelistMutations,
} from "../whitelist";
import router from "../router/index";
import { Vote } from "../models/vote";

const wallet = ServiceProvider.wallet();
const market = ServiceProvider.market();
const dao = ServiceProvider.dao();
const dex = ServiceProvider.dex();
const whitelist = ServiceProvider.whitelist();

function state() {
  return {
    user: {
      wallet: WalletState,
    },
    platform: {
      assets: null,
      threads: null,
      needles: null,
      proposals: new Map(),
    },
    interface: {
      alert: null,
    },
    exchange: {
      orders: null,
      tokenAddress: null,
    },
    ...whitelistState(),
  };
}

/**
 * Note:
 * I haven"t spent too much time figuring out how to pass arguments to Vuex getters, only knowing that it"s not well-supported natively.
 * So for the first implementation whenever we need to get a subset of data for particular parameters —
 * — we return a Map from the corresponding getter, so that the consuming part can access the data with one key lookup operation.
 *
 * Pretty suboptimal, but at the time of writing this the bigger picture matters the most!
 */

const getters = {
  userWalletAddress(state) {
    return state.user.wallet.address;
  },

  userEthBalance(state) {
    return state.user.wallet.ethBalance;
  },

  walletError(state) {
    return state.user.wallet.error;
  },

  allAssets(state) {
    return state.platform.assets;
  },
  allThreads(state) {
    return state.platform.threads;
  },
  allNeedles(state) {
    return state.platform.threads;
  },
  threadById(state) {
    var assetMap = new Map();
    state.platform.threads?.forEach((asset) => {
      assetMap.set(asset.id, asset);
    });
    return assetMap;
  },
  needleById() {
    var assetMap = new Map();
    state.platform.needle?.forEach((asset) => {
      assetMap.set(asset.id, asset);
    });
    return assetMap;
  },
  marketplaceActiveAssets(state) {
    return state.platform.assets;
  },

  assetMarketOrders(state) {
    return state.exchange.orders;
  },

  ownedAssets(state) {
    return (
      state.platform.assets?.filter((asset) => {
        return asset.owners.get(state.user.wallet.address);
      }) || null
    );
  },

  // TODO: Quick implementation for testing, need something smarter than that
  bestAssetPrices(state) {
    var assetPriceMap = new Map();

    state.platform.assets?.forEach((asset) => {
      let buyPrices = asset.marketOrders
        .filter((o) => {
          return o.orderType == MarketOrderType.Buy;
        })
        .map((o) => {
          return o.price;
        });
      let sellPrices = asset.marketOrders
        .filter((o) => {
          return o.orderType == MarketOrderType.Sell;
        })
        .map((o) => {
          return o.price;
        });

      const prices = {
        bid: bigIntMax(buyPrices),
        ask: bigIntMin(sellPrices),
      };

      assetPriceMap.set(asset.id, prices);
    });

    console.log("Best asset prices:");
    console.log(assetPriceMap);

    return assetPriceMap;
  },
  ...whitelistGetters,
};

const actions = {
  async syncWallet(context, params) {
    console.log(params.wallet);
    const walletState = await wallet.getState(params.wallet);

    // if (walletState.error) {
    //   params.$toast.error(walletState.error.msg);
    // } else {
    //   console.log(walletState.chainId)
    //   if (![networks.arbitrum, networks.goerli].includes(walletState.chainId)) {
    //     params.$toast.show(
    //       "Wallet connected, but you seem to be on the wrong network! Switch to Arbitrum in your wallet."
    //     );
    //   } else {
    //     params.$toast.success("Wallet connected!");
    //   }
    // }

    const isWhitelisted = await whitelist.checkWhitelistedStatus(
      CONTRACTS.WEAVR,
      walletState.address
    );

    context.commit("setWhitelisted", isWhitelisted);
    context.commit("setWallet", walletState);
  },

  async refreshOwnedAssetsData(context) {
    let assets = await market.getAssetsOnTheMarket();
    context.commit("setAssets", assets);
  },

  async refreshMarketplaceData(context) {
    let assets = await market.getAssetsOnTheMarket();
    context.commit("setAssets", assets);
  },

  async refreshThreads(context) {
    let assets = await market.getThreads();
    context.commit("setThreads", assets);
  },
  async refreshNeedles(context) {
    let assets = await market.getNeedles();
    context.commit("setNeedles", assets);
  },

  async swapToAsset(context, params) {
    const asset = params.asset;
    const amount = params.amount;

    const price = context.getters.bestAssetPrices.get(asset.id).ask;
    params.$toast.info("Confirming transaction...", {
      duration: false,
    });

    const status = await market.buy(asset, amount, price);
    params.$toast.clear();
    console.log(params, params?.$toast);

    if (status) {
      params.$toast.success("Transaction confirmed!");
    } else {
      params.$toast.error("Transaction failed. See details in MetaMask.");
    }
  },

  async fetchOrders(context, params) {
    let orders = await dex.getFrabricOrders(params.assetId.toLowerCase());
    context.commit("setOrders", orders);
  },

  // Ignore, rewrite
  async fetchDexOrders(context, params) {
    const FRABRIC_ID = "0";
    let orders = await dex.getAssetOrders(
      FRABRIC_ID,
      params.assetId.toString()
    );
    const tokenAddress = await dao.getTokenAddress();
    context.commit("setTokenAddress", tokenAddress);
    context.commit("setOrders", orders);
  },

  async createBuyOrder(context, params) {
    const { assetId, price, amount } = params;

    await dex.createBuyOrder(assetId, price, amount);
  },

  async createSellOrder(context, params) {
    const { assetId, price, amount } = params;

    await dex.createSellOrder(assetId, price, amount);
  },

  ...whitelistActions(whitelist),
};

const mutations = {
  setWallet(state, wallet) {
    state.user.wallet = wallet;
    if (wallet.error) {
      console.log(wallet.error);
    }
  },

  setEthBalance(state, ethBalance) {
    state.user.wallet.ethBalance = ethBalance;
  },

  setAssets(state, assets) {
    state.platform.assets = assets;
  },
  setThreads(state, assets) {
    state.platform.threads = assets;
  },
  setNeedles(state, assets) {
    state.platform.needles = assets;
  },
  setOrders(state, orders) {
    state.exchange.orders = orders;
  },

  setAlert(state, alert) {
    state.interface.alert = alert;
  },

  setTokenAddress(state, tokenAddress) {
    state.exchange.tokenAddress = tokenAddress;
  },

  ...whitelistMutations,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
