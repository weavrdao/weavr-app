import ServiceProvider from "../services/provider";
import WalletState, { networks } from "../models/walletState";
import { MarketOrderType } from "../models/marketOrder";
import { bigIntMax, bigIntMin } from "../utils/common";
import { CONTRACTS } from "../services/constants";
import { WALLET_STATE_COOKIE_KEY } from "./constants";
import { hexToDecimals } from "../data/helpers/numbers";
import {
  whitelistState,
  whitelistGetters,
  whitelistActions,
  whitelistMutations,
  WHITELIST_COOKIES_KEY,
  setCookie,
  getCookie,
} from "../whitelist";
import { ethers } from "ethers";
import { crowfundStates } from "./helpers";

const wallet = ServiceProvider.wallet();
const market = ServiceProvider.market();
const dao = ServiceProvider.dao();
const dex = ServiceProvider.dex();
const whitelist = ServiceProvider.whitelist();
const crowdfund = ServiceProvider.crowdfund();
const token = ServiceProvider.token();

function state() {
  console.log(getCookie(WALLET_STATE_COOKIE_KEY) || {});
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
      crowdfundState: null,
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

  userTokenBalance(state) {
    return state.user.wallet.tokenBalance;
  },

  assetTokenSymbol(state) {
    return state.user.wallet.tokenSymbol;
  },

  userTradeTokenBalance(state) {
    return state.exchange.tradeTokenBalance;
  },

  userTradeTokenAllowance(state) {
    return state.exchange.tradeTokenAllowance;
  },

  userCrowdfundTokenAllowance(state) {
    return state.exchange.crowdfundTokenBalance;
  },

  crowdfundState(state) {
    return state.exchange.crowdfundState;
  },

  allAssets(state) {
    return state.platform.assets;
  },
  allThreads(state) {
    return state.platform.threads;
  },
  allNeedles(state) {
    return state.platform.needles;
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
    let { $toast } = params;
    let walletState = await wallet.getState(params.wallet);
    const symbol = await token.getTokenSymbol(CONTRACTS.FRBC);
    const balance = await token.getTokenBalance(
      CONTRACTS.FRBC,
      walletState.address
    );
    

    if (walletState.error) {
      params.$toast.error(walletState.error.msg);
    } else {
      if (![networks.arbitrum, networks.goerli].includes(walletState.chainId)) {
        params.$toast.show(
          "Wallet connected, but you seem to be on the wrong network! Switch to Arbitrum in your wallet."
        );
      } else {
        params.$toast.success("Wallet connected!");
      }
    }

    const isWhitelisted = await whitelist.checkWhitelistedStatus(
      CONTRACTS.WEAVR,
      walletState.address
    );

    // const walletStateAsJson = JSON.stringify(walletState);

    setCookie(WHITELIST_COOKIES_KEY, isWhitelisted, 30);
    // setCookie(WALLET_STATE_COOKIE_KEY, walletStateAsJson);

    walletState = new WalletState(
      walletState.address,
      walletState.ethBalance,
      ethers.utils.formatEther(balance).toString(),
      symbol,
      wallet.getChainId()
    );

    context.commit("setWhitelisted", isWhitelisted);
    context.commit("setWallet", walletState);

    $toast?.clear();
    $toast?.success("Wallet fully synced", {
      duration: 1000,
      position: "top",
    });
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
    const needles = await market.getNeedles();
    console.log(needles);
    context.commit("setNeedles", needles);
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

  async createBuyOrder(_, params) {
    const { assetId, price, amount } = params;

    await dex.createBuyOrder(assetId, price, amount);
  },

  async createSellOrder(_, params) {
    const { assetId, price, amount } = params;

    await dex.createSellOrder(assetId, price, amount);
  },

  async redeem(context, params) {
    const { crowdfundAddress } = params;
    const userAddress = context.getters.userWalletAddress;
    console.log(userAddress);
    await crowdfund.redeem(crowdfundAddress, userAddress);
  },

  async deposit(context, params) {
    const { crowdfundAddress, amount } = params;
    console.log(amount);
    const parsedAmount = ethers.utils.parseUnits(String(amount), 6);
    console.log(parsedAmount);

    const status = await crowdfund.deposit(crowdfundAddress, parsedAmount);
    return status;
  },

  async withdraw(context, params) {
    const { crowdfundAddress, amount } = params;
    console.log(amount);
    const parsedAmount = ethers.utils.parseUnits(String(amount), 6);
    console.log(parsedAmount);

    const status = await crowdfund.withdraw(crowdfundAddress, parsedAmount);
    return status;
  },
 
  async approveTradeToken(context, params) {
    const { assetId } = params;
    await crowdfund.approveTradeToken(assetId);
    context.dispatch("fetchNeedleTokenData", { assetId: params.assetId })
  },

  async fetchNeedleTokenData(context, params) {
    const { assetId } = params;
    const walletState = await wallet.getState();

    const address = context.userWalletAddress || walletState.address;

    if(!address) {
      console.error("No wallet connected, cannot get trade token allowance");
      return;
    }

    const allowance = await crowdfund.getAllowance(assetId, address);
    const state = await crowdfund.getState(assetId);
    const tradeTokenBalance = await crowdfund.getBalance(assetId, address);
    const crowdfundTokenBalance = await crowdfund.getCrowdfundBalance(assetId, address);

    context.commit(
      "setCrowdfundState",
      crowfundStates[String(state)] || null,
    )

    if(allowance) {
      context.commit(
        "setTradeTokenAllowance",
        hexToDecimals(allowance, 6),
      );
    }

    if(tradeTokenBalance) {
      context.commit(
        "setTradeTokenBalance",
        hexToDecimals(tradeTokenBalance, 6),
      );
    }

    if(crowdfundTokenBalance) {
      context.commit(
        "setCrowdfundTokenBalance",
        hexToDecimals(crowdfundTokenBalance, 6)
      );
    }
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
  setNeedles(state, needles) {
    state.platform.needles = needles;
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

  setTradeTokenAllowance(state, allowance) {
    state.exchange.tradeTokenAllowance = allowance;
  },

  setTradeTokenBalance(state, balance) {
    state.exchange.tradeTokenBalance = balance;
  },

  setCrowdfundTokenBalance(state, balance) {
    state.exchange.crowdfundTokenBalance = balance;
  },

  setCrowdfundState(state, crowdfundState) {
    state.exchange.crowdfundState = crowdfundState;
  },

  setTokenBalance(state, balance) {
    state.user.wallet.tokenBalance = balance;
  },

  setTokenSymbol(state, symbol) {
    state.user.wallet.tokenSymbol = symbol;
  },

  ...whitelistMutations,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
