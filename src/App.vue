<template>
  <div id="app" class="app-main">
    <!-- <img class="logo" src="./assets/logo/compact/frabric_logo_compact-white.png" alt="Frabric"> -->
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

<style scoped>
.app-main {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.logo {
  margin-top: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: auto;
  z-index: 999;
}
</style>
