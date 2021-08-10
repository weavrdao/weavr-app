import {
  ALL_ASSETS_QUERY
} from '../queries'

/**
 * Abstract GraphQL API client
 */
class GraphQLAPIClient {
  /**
   * Query ¯\_(ツ)_/¯ 
   * @param {any} query Query doc
   * @param {Array} vars Query variables
   */
  async query(query, vars = {}) { }
}

export default { 
  GraphQLAPIClient,
  ALL_ASSETS_QUERY
}
