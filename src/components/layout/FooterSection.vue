<template>
  <div>
    <div class="relative flex flex-col justify-start">
      <div class="w-full h-full pt-24" :style="footerStyle">
        <div class="w-full max-w-screen-lg mx-auto mt-16 pt-16 px-8 lg:px-4">
          <div class="
          flex flex-col md:flex-row
          py-24
          ">
            <div class="flex flex-col items-start justify-between md:w-2/4">
              <div class="
              text-white text-shadow-lg font-bold text-3xl md:text-5xl
              ">
                Want to know more?
              </div>
              <div class="flex flex-row">
                <div class="h-full w-auto">
                  <img :src="images.mailIcon" alt="Frabric Newsletter" class="h-28 md:h-38 w-auto">
                </div>
                <div class="flex flex-col items-start">
                  <div class="
                  max-w-xl font-medium text-base md:text-lg lg:text-xl
                  mt-4 mb-4
                  ">
                    Sign up for our monthly newsletter!
                  </div>
                  <Button label="Subscribe Today" customClasses="shadow-xl mb-4" />
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center justify-between md:w-1/4">
              <img :src="images.whitepaperIcon" alt="Frabric Whitepaper" class="h-28 md:h-46 w-auto">
              <Button label="View Whitepaper" customClasses="shadow-xl mt-4 mb-4" />
            </div>
            <div class="flex flex-col items-center justify-between md:w-1/4">
              <img :src="images.discordIcon" alt="Frabric Discord" class="h-28 md:h-46 w-auto">
              <Button label="Join the Discord" customClasses="shadow-xl mt-4 mb-4" />
            </div>
          </div>
        </div>
        <div class="
        flex flex-col justify-center w-full h-24 bg-f-purple-1
        ">
          <div class="
          w-full text-center text-lg md:text-xl lg:text-2xl
          ">
            All rights reserved © Fractional Finance
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../common/Button'

export default {
  name: 'FooterSection',
  components: {
    Button,
  },
  data() {
    return {
      images: {
        background: require('../../assets/pics/temp/mesh-footer.png'),
        mailIcon: require('../../assets/pics/reademail.svg'),
        whitepaperIcon: require('../../assets/pics/document.svg'),
        discordIcon: require('../../assets/pics/discord.svg')
      }
    }
  },
  computed: {
    footerStyle() {
      return `
      backgroundImage: linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.0) 100%), url('${this.images.background}');
      background-size: cover; 
      background-repeat: no-repeat;
      background-position: center bottom;
      `
    }
  }
}
</script>