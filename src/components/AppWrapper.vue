<template>
  <div id="app" class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative flex items-start justify-between" :style="style">
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