import {
  gql
} from "@apollo/client/core"

const ALL_ASSETS_QUERY = gql`
  query {
    deployedAssets {
      id
      mintedAsset {
        id
        dataURI
      }
      contract
      symbol
      numOfShares
      proposals {
        id
        creator
        dataURI
        votes {
          id
          voter
          voteType
          count
        }
        startTimestamp
        endTimestamp
      }
    }
  }
`
export {
  ALL_ASSETS_QUERY
}
