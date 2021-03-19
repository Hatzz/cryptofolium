<template>
  <div class="flex flex-col">
    <div class="absolute flex">
      <a
        href="https://www.coingecko.com/en/api"
        target="_blank"
      ><img
          src="../assets/coingecko.svg"
          alt="Coingecko"
          class="w-12 p-2"
        ></a>

      <a
        href="https://github.com/Hatzz/cryptofolium/"
        target="_blank"
      >
        <img
          src="../assets/github.svg"
          alt="github"
          class="w-12 p-2"
        >
      </a>
    </div>
    <h1 class="text-4xl text-gray-50 py-12 text-center">${{ holdingsValue }}</h1>
    <Holding
      :openHolding="openHolding"
      @open="openHolding = $event"
      v-for="(holding, id) in holdings"
      :key="id"
      :id="id"
    />
    <router-link
      class="p-4 ml-auto"
      :to="{ name: 'Search' }"
    >
      <img
        src="../assets/plus.svg"
        class="bg-gray-800 p-3 w-11 rounded-full"
        alt=""
      >
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Holding from '@/components/Holding.vue'

export default {
  name: 'Home',
  components: {
    Holding
  },
  data () {
    return {
      openHolding: ''
    }
  },
  methods: {
    ...mapActions({
      updateHoldingMarkets: 'coins/updateHoldingMarkets',
      deleteHoldings: 'holdings/deleteHoldings'
    }),
    async update () {
      await this.updateHoldingMarkets()
    },
    removeHoldings () {
      this.deleteHoldings()
    }
  },
  computed: {
    ...mapState('coins', { coinList: 'coinList', coins: 'coins', markets: 'markets' }),
    ...mapState('holdings', { holdings: 'holdings' }),
    ...mapGetters('holdings', { holdingsValue: 'holdingsValue' })
  }
}
</script>

<style lang="postcss" scoped>
</style>
