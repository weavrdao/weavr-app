<template>
  <div class="body-wrapper" :style="style">
    <b-container>
      <b-row align="center" class="header-row">
        <b-col>
          <h1>Component Demo</h1>
          <p>No, I would never steal any CSS from Uniswap!</p>
        </b-col>
      </b-row>

      <Connector/>
    </b-container>
  </div>
</template>

<script>
import { Colors } from "../theme/index"
import Connector from "./Connector"

export default {
  name: 'AppBody',
  components: {
    Connector
  },
  computed: {
    style() {
      var style = {}

     style['background-image'] = "linear-gradient(to bottom right," 
          + Colors.primary1 + "," 
          + Colors.primary2 + "," 
          + Colors.primary3 + ")"

      style['color'] = Colors.white

      return style
    }
  }
}
</script>

<style scoped>
.body-wrapper {
  position: relative;
  padding: 16px;
  margin-top: 16px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 16px 32px rgba(0, 0, 0, 0.32), 0px 64px 96px rgba(0, 0, 0, 0.32),
    0px 92px 128px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin-top: 1rem;
}
</style>