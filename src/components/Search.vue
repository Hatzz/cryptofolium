<template>
  <div>
    <div class="p-4 flex">
      <input type="text" v-model="search" @input="searchCoins" class="flex-grow p-1 bg-gray-800 rounded-md text-gray-50"/>
      <router-link class="ml-2 flex" :to="{ name: 'Home' }">
        <img class="w-4" src="../assets/x.svg" alt="close">
      </router-link>
    </div>
    <div v-for="coin in searchedCoins" :key="coin" @click="handleClick(coin)" class="flex items-center p-2">
      <img class="w-8" :src="markets[coin].image" :alt="markets[coin].name">
      <div class="flex-grow px-2 py-1">
        <div class="flex justify-between">
          <h3 class="font-semibold text-gray-50">{{ markets[coin].name }}</h3>
          <h3 class="font-semibold text-gray-50">#{{ markets[coin].market_cap_rank }}</h3>
        </div>
        <div class="flex justify-between">
          <h4 class="font-light text-gray-100 uppercase">{{ markets[coin].symbol }}</h4>
          <h4 class="font-light text-gray-100">${{ markets[coin].current_price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import levenshtein from 'js-levenshtein'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      search: '',
      searchedCoins: []
    }
  },
  methods: {
    ...mapActions({ getMarkets: 'coins/getMarkets', getCoin: 'coins/getCoin' }),
    largeToSmallImage (url) {
      return url.replace('large', 'thumb_2x')
    },
    async handleClick (coinId) {
      await this.getCoin(coinId)
      this.$emit('select', coinId)
    },
    async searchCoins () {
      if (this.search.length >= 3) {
        clearTimeout(this.timer)
        this.timer = setTimeout(async () => {
          const coinList = this.coinList
          const sortedList = coinList.sort(
            (a, b) =>
              levenshtein(a.name.toLowerCase(), this.search.toLowerCase()) -
              levenshtein(b.name.toLowerCase(), this.search.toLowerCase())
          )
          const sliced = sortedList.slice(0, 9)
          const ids = sliced.map(coin => coin.id)
          await this.getMarkets(ids)
          ids.sort(
            (a, b) => {
              if ((this.markets[a].market_cap_rank === null && this.markets[b].market_cap_rank) || (this.markets[a].market_cap_rank === null && this.markets[b].market_cap_rank === null)) return 1
              return this.markets[a].market_cap_rank - this.markets[b].market_cap_rank
            })
          this.searchedCoins = ids
        }, 3000)
      } else {
        this.searchedCoins = []
      }
    }
  },
  computed: {
    ...mapState('coins', { coinList: 'coinList', markets: 'markets' })
  }
}
</script>

<style lang="scss" scoped>
</style>
