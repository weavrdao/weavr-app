import {
  gql
} from "@apollo/client/core";

const ALL_ASSETS_QUERY = gql`
  query {
    deployedAssets {
      id
      contract
      numOfShares
      address
      currentRent
      marketValue
      area
      bdCount
      baCount
      grossYieldPct
      yearBuilt
      coverImage
      description,
      proposals
    }
  }
`
export default {
  ALL_ASSETS_QUERY
}
