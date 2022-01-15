<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <div class="p-1 m-2">
          <div class="m-2">
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
          <Accordion summary="Overview" extraClasses="mt-4" :open="true">
            <dl>
              <dt class="help">
                <strong>Total value</strong>
              </dt>
              <dd>$ 6969.69</dd>
            </dl>
          </Accordion>
          <Accordion summary="Graph">
            <img class="image" src="https://via.placeholder.com/500" />
          </Accordion>
        </div>
      </div>
      <ul class="column is-two-fifths">
        <li class="p-3 m-2">
          <AssetListItemPlaceholder />
        </li>
        <li v-for="asset in searchResults" :key="asset.id" class="p-1 m-3">
          <AssetListItem :asset="asset" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AssetListItem from "../views/assets/AssetListItem.vue";
import AssetListItemPlaceholder from "../views/assets/AssetListItemPlaceholder.vue";
import Accordion from "../utils/Accordion.vue";

export default {
  name: "MyAssets",
  components: {
    AssetListItem,
    AssetListItemPlaceholder,
    Accordion,
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