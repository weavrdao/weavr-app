<template>
  <div class="">
    <Card :children="[benefit]">
      <template slot-scope="benefit">
        <div 
          :class="`
          relative rounded-xl shadow-2xl overflow-hidden w-full 
          transition-shadow duration-500
          shadow-green-foam-glow
          `"
        >
          <div class="absolute w-full h-full">
            <VideoBackground
              class="w-full h-full"
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