<template>
  <div>
    <h1 class="text-4xl text-center text-gray-50" v-if="!selectedCoin">New Holding</h1>
    <NewHolding v-if="selectedCoin" :coinId="selectedCoin" @add="selectedCoin = undefined"/>
    <Search @select="selectedCoin = $event"/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import NewHolding from '@/components/NewHolding.vue'

export default {
  name: 'SearchCoins',
  components: {
    Search,
    NewHolding
  },
  data () {
    return {
      selectedCoin: undefined
    }
  }
}
</script>
