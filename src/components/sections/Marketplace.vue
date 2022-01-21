<template>
  <div class="container">
    <div class="m-4">
      <label for="search" class="is-sr-only"> Filter by address </label>
      <div class="mt-1 relative rounded-lg bg-level-2-dark">
        <input
          type="text"
          name="search"
          id="search"
          class="input"
          placeholder="Filter by address..."
          v-model="searchQuery"
        />
      </div>
    </div>
    <ul>
      <li v-for="asset in searchResults" :key="asset.id" class="px-8 py-8">
        <MarketListItem :asset="asset" />
      </li>
    </ul>
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
        console.log(item);
        return item.address
          .toLowerCase()
          .includes(this.searchQuery.trim().toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions({
      refresh: "refreshMarketplaceData",
      syncWallet: "syncWallet",
    }),
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