<template>
  <div class="pt-8 mb-48 md:mb-0" ref="explainer">
    <div class="w-5/6 md:w-full max-w-screen-lg mx-auto px-8 lg:px-4">
      <div class="relative flex flex-col items-center">
        <div class="flex flex-col items-center mx-auto max-w-screen-sm mb-48">
          <div class="
          text-shadow-md font-bold text-3xl md:text-5xl
          text-center text-high-emphasis
          ">
            Buying property doesn’t have to be complex.
          </div>
          <div class="
          font-bold text-shadow-md 
          text-center text-base md:text-lg lg:text-xl text-high-emphasis
          mt-4 md:mt-8 mb-8
          ">
            With the Frabric network you can become a property owner within seconds.
          </div>
        </div>
        <div class="
        flex flex-col-reverse items-center gap-4
        md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 md:items-start md:max-w-screen-md
        ">
          <div class="
          mt-4 md:mt-0
          flex flex-col items-center
          ">
            <div class="row-span-1 col-span-2">
              <div class="
              text-center md:text-left
              text-shadow-sm font-bold text-2xl md:text-4xl
              text-high-emphasis
              ">
                Find the property you like, choose to invest collaboratively, and pay directly from your wallet.
              </div>
            </div>
            <div class="row-span-1 col-span-2">
              <div class="
              text-center md:text-left
              font-medium text-shadow-sm 
              text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8
              ">
                Investing gives you immediate access to the voting system (DAO) and communication channels of your property.
              </div>
            </div>
          </div>
          <div class="
          md:row-span-2 md:col-span-1
          ">
            <div class="h-full w-60 mx-auto">
              <div class="aspect-w-3 aspect-h-4">
                <VideoCard :src="videos.explainer1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from '../features/Video/VideoCard'

export default {
  name: 'ExplainerSection',
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: {
        explainer1: require('../../assets/animations/temp/temp-bg-video.mp4')
      }
    }
  },
}
</script>