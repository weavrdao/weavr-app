<template>
  <div id="app" class="app-wrapper" :style="style">
    <Background/>
    <SideNavigation/>
    <AppBody/>
  </div>
</template>

<script>
import Background from "./Background"
import SideNavigation from "./layout/SideNavigation"
import AppBody from "./AppBody"

export default {
  name: 'AppWrapper',
  components: {
    Background,
    SideNavigation,
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
  display: block;
  width: 100%;
  align-items: left;
  flex: 1;
  z-index: 1;
}
</style>