import { defaults } from "lodash"

class Erc20 {
  constructor(
    name,
    symbol,
    decimals,
    supply,
    tradeToken,
    balances
  ) {
    this.name = name
    this.symbol = symbol
    this.decimals = decimals
    this.supply = supply
    this.tradeToken = tradeToken
    this.balances = balances
  }
}

/*

        name
        symbol
        decimals
        supply
        tradeToken
      }
*/

export default Erc20