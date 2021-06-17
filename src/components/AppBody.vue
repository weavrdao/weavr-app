<template>
  <div class="
  flex flex-col items-start overflow-x-hidden h-screen w-full
  text-white
  ">
    <div 
    class="
    w-full
    bg-gradient-to-b from-f-purple-3 via-f-purple-2 to-f-purple-1
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
      <div class="w-full">
        <RoadmapSection/>
      </div>
      <div class="w-full">
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