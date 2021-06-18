<template>
  <div class="relative " ref="roadmap">
    <div class="relative w-full mx-auto px-8 lg:px-4">
      <div 
      class="
      relative flex flex-col items-center 
      mx-auto py-24 md:py-24
      " 
      :style="roadmapStyle"
      >
        <div class="container mx-auto">
          <div class="
          text-white text-center 
          text-shadow-lg 
          font-bold text-3xl md:text-5xl pb-16 md:pb-24
          ">
            Future Roadmap
          </div>
        </div>
        <div class="relative h-auto max-w-screen-lg">
          <img :src="images.roadmap" alt="Frabric roadmap">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadmapSection',
  components: {
    
  },
  data() {
    return {
      images: {
        roadmap: require('../../assets/pics/roadmap.svg'),
        mesh2d: require('../../assets/pics/frabric-mesh-2d.png')
      }
    }
  },
  computed: {
    roadmapStyle() {
      return `
      backgroundImage: url('${this.images.mesh2d}');
      background-size: contain; 
      background-repeat: no-repeat;
      background-position: center center;
      `
    }
  }
}
</script>