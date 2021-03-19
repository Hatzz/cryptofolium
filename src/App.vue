<template>
  <div
    id="app"
    class="max-w-2xl mx-auto"
  >
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async beforeMount () {
    this.getCoinListFromLocalStorage()
    if (!this.$store.state.coins.coinList) await this.getCoinList()
    this.getCoinsFromLocalStorage()
    await this.updateCoinMarkets()
    this.getHoldingsFromLocalStorage()
  },
  methods: {
    ...mapActions({
      getCoinListFromLocalStorage: 'coins/getCoinListFromLocalStorage',
      getHoldingsFromLocalStorage: 'holdings/getHoldingsFromLocalStorage',
      getCoinsFromLocalStorage: 'coins/getCoinsFromLocalStorage',
      updateCoinMarkets: 'coins/updateCoinMarkets',
      getCoinList: 'coins/getCoinList'
    })
  }
}
</script>

<style>
</style>
