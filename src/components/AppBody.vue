<template>
  <div class="flex flex-col w-full md:space-y-4" :style="style">
    <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
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