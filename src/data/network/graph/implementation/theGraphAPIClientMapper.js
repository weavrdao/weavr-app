import GraphQLAPIMapper from "../graphQLAPIMapper"
import Asset from "../../../../models/asset"
import Thread from "@/models/thread"
import Needle from "@/models/needle"
import Erc20 from "@/models/erc20"
import Proposal from "../../../../models/proposal"
import { Vote } from "../../../../models/vote"
import { MarketOrder } from "../../../../models/marketOrder"
import { BigNumber, utils } from "ethers"

class TheGraphAPIMapper extends GraphQLAPIMapper {
  mapAssets(rawAssets) {
    if (!rawAssets || rawAssets.length < 1) {
      return []
    }

    return rawAssets
      .map(rawAsset => {
        const proposals = this.mapProposals(rawAsset.proposals)

        var ownersMap = new Map()
        rawAsset.owners
          .forEach(ownership => {
            ownersMap.set(ownership.owner, ownership.shares)
          })

        let marketOrders = this.mapMarketOrders(rawAsset.marketOrders)

        return new Asset(
          rawAsset.id,
          rawAsset.mintedAsset.dataURI,
          rawAsset.contract,
          rawAsset.symbol,
          rawAsset.numOfShares,
          ownersMap,
          marketOrders,
        )
      })
  }

  mapRawThreads(rawThreads) {
    if (!rawThreads || rawThreads.length < 1) {
      return []
    }
    return rawThreads
      .map(rawThread => {
        console.log(rawThread)
        const erc20 = new Erc20(
          rawThread.erc20.name,
          rawThread.erc20.symbol,
          rawThread.erc20.decimals,
          rawThread.erc20.supply,
          rawThread.erc20.tradeToken,
          rawThread.erc20.balances
        )
        /**
         * id,
          variant,
          governor,
          erc20,
          descriptor,
         */
        
        return new Thread(
          rawThread.id,
          rawThread.variant,
          rawThread.governor,
          erc20,
          rawThread.descriptor
        )
      })
  }

  mapRawNeedles(rawNeedles) {
    if (!rawNeedles || rawNeedles.length < 1) {
      return []
    }
    console.log(rawNeedles)
    return rawNeedles
      .map(
        rawNeedle => {
          console.log(rawNeedle)

          return new Needle(
            rawNeedle.id,
            rawNeedle.state,
            rawNeedle.amountDeposited,
            rawNeedle.target,
            rawNeedle.thread,
            rawNeedle.deposits
          )
        }
      )
  }

  mapRawMarketOrders(rawOrders) {
    if (!rawOrders || rawOrders.data) return [];

    const orders = rawOrders.frabrics[0].threads; // TODO(bill): Add full path here

    // Questionable way of getting test data but will do for now
    return this.mapMarketOrders(orders)
  }

  mapMarketOrders(rawMarketOrders) {
    if (!rawMarketOrders || rawMarketOrders.length < 1) {
      return []
    }

    return rawMarketOrders
      .map(rawMarketOrder => {
        return new MarketOrder(
          rawMarketOrder.id,
          rawMarketOrder.type,
          rawMarketOrder.price,
          rawMarketOrder.totalAmount
        )
      })
  }

  mapProposals(rawThreads) {
    if (!rawThreads || rawThreads.length < 1) {
      return []
    }

    return rawThreads
      .map(rawThread => {
        const votes = this.mapVotes(rawThread.votes)

        return new Proposal(
          rawThread.id,
          rawThread.creator,
          rawThread.dataURI,
          rawThread.startTimestamp,
          rawThread.endTimestamp,
          votes
        )
      })
  }
  
  mapRawErc20(rawErc20) {
    if (!rawErc20 || rawErc20.length < 1) {
      return []
    }
    console.log("ERC20\n", rawErc20) 
        return new Erc20(
          rawErc20.name,
          rawErc20.symbol,
          rawErc20.decimals,
          rawErc20.supply,
          rawErc20.tradeToken
        )
  }

  mapVotes(rawVotes) {
    if (!rawVotes || rawVotes.length < 1) {
      return []
    }

    return rawVotes
      .map(rawVote => {
        return new Vote(
          rawVote.id,
          rawVote.voter,
          rawVote.voteType,
          rawVote.count
        )
      }
    )
  }
}

export default TheGraphAPIMapper