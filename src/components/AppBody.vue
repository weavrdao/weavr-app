<template>
  <div class="body-wrapper" :style="style">
    <Section>
      <h1>Header Section</h1>
    </Section>
    <Section>
      <h1>Explainer Section</h1>
    </Section>
    <Section>
      <h1>Community Section</h1>
    </Section>
    <Section>
      <h1>Roadmap Section</h1>
    </Section>
    <Section>
      <h1>Footer Section</h1>
    </Section>
  </div>
</template>

<script>
import { Colors } from "../theme/index"
import Section from "./common/Section"

export default {
  name: 'AppBody',
  components: {
    Section,
  },
  computed: {
    style() {
      var style = {}

    //  style['background-image'] = "linear-gradient(to bottom right," 
    //       + Colors.primary1 + "," 
    //       + Colors.primary2 + "," 
    //       + Colors.primary3 + ")"

      style['color'] = Colors.white

      return style
    }
  }
}
</script>

<style scoped>
.body-wrapper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: relative;
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin-left: 300px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 16px 32px rgba(0, 0, 0, 0.32), 0px 64px 96px rgba(0, 0, 0, 0.32),
    0px 92px 128px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  line-height: 1.55;
  /* max-width: 1440px; */
  font-weight: 400 !important;
  color: white;
  
  @media (min-width: 1441px) {
      overflow-x: visible;
  }
}
</style>