<template>
  <div class="">
    <Card :children="[benefit]">
      <template slot-scope="benefit">
        <div 
          :class="`
          relative rounded-content overflow-hidden w-full
          shadow-green-foam-glow
          `"
        >
          <div class="absolute w-full h-full rounded-content overflow-hidden">
            <VideoBackground
              class="w-full h-full rounded-content overflow-hidden"
              :src="benefit.bgIndex == 0 ? videos.background1 : videos.background2"
              overlay="linear-gradient(45deg,#2E2C9BA0,#D6FCFEA0)"
              :loop="true"
            >
            </VideoBackground>
          </div>
          <div class="relative py-16 px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 bg-gray-900 bg-opacity-30">
            <div class="lg:col-span-3">
              <div class="font-bold text-3xl">
                {{ benefit.title }}
              </div>
              <dl class="mt-10 space-y-10">
                <div v-for="(b, i) in benefit.benefits" :key="i" class="relative">
                  <div class="text-xl font-medium">
                    <div class="text-left w-2/3">{{ b }}</div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../../common/Card'
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'BenefitCard',
  components: {
    Card,
    VideoBackground,
  },
  props: {
    benefit: {
      type: Object,
      required: true,
    },
    isBordered: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      videos: {
        background1: require('../../../assets/animations/benefits-listers-bg.mp4'),
        background2: require('../../../assets/animations/benefits-buyers-bg.mp4')
      }
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

<style scoped>
.rounded-content {
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 0.75rem; 

  /* Firefox 1-3.6 */
  -moz-border-radius: 0.75rem; 
  
  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 0.75rem; 
}
</style>