<template>
  <div class="sticky top-0 w-full z-50 lg:block">
    <div 
    class="
    w-full h-16
    py-4 md:py-8 px-8
    flex flex-row-reverse justify-center md:justify-start items-center gap-8
    dark:text-white
    "
    :style="headerStyle"
    >
      <div>
        <Button label="View Whitepaper" />
      </div>
      <div>
        <Button label="Join Our Discord" />
      </div>
    </div>
    <!-- <div class="w-full h-px bg-white"></div> -->
  </div>
</template>

<script>
import Button from '../common/Button.vue'

export default {
  name: 'HeaderNavigation',
  components: {
    Button,
  },
  data() {
    return {
      items: [], // TODO: Add binding to page contents
    }
  },
  computed: {
    headerStyle() {
      return `
      backgroundImage: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.0) 100%);
      background-size: cover; 
      background-repeat: no-repeat;
      background-position: center top;
      `
    }
  }
}
</script>