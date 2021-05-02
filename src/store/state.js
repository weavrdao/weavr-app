function state() {
  return {
    connection: {
      address: undefined
    }
  }
}

const getters = {
  connection: state => state.connection
}

import * as Web3Account from "../web3/web3Account"

const actions = {
  async fetchAccount({ commit }) {
    const account = await Web3Account.getAccount()
    commit('setConnection', { address: account })
  },
  async establishConnection({ commit }) {
    const account = await Web3Account.connectToAccount()
    commit('setConnection', { address: account })
  }
}

const mutations = {
  setConnection: (state, connection) => { 
    state.connection = connection
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}