<template>
  <div 
  id="app" 
  class="h-screen overflow-hidden flex items-start justify-between">
    <AppBody/>
  </div>
</template>

<script>
import AppBody from "./AppBody"

export default {
  name: 'AppWrapper',
  components: {
    AppBody
  }
}
</script>