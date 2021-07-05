<template>
  <div class="
  relative
  flex flex-col items-start overflow-x-hidden h-full w-full
  text-white
  ">
    <div 
    class="
    relative
    w-full
    global-bg
    "
    >
      <HeaderNavigation/>
      <div class="w-full">
        <HeaderSection/>
      </div>
      <div class="w-full">
        <ExplainerSection/>
      </div>
      <div class="w-full">
        <CommunitySection/>
      </div>
      <div class="relative w-full">
        <div 
          class="
          absolute
          object-cover object-center opacity-50
          w-full h-full footer-bg
          "
        >
        </div>
        <RoadmapSection/>
        <FooterSection/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from "./layout/HeaderHavigation"
import HeaderSection from "./layout/HeaderSection"
import ExplainerSection from "./layout/ExplainerSection"
import CommunitySection from "./layout/CommunitySection"
import RoadmapSection from "./layout/RoadmapSection"
import FooterSection from "./layout/FooterSection"

export default {
  name: 'AppBody',
  components: {
    HeaderNavigation,
    HeaderSection,
    ExplainerSection,
    CommunitySection,
    RoadmapSection,
    FooterSection,
  }
}
</script>

<style scoped>
.global-bg {
  background-image: linear-gradient(to bottom, RGBA(22, 17, 86, 1.00) 0%, RGBA(8, 7, 30, 1.00) 50%), linear-gradient(to top, RGBA(44, 48, 149, 1.00) 0%, RGBA(8, 7, 30, 1.00) 50%);
}
.footer-bg {
  background-image: linear-gradient(to top, RGBA(44, 48, 149, 0.50) 0%, RGBA(0, 0, 0, 0.00) 100%);
}
</style>