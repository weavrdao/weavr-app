<template>
  <section aria-labelledby="asset-title" class="panel p-4">
    <div>
      <div class="flex flex-col items-center justify-center p-8">
        <div class="text-md text-foam text-centet">
          Your Next Asset Will Be Here
        </div>
        <Button
          label="Go to Marketplace"
          customClasses="mt-4"
          @click="openMarketplace"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../common/Button.vue";

export default {
  name: "AssetListItemPlaceholder",
  components: {
    Button,
  },
  methods: {
    openMarketplace() {
      this.$router.push("/market");
    },
  },
};
</script>