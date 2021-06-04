<template>
  <div class="header-section">
    <h1>Header Section Placeholder</h1>
  </div>
</template>

<script>
// import LottieAnimation from 'lottie-web-vue'

export default {
  name: 'HeaderSection',
  components: {
    // LottieAnimation
  },
  computed: {
    style() {
      var style = {}

      return style
    }
  }
}
</script>

<style scoped>
.header-section {
  padding: 69px 20px;
  max-width: 68rem;
  margin: 0px auto;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  border-color: white;
  border-style: dashed;
  border-width: 1px;
}

.header-section h1 {
  font-weight: 400;
  font-size: 3.4375rem;
  line-height: 5.25rem;
  color: #FFFFFF;
  margin: 0;
  text-align: center;
}
</style>