<template>
<div>
    <div class="needles-container mt-5">
      <div v-for="property in this.properties" :key="property.id">
        <ComingSoonListItem :property="property" />
      </div>
    </div>
</div>
</template>
<script>
import ComingSoonListItem from "./ComingSoonListItem.vue";
import properties from "./properties";

export default {
  name: "ComingSoon",
  components: {
    ComingSoonListItem,
  },
  data() {
    return {
      properties,
    }
  }
}
</script>
<style scoped lang="scss">
</style>