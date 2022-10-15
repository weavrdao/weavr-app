<template>
  <div class="has-text-white has-radius-lg">
    <button v-on:click="test">TEST</button>
    <div class="needles-container">
      <div v-for="needle in filteredNeedles" :key="needle.id" class="block p-3">
        <NeedleMarketListItem :needle="needle" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NeedleMarketListItem from "./NeedleMarketListItem.vue"
export default {
  name: "NeedleMarketplace",
  components: {
    NeedleMarketListItem,
  },
  computed: {
    ...mapGetters({
      needles: "allNeedles",
    }),
    filteredNeedles: function() { return this.needles.filter((needle) => !!needle.imageHashes) }
  },
  methods: {
    ...mapActions({
      getNeedles: "refreshNeedles",
      syncWallet: "syncWallet",
    }),
    test() {
      console.log(this.needles);
    }
  },
  mounted() {
    this.getNeedles();
    this.syncWallet({ $toast: this.$toast });
  },
  watch: {
    $route: "refresh",
  },
};
</script>

