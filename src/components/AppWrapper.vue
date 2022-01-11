<template>
  <div 
  id="app" 
  class="h-screen overflow-hidden flex items-start justify-between">
    <Background/>
    <AppBody/>
  </div>
</template>

<script>
import Background from "./Background.vue"
import AppBody from "./AppBody"

export default {
  name: "AppWrapper",
  components: {
    Background,
    AppBody,
  }
}
</script>