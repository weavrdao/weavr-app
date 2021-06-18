<template>
  <div 
  id="app" 
  class="wrapper overflow-hidden flex items-start justify-between">
    <SideNavigation/>
    <AppBody/>
  </div>
</template>

<script>
import SideNavigation from "./layout/SideNavigation"
import AppBody from "./AppBody"

export default {
  name: 'AppWrapper',
  components: {
    SideNavigation,
    AppBody
  }
}
</script>

<style>
.wrapper {
  height: 100%;
}
</style>