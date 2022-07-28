import { GraphQLAPIClient } from "../../data/network/graph/graphQLAPIClient"
import EthereumClient from "../../data/network/web3/ethereum/ethereumClient"
import DexRouterContract from "../../data/network/web3/contracts/dexRouterContract"
import FrabricERC20Contract from "../../data/network/web3/contracts/frabricERC20Contract"
import { FRABRIC_DEX_ORDERS_QUERY, THREAD_DEX_ORDERS_QUERY } from "../../data/network/graph/queries"
import { BigNumber } from 'ethers';
/**
 * DEX service
 * @param {EthereumClient} ethereumClient Ethereum client
 * @param {GraphQLAPIClient} graphQLAPIClient GraphQL API Client
 */
class DEX {
  constructor(
    ethereumClient,
    graphQLAPIClient,
  ) {
    this.ethereumClient = ethereumClient
    this.graphQLAPIClient = graphQLAPIClient
  }

  async getFrabricOrders(frabricId) {
    const marketOrders = await this.graphQLAPIClient
      .query(
        FRABRIC_DEX_ORDERS_QUERY,
        { frabricId },
        (mapper, response) => { return mapper.mapMarketOrders(response) }
      );
    console.log(marketOrders);
    return marketOrders;
  }

  async getThreadOrders(frabricId, threadId) {
    const marketOrders = await this.graphQLAPIClient
      .query(
        THREAD_DEX_ORDERS_QUERY,
        { frabricId, threadId },
        (mapper, response) => { return mapper.mapRawMarketOrders(response) }
      );
    
    return marketOrders.length > 0 ? marketOrders : [{
      id: 'awpiohjd290',
      type: "buy",
      price: 1.02,
      totalAmount: BigNumber.from("22409262781600000020"),
    }, {
      id: 'safasfaw',
      type: "sell",
      price: 1.24,
      totalAmount: BigNumber.from("1392627816000000200000"),
    }, {
      id: 'see9pfu',
      type: "buy",
      price: 1.01,
      totalAmount: BigNumber.from("2920492627816000000200"),
    }, {
      id: 'SF39uf',
      type: "sell",
      price: 1.32,
      totalAmount: BigNumber.from("770926278160000002000"),
    }];
  }

  async createBuyOrder(frabricAddress, trader, price, minimumAmount) {
    const frabricTokenContract = new FrabricERC20Contract(
      this.ethereumClient,
      frabricAddress,
    );

    const status = await frabricTokenContract.buy(trader, price, minimumAmount);
    return status;
  }

  async createSellOrder(frabricAddress, price, amount) {
    const frabricTokenContract = new FrabricERC20Contract(
      this.ethereumClient,
      frabricAddress,
    );

    const status = await frabricTokenContract.sell(price, amount);
    return status;
  }

}

export default DEX;
