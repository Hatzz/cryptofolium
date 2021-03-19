import Vue from 'vue'
import Vuex from 'vuex'
import coins from './modules/coins.js'
import holdings from './modules/holdings.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coins,
    holdings
  }
})
