<template>
  <div class="
  flex flex-col items-start overflow-x-hidden h-screen w-full
  text-white
  ">
    <div class="w-full">
      <HeaderSection/>
    </div>
    <div class="w-full">
      <ExplainerSection/>
    </div>
    <div class="w-full">
      <CommunitySection/>
    </div>
    <div class="w-full">
      <RoadmapSection/>
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
import Section from "./common/Section"
import HeaderSection from "./layout/HeaderSection"
import ExplainerSection from "./layout/ExplainerSection"
import CommunitySection from "./layout/CommunitySection"
import RoadmapSection from "./layout/RoadmapSection"
// import FooterSection from "./layout/FooterSection"

export default {
  name: 'AppBody',
  components: {
    Section,
    HeaderSection,
    ExplainerSection,
    CommunitySection,
    RoadmapSection,
    // FooterSection,
  }
}
</script>