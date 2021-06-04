<template>
  <div class="
  flex flex-col items-start overflow-x-hidden h-screen w-full
  text-white
  ">
    <div class="w-full">
      <HeaderSection/>
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
import Section from "./common/Section"
import HeaderSection from "./layout/HeaderSection"
import CommunitySection from "./layout/CommunitySection"

export default {
  name: 'AppBody',
  components: {
    Section,
    HeaderSection,
    CommunitySection,
  }
}
</script>