<template>
  <div class="container">

    <div class="m-4">
      <label for="search" class="is-sr-only">
        Search by token name or address
      </label>
      <div class="mt-1 relative rounded-lg bg-level-2-dark">
        <input
          type="text"
          name="search"
          id="search"
          class="input"
          placeholder="Search by token name or address"
          v-model="searchQuery"
        />
      </div>
    </div>
      <div class="">
        <span class="bulma-arrow-mixin"></span>
            
      <div class="block is-flex is-justify-content-flex-end">
        <a role="button" @click="toggleView">
        <unicon  v-if="!isGrid" name="apps" :width="iconSize" :height="iconSize" fill="black" icon-style="solid"></unicon>
        <unicon  v-if="isGrid" name="list-ul" :width="iconSize" :height="iconSize" fill="black" icon-style="solid"></unicon>
      </a>
    </div>
    <ul v-if="!isGrid">
      <li v-for="asset in searchResults" :key="asset.id" class="px-8 py-8">
        <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
      </li>
    </ul>
    <div class="" v-if="isGrid">
      <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-flex-grow-3"   v-for="asset in searchResults" :key="asset.id">
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div><div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
       <div class="block p-3">
         <MarketListItem :asset="asset" />
       </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MarketListItem from "../views/market/MarketListItem.vue";

export default {
  name: "Marketplace",
  components: {
    MarketListItem,
  },
  data() {
    return {
      searchQuery: "",
      isGrid: false,
      iconSize: "32"
    };
  },
  computed: {
    ...mapGetters({
      assets: "marketplaceActiveAssets",
    }),
    searchResults() {
      if (this.searchQuery.length == 0) {
        return this.assets;
      }

      return this.assets.filter((item) => {
        return item.world.property.address
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions({
      refresh: "refreshMarketplaceData",
      syncWallet: "syncWallet",
    }),
    toggleView(){
      this.isGrid = !this.isGrid
    }
  },
  mounted() {
    this.refresh();
    this.syncWallet();
  },
  watch: {
    $route: "refresh",
  },
};
</script>