<template>
  <div 
  id="app" 
  class="h-screen overflow-hidden flex items-start justify-between" 
  :style="style">
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
  },
  methods: {
    setViewHeight: function() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  mounted: function() {
    this.setViewHeight()
    window.addEventListener('resize', () => {
      this.setViewHeight()
    })
  },
  computed: {
    style() {
      var style = {}

      return style
    }
  }
}
</script>