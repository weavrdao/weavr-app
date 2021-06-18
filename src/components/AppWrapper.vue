<template>
  <div 
  id="app" 
  class="wrapper h-screen overflow-hidden flex items-start justify-between">
    <!-- <Background/> -->
    <SideNavigation/>
    <AppBody/>
  </div>
</template>

<script>
// import Background from "./Background"
import SideNavigation from "./layout/SideNavigation"
import AppBody from "./AppBody"

export default {
  name: 'AppWrapper',
  components: {
    // Background,
    SideNavigation,
    AppBody
  }
}
</script>

<style>
@supports (-webkit-touch-callout: none) {
  .wrapper {
    height: -webkit-fill-available;
  }
}
</style>