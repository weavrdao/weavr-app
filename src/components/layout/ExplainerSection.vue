<template>
  <div class="pt-8 pb-24" ref="explainer">
    <div class="w-full max-w-screen-lg mx-auto px-8 lg:px-4">
      <div class="relative flex flex-col items-center">
        <div class="container mx-auto max-w-screen-md">
          <div class="font-bold text-center text-2xl md:text-4xl text-high-emphasis">
            Buying property is complex, investing is complicated and accessing the global real estate market is almost impossible
          </div>
          <div class="max-w-screen-sm mx-auto font-medium text-center text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8 mb-8">
            The Frabric Network is a decentralized ownership platform that brings property ownership and investment closer. Invest in seconds, not days or months.
          </div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr items-center max-w-screen-md">
          <img class="w-full" :src="images.explainer1" alt="Temp1">
          <img class="w-full" :src="images.explainer2" alt="Temp2">
        </div>
        <Button 
        class="mt-4 md:mt-8 mb-8"
        label="Read the White Paper"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../common/Button'

export default {
  name: 'ExplainerSection',
  components: {
    Button,
  },
  data() {
    return {
      images: {
        explainer1: require('../../assets/pics/temp/eth.png'),
        explainer2: require('../../assets/pics/temp/what-is-ethereum.png')
      }
    }
  }
}
</script>