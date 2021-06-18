<template>
  <div class="h-full hidden lg:block shadow-r-purple-3-glow relative w-16 z-50">
    <div class="flex flex-row items-start h-full w-full">
      <div class="flex flex-col justify-between items-center h-full w-full dark:bg-f-purple-1 dark:bg-opacity-100 px-2 pt-2 pb-4">
        <div class="h-full w-full">
          <img class="h-12 w-auto mx-auto" :src="images.logo" alt="Frabric">
        </div>
        <div class="flex flex-col w-4/6 mx-auto">
          <img :src="images.subscriptionIcon" alt="Frabric Newsletter" class="w-full h-auto">
          <img :src="images.discordIcon" alt="Frabric Discord" class="w-full h-auto mt-4">
        </div>
      </div>
      
      <div class="h-full w-px bg-white"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
  components: {
    
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
  }
}
</script>