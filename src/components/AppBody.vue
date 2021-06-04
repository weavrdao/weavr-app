<template>
  <div class="
  flex flex-col items-start overflow-x-hidden h-screen w-full
  " :style="style">
    <div class="w-full">
      <Section>
        <div class="h-full flex flex-col justify-center">
          <h1 class="relative">Header Section</h1>
        </div>
      </Section>
    </div>
    <div class="w-full">
      <Section>
        <div class="h-full flex flex-col justify-center">
          <h1 class="relative">Explainer Section</h1>
        </div>
      </Section>
    </div>
    <div class="w-full">
      <CommunitySection/>
    </div>
    <div class="w-full">
      <Section>
        <div class="h-full flex flex-col justify-center">
          <h1 class="relative">Roadmap Section</h1>
        </div>
      </Section>
    </div>
    <div class="w-full">
      <Section>
        <div class="h-full flex flex-col justify-center">
          <h1 class="relative">Footer Section</h1>
        </div>
      </Section>
    </div>
  </div>
</template>

<script>
import { Colors } from "../theme/index"
import Section from "./common/Section"
import CommunitySection from "./layout/CommunitySection"

export default {
  name: 'AppBody',
  components: {
    Section,
    CommunitySection,
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