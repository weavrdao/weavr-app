<template>
  <div :class="containerClasses">
    <Card :children="[{ source: src }]">
      <template slot-scope="src">
        <div class="h-full w-full">
          <VideoBackground 
          :src="src.source"
          class="w-full h-full rounded-sm"
          >
          </VideoBackground>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../../common/Card'
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'VideoCard',
  components: {
    Card,
    VideoBackground,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    isBordered: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    containerClasses() {
      var classes = `
      h-full w-full
      rounded 
      self-stretch
      `

      if (this.isBordered) {
        classes += `
        border-4 shadow-blue-1-glow
        `
      }

      return classes
    }
  }
}
</script>