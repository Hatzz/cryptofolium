import Vue from 'vue'

const state = {
  holdings: {}
}

function setLocalStorage (holdings) {
  const json = JSON.stringify(holdings)
  localStorage.setItem('holdings', json)
}

function getLocalStorage () {
  const json = localStorage.getItem('holdings')
  return JSON.parse(json)
}

const mutations = {
  SET_HOLDING (state, holding) {
    state.holdings = { ...state.holdings, [holding.id]: holding.amount }
    setLocalStorage(state.holdings)
  },
  DELETE_HOLDING (state, id) {
    Vue.delete(state.holdings, id)
    setLocalStorage(state.holdings)
  },
  SET_HOLDINGS (state, holdings) {
    state.holdings = { ...holdings }
  },
  DELETE_HOLDINGS (state) {
    Vue.set(state, 'holdings', {})
    setLocalStorage(state.holdings)
  }
}

const getters = {
  holdingsValue (state, getters, rootState) {
    return Object.keys(state.holdings).reduce((a, id) => rootState.coins.markets[id] ? a + (state.holdings[id] * rootState.coins.markets[id].current_price) : 0, 0).toFixed(0)
  }
}

const actions = {
  addHolding (context, holding) {
    context.commit('SET_HOLDING', holding)
  },
  updateHolding (context, holding) {
    context.commit('SET_HOLDING', holding)
  },
  deleteHolding (context, holding) {
    context.commit('DELETE_HOLDING', holding)
  },
  deleteHoldings (context) {
    context.commit('DELETE_HOLDINGS')
  },
  getHoldingsFromLocalStorage (context) {
    const holdings = getLocalStorage()
    context.commit('SET_HOLDINGS', holdings)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
