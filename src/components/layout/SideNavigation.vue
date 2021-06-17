<template>
  <div class="h-screen hidden lg:block shadow-r-purple-3-glow relative w-80" :style="style">
    <div class="h-full dark:bg-f-purple-1 dark:bg-opacity-100">
      <img class="pl-6 pt-4 h-14 pr-24 w-auto" :src="images.logo" alt="Frabric">
      <nav class="mt-6">
        <div>
          <div class="relative px-6 py-2 w-full" @click="clicked(item.id)">Header</div>
          <div class="relative px-6 py-2 w-full">Explainer</div>
          <div class="relative px-6 py-2 w-full">Community</div>
          <div class="relative px-6 py-2 w-full">Roadmap</div>
          <div class="relative px-6 py-2 w-full">Footer</div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { Colors } from '../../theme'

export default {
  name: 'SideNavigation',
  components: {
    
  },
  data() {
    return {
      items: [], // TODO: Add binding to page contents
      images: {
        logo: require('../../assets/logo/full/frabric_logo_full-white.png')
      },
    }
  },
  computed: {
    style() {
      var style = {}
      
      //style['background-color'] = Colors.primary1
      style['color'] = Colors.white
      
      return style
    }
  }
}
</script>