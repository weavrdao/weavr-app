<template>
  <div class="fixed top-0 w-full z-50 lg:block">
    <div 
    class="
    w-full h-16
    py-4 md:py-8 px-8
    flex flex-row justify-between items-center
    dark:text-white
    "
    :style="headerStyle"
    >
      <div>
        <div>
          <img class="h-8" :src="images.logo" alt="Frabric">
        </div>
      </div>
      <div class="flex flex-row-reverse justify-start">
        <div class="ml-4 hover:opacity-90" @click="onNewsletterClick">
          <img 
            class="cursor-pointer"
            :src="images.subscriptionIcon" 
            alt="Frabric Newsletter" 
          >
        </div>
        <a class="hover:opacity-90" href="https://discord.gg/qgG98MJyzK" target="_blank" rel="noopener noreferrer">
          <img 
            class="cursor-pointer"
            :src="images.discordIcon" 
            alt="Frabric Discord"
          >
        </a>
      </div>
    </div>
    <!-- <div class="w-full h-px bg-white"></div> -->
  </div>
</template>

<script>
// import Button from '../common/Button.vue'

export default {
  name: 'HeaderNavigation',
  components: {
    // Button,
  },
  data() {
    return {
      items: [], // TODO: Add binding to page contents
      images: {
        logo: require('../../assets/logo/compact/frabric_logo_compact-white.png'),
        subscriptionIcon: require('../../assets/pics/reademail-filled.svg'),
        discordIcon: require('../../assets/pics/discord-filled.svg')
      },
    }
  },
  computed: {
    headerStyle() {
      return `
      backgroundImage: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.0) 100%);
      background-size: cover; 
      background-repeat: no-repeat;
      background-position: center top;
      `
    }
  },
  methods: {
    onNewsletterClick() {
      this.$emit('scrollTo', 'frabric-footer')
    }
  }
}
</script>