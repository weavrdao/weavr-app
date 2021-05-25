<template>
  <div class="app-background" :style="style">
  </div>
</template>

<script>
import { Colors } from "../theme/index"

export default {
  name: 'Background',
  computed: {
    style() {
      var style = {}

      style['background'] = "radial-gradient(50% 50% at 50% 50%, " + Colors.primary1 + " 0%, " + Colors.primary3 + " 100%)"

      return style
    }
  }
}
</script>

<style scoped>
.app-background {
  position: fixed;
  top: 0;
  left: calc(-100vw / 2);
  right: 0;
  pointer-events: none;
  /* max-width: 100vw !important; */
  width: 200vw;
  height: 200vh;
  mix-blend-mode: color;
  transform: translateY(-100vh);
  will-change: background;
  transition: background 450ms ease;
}
</style>