<template>
  <div class="h-screen hidden lg:block shadow-lg relative w-80" :style="style">
    <div class="h-full dark:bg-gray-700">
      <img class="p-6" src="../../assets/logo/full/frabric_logo_full-white.png" alt="Frabric">
      <nav class="mt-6">
        <div>
          <div class="relative px-6 py-2 w-full" @click="clicked(item.id)">Header</div>
          <div class="relative px-6 py-2 w-full">Explainer</div>
          <div class="relative px-6 py-2 w-full">Community</div>
          <div class="relative px-6 py-2 w-full">Roadmap</div>
          <div class="relative px-6 py-2 w-full">Footer</div>
        </div>
      </nav>

      <Button label="Test" class="relative px-6 py-2 w-full"/>
    </div>
  </div>
</template>

<script>
import { Colors } from '../../theme'
import Button from '../common/Button'

export default {
  name: 'SideNavigation',
  components: {
    Button
  },
  data() {
    return {
      items: [] // TODO: Add binding to page contents
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