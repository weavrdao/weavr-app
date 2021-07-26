<template>
  <div 
    class="
    w-full max-w-screen mx-auto
    "
  >
    <div class="mt-8 bg-level-1-light opacity-95 shadow-lg overflow-hidden rounded-lg">
      <div :class="`px-8 mt-8 ${ searchResults.length == 0 ? 'mb-8' : '' }`">
        <label for="search" class="sr-only">Search by token name or address</label>
        <div class="mt-1 relative rounded-lg bg-level-2-dark">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
            <svg class="mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input 
            type="text" 
            name="search" 
            id="search" 
            class="bg-level-2-dark border-0 focus:ring-action-blue focus:border-action-blue block w-full pl-9 sm:text-sm rounded-lg" 
            placeholder="Search by token name or address"
            v-model="searchQuery"
            >
        </div>
      </div>

      <ul>
        <li
          v-for="offer in searchResults" :key="offer.id"
          class="px-8 py-8"
        >
          <MarketListItem :offer="offer"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { marketOffers } from '../../data/mock/mockDataProvider'
import MarketListItem from '../views/market/MarketListItem.vue'

export default {
  name: 'Marketplace',
  components: {
    MarketListItem,
  },
  data() {
    return {
      offers: null,
      searchQuery: '',
    }
  },
  computed: {
    searchResults() {
      if (this.searchQuery.length == 0) { return this.offers }

      return this.offers
        .filter(item => { 
          return item.world.property.address.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
    }
  },
  methods: {
    pullData() {
      this.offers = marketOffers()
    },
  },
  created() {
    this.pullData()
  }
}
</script>