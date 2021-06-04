<template>
  <div class="relative flex flex-col justify-center h-screen">
    <div 
    class="
    absolute
    object-cover object-bottom opacity-50
    w-full h-full section-bg-image
    bg-gradient-to-r from-current
    ">
      
    </div>
    <div class="w-full max-w-screen-lg mx-auto pt-16 px-8 lg:px-4">
      <div class="relative flex flex-col items-center">
        <div class="container ml-0 mr-auto max-w-3xl">
          <div class="font-bold text-3xl md:text-5xl text-high-emphasis">
            Welcome to the Real Estate Blockchain Revolution
          </div>
          <div class="max-w-xl font-medium text-base md:text-lg lg:text-xl text-high-emphasis mt-0 md:mt-4 mb-8">
            Own property or part of it. Decide and vote on how to manage it. Buy and sell at anytime, real-time.
          </div>
        </div>
      </div>

      <Button label="Explore" @onClick="navigateTo('explainer')" />
    </div>
  </div>
</template>

<script>
import Button from '../common/Button'
// import LottieAnimation from 'lottie-web-vue'

export default {
  name: 'HeaderSection',
  components: {
    Button,
    // LottieAnimation
  },
  methods: {
    navigateTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
}
</script>

<style scoped>
.section-bg-image {
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0H0v36h36V0zM15.126 2H2v13.126c.367.094.714.24 1.032.428L15.554 3.032c-.188-.318-.334-.665-.428-1.032zM18 4.874V18H4.874c-.094-.367-.24-.714-.428-1.032L16.968 4.446c.318.188.665.334 1.032.428zM22.874 2h11.712L20 16.586V4.874c1.406-.362 2.512-1.468 2.874-2.874zm10.252 18H20v13.126c.367.094.714.24 1.032.428l12.522-12.522c-.188-.318-.334-.665-.428-1.032zM36 22.874V36H22.874c-.094-.367-.24-.714-.428-1.032l12.522-12.522c.318.188.665.334 1.032.428zm0-7.748V3.414L21.414 18h11.712c.362-1.406 1.468-2.512 2.874-2.874zm-18 18V21.414L3.414 36h11.712c.362-1.406 1.468-2.512 2.874-2.874zM4.874 20h11.712L2 34.586V22.874c1.406-.362 2.512-1.468 2.874-2.874z' fill='%239C92AC' fill-opacity='0.30' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: -webkit-gradient(linear, top center, bottom center, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}
</style>