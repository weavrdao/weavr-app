<template>
  <div 
    id="app" 
    class="
      dark
      text-foam text-opacity-75
    "
  >
    <AppWrapper/>
  </div>
</template>

<script>
import AppWrapper from "./components/AppWrapper";

export default {
  name: 'The Frabric',
  components: {
    AppWrapper,
  }
}
</script>