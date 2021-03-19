<template>
  <div :class="openHolding === id ? 'bg-gray-800' : ''">
    <div class="flex items-center p-2" @click="openMenu">
    <img class="w-8" :src="coins[id].image.large" :alt="coins[id].name + ' logo'" />
    <div class="flex-grow px-2 py-1">
      <div class="flex justify-between">
        <h3 class="font-semibold text-gray-50">{{ coins[id].name }}</h3>
        <h3 class="font-semibold text-gray-50">${{ (holdings[id] * markets[id].current_price).toFixed(1) }}</h3>
      </div>

      <div class="flex justify-between">
        <h4 class="font-light text-gray-100">${{ markets[id].current_price.toFixed(4) }}</h4>
        <h4 class="font-light text-gray-100 uppercase">{{ holdings[id] }} {{ coins[id].symbol }}</h4>
      </div>
    </div>

    <div class="flex flex-col py-1">
      <p v-if="markets[id].price_change_percentage_24h !== null" :class="'font-semibold ' + percentageChangeColor">{{ markets[id].price_change_percentage_24h.toFixed(1) }}%</p>
      <p class="font-light text-gray-100">
        {{
          (
            ((holdings[id] * markets[id].current_price) / holdingsValue) *
            100
          ).toFixed(1)
        }}%
      </p>
    </div>
    </div>
    <div v-if="openHolding === id" class="flex flex-col" >
      <input v-if="edit" type="number" v-model="holding" class="flex-grow p-1 bg-gray-700 rounded-md text-gray-50 mx-4" />
      <div class="flex justify-between p-4 items-center">
        <button class="bg-blue-500 btn text-gray-50" @click="edit = true" v-if="!edit">Edit</button>
        <div v-if="edit">
          <button class="btn bg-green-500 text-gray-50 mr-4" @click="save">Save</button>
          <button class="btn bg-gray-500 text-gray-200" @click="cancelEdit">Cancel</button>
        </div>
        <button @click="deleteHolding(id)">
          <img src="../assets/trash.svg" alt="delete holding">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Holding',
  data () {
    return {
      edit: false,
      holding: undefined
    }
  },
  props: {
    id: String,
    openHolding: String
  },
  methods: {
    ...mapActions({ deleteHolding: 'holdings/deleteHolding', updateHolding: 'holdings/updateHolding' }),
    openMenu () {
      if (this.openHolding === this.id) {
        this.$emit('open', '')
      } else {
        this.edit = false
        this.$emit('open', this.id)
      }
    },
    cancelEdit () {
      this.holding = this.holdings[this.id]
      this.edit = false
    },
    save () {
      this.updateHolding({ id: this.id, amount: Number(this.holding) })
      this.edit = false
      this.menu = false
    }
  },
  mounted () {
    this.holding = this.holdings[this.id]
  },
  computed: {
    ...mapState('coins', { coins: 'coins', markets: 'markets' }),
    ...mapState('holdings', { holdings: 'holdings' }),
    ...mapGetters('holdings', { holdingsValue: 'holdingsValue' }),
    percentageChangeColor () {
      const red = 'text-red-400'
      const green = 'text-green-400'
      const gray = 'text-gray-400'
      const percentage = this.markets[this.id].price_change_percentage_24h
      if (percentage < 0) {
        return red
      } else if (percentage > 0) {
        return green
      } else {
        return gray
      }
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
