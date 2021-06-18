<template>
  <div id="app" class="dark">
    <AppWrapper/>
  </div>
</template>

<script>
import AppWrapper from "./components/AppWrapper";

export default {
  name: 'App',
  components: {
    AppWrapper,
  }
}
</script>

<style>
/* .wrapper {
  min-height: 100vh;
  min-height: -webkit-fill-available;
} */

body {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}
</style>