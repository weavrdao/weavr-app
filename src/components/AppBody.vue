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
  background-image: linear-gradient(to bottom, RGBA(16, 5, 69, 1.00) 0%, RGBA(8, 7, 30, 1.00) 50%), linear-gradient(to top, RGBA(44, 48, 149, 1.00) 0%, RGBA(8, 7, 30, 1.00) 50%);
}
.footer-bg {
  background-image: linear-gradient(to top, RGBA(44, 48, 149, 0.50) 0%, RGBA(0, 0, 0, 0.00) 100%);
  mask-image: 
    /* linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0)), */
    radial-gradient(at 0% 35%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 20% 45%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 30% 60%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 25% 65%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 20% 75%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%),

    radial-gradient(at 80% 25%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 75% 35%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 70% 40%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 80% 55%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 100% 65%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%)
}
</style>