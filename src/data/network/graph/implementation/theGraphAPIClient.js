import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client/core"
import { GraphQLAPIClient } from '../graphQLAPIClient'

const client = new ApolloClient({
  uri: process.env.THE_GRAPH_API_URL,
  cache: new InMemoryCache()
})

class TheGraphAPIClient extends GraphQLAPIClient {
  constructor() {
    super()
    this.client = client
  }

  async query(query, vars = {}) {
    return new Promise((resolve) => {
      this.client
      .query({
        query: query,
        variables: vars
      })
      .then(data => resolve(data))
      .catch(err => { 
        // TODO: Propagate error
        console.log("Error fetching data: ", err) 
      })
    })
  }
}

export default TheGraphAPIClient
