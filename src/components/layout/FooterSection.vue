<template>
  <div class="relative flex flex-col justify-start">
    <div class="w-full h-full pt-24" :style="footerStyle">
      <div class="w-full max-w-screen-lg mx-auto mt-16 pt-16 px-8 lg:px-4">
        <div class="relative flex flex-col items-center">
          <div class="container ml-0 mr-auto max-w-3xl">
            <div class="
            text-white text-shadow-lg font-bold text-3xl md:text-5xl
            ">
              Want to know more?
            </div>
            <div class="
            max-w-xl font-medium text-base md:text-lg lg:text-xl
            mt-4 mb-8
            ">
              Sign up for our monthly newsletter!
            </div>
          </div>
        </div>

        <Button label="Find Out More" @onClick="navigateTo('explainer')" customClasses="shadow-xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      images: {
        background: require('../../assets/pics/temp/mesh-footer.png')
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