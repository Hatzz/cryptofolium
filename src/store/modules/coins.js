import CoinGecko from 'coingecko-api'

const CoinGeckoClient = new CoinGecko()

const state = {
  coinList: [],
  coins: {},
  markets: {}
}

function setLocalStorage (key, value) {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json)
}

function getLocalStorage (key) {
  const json = localStorage.getItem(key)
  return JSON.parse(json)
}

const mutations = {
  SET_COIN_LIST (state, coinList) {
    state.coinList = coinList
    setLocalStorage('coinList', state.coinList)
  },
  SET_COIN (state, coin) {
    state.coins = { ...state.coins, [coin.id]: coin }
    setLocalStorage('coins', state.coins)
  },
  SET_COINS (state, coins) {
    state.coins = { ...coins }
  },
  SET_MARKET (state, market) {
    state.markets = { ...state.markets, [market.id]: market }
    setLocalStorage('markets', state.markets)
  },
  SET_MARKETS (state, markets) {
    state.markets = { ...state.markets, ...markets }
    setLocalStorage('markets', state.markets)
  }
}

const getters = {

}

const actions = {
  async getCoinList (context) {
    const coinList = (await CoinGeckoClient.coins.list()).data
    context.commit('SET_COIN_LIST', coinList)
  },
  async getCoin (context, id) {
    if (!context.state.coins[id]) {
      const data = (await CoinGeckoClient.coins.fetch(id, { tickers: false, market_data: false, community_data: false, developer_data: false, localization: false })).data
      const coin = {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image,
        rank: data.coingecko_rank
      }
      context.dispatch('getMarket', id)
      context.commit('SET_COIN', coin)
    }
  },
  async updateHoldingMarkets (context) {
    const ids = Object.keys(context.rootState.holdings.holdings)
    await context.dispatch('getMarkets', ids)
  },
  async updateCoinMarkets (context) {
    const ids = Object.keys(context.state.coins)
    await context.dispatch('getMarkets', ids)
  },
  async getMarkets (context, ids) {
    const markets = (await CoinGeckoClient.coins.markets({ ids })).data
    const marketsObject = markets.reduce((obj, market) => { obj[market.id] = market; return obj }, {})
    context.commit('SET_MARKETS', marketsObject)
  },
  async getMarket (context, id) {
    const market = (await CoinGeckoClient.coins.markets({ id })).data[0]
    context.commit('SET_MARKET', market)
  },
  getCoinsFromLocalStorage (context) {
    const coins = getLocalStorage('coins')
    context.commit('SET_COINS', coins)
  },
  getMarketsFromLocalStorage (context) {
    const markets = getLocalStorage('markets')
    context.commit('SET_MARKETS', markets)
  },
  getCoinListFromLocalStorage (context) {
    const coinList = getLocalStorage('coinList')
    context.commit('SET_COIN_LIST', coinList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
