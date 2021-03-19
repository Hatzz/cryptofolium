<template>
  <div class="flex flex-col">
    <div class="flex justify-center items-center p-4">
      <img class="w-16" :src="coins[coinId].image.large" :alt="coins[coinId].name + ' logo'">
      <h1 class="text-4xl text-gray-50">{{ coins[coinId].name }}</h1>
    </div>
    <input class="mx-4 flex-grow p-1 bg-gray-800 rounded-md text-gray-50 placeholder-gray-500" type="number" placeholder="Holding amount" v-model="coinAmount" />
    <button class="text-gray-50 bg-green-500 rounded-md py-2 mx-4 mt-4" @click="newHolding">Add coin</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NewHolding',
  props: {
    coinId: String
  },
  data () {
    return {
      coinAmount: undefined
    }
  },
  computed: {
    ...mapState('coins', { coins: 'coins', markets: 'markets' })
  },
  methods: {
    ...mapActions({ addHolding: 'holdings/addHolding' }),
    async newHolding () {
      await this.addHolding({ id: this.coinId, amount: Number(this.coinAmount) })
      this.$emit('add')
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="postcss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
