<template>
  <div :class="containerClasses">
    <Card :children="[{ source: src }]">
      <template slot-scope="src">
        <div class="h-full w-full p-8">
          <lottie-animation
            ref="anim"
            :animationData="require('@/assets/animations/temp/ease-animation.json')"
            :loop="true"
            :autoPlay="true"
            class="w-full h-full rounded-sm"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../../common/Card'
import LottieAnimation from 'lottie-web-vue'

export default {
  name: 'VideoCard',
  components: {
    Card,
    LottieAnimation,
  },
  props: {
    src: {
      type: Object,
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