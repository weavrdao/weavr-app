<template>
  <div id="app" class="app-wrapper" :style="style">
    <Background/>
    <AppBody/>
  </div>
</template>

<script>
import Background from "./Background"
import AppBody from "./AppBody"

export default {
  name: 'AppWrapper',
  components: {
    Background,
    AppBody
  },
  computed: {
    style() {
      var style = {}

      return style
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 120px;
  align-items: center;
  flex: 1;
  z-index: 1;
  padding: 16px;
  padding-top: 6rem;
}
</style>