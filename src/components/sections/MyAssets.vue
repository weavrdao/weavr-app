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

    <ul>
      <li v-if="searchResults.length === 0" class="p-3 m-3">
        <AssetListItemPlaceholder />
      </li>
      <li v-for="asset in searchResults" :key="asset.id" class="p-3 m-3">
        <AssetListItem :asset="asset" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AssetListItem from "../views/assets/AssetListItem.vue";
import AssetListItemPlaceholder from "../views/assets/AssetListItemPlaceholder.vue";

export default {
  name: "MyAssets",
  components: {
    AssetListItem,
    AssetListItemPlaceholder,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapGetters({
      assets: "ownedAssets",
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
      refresh: "refreshOwnedAssetsData",
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