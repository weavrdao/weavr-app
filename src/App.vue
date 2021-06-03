<template>
  <div id="app" class="dark">
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