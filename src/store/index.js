import Vuex from 'vuex'
import Vue from 'vue'
import state from "./state";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    state
  }
})