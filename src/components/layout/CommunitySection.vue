<template>
  <div class="pt-8 pb-48" ref="community">
    <div class="w-5/6 md:w-full max-w-screen-lg mx-auto px-8 lg:px-4">
      <div class="relative flex flex-col items-center">
        <div class="container mx-auto max-w-screen-md mb-48">
          <div class="
          mb-8
          text-white text-center text-shadow-lg font-bold text-3xl md:text-5xl
          ">
            Benefits
          </div>

          <BenefitCardLayout :benefits="benefits"/>
        </div>
        <div class="
        flex flex-col md:flex-row items-center
        items-start max-w-screen-lg
        ">
          <div class="
          flex flex-col items-start w-full md:w-2/3 md:pr-16
          ">
            <div class="
            text-shadow-sm font-bold text-2xl md:text-4xl
            text-high-emphasis
            ">
              As the owner of your investment, your voice counts.
            </div>
            <div class="
            font-medium text-shadow-sm 
            text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8 mb-8
            ">
              <p class="pb-8">
                Each asset is governed by a DAO, a voting mechanism that allows you to trigger and vote on actions that will directly impact your property.
              </p>
              <p>
                Communication channels are direct between co-owners, property managers, and renters for real-time needs.
              </p>
            </div>
          </div>
          <div class="h-full w-full md:w-1/3 mx-auto">
            <div class="aspect-w-4 aspect-h-3">
              <VideoCard :src="videos.explainer1" :isBordered="false"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as ObjectDB from "../../data/mock/objects"
import BenefitCardLayout from "../features/Benefits/BenefitCardLayout"
import VideoCard from "../features/Video/VideoCard"

export default {
  name: 'CommunitySection',
  components: {
    BenefitCardLayout,
    VideoCard,
  },
  data() {
    return {
      benefits: [],
      videos: {
        explainer1: require('../../assets/animations/temp/temp-bg-video.mp4')
      }
    }
  },
  mounted() {
    ObjectDB.getAll(ObjectDB.Types.UserBenefits)
      .then((benefits) => { 
        console.log(benefits)

        const flatBenefits = [
            benefits['listers'],
            benefits['buyers'],
        ]

        this.benefits = flatBenefits
      })
  },
}
</script>