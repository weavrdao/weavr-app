<template>
  <div class="h-screen hidden lg:block shadow-lg relative w-80" :style="style">
        <div class="h-full dark:bg-gray-700">
          <img class="p-6" src="../../assets/logo/full/frabric_logo_full-white.png" alt="Frabric">
          <nav class="mt-6">
            <div>
              <div class="nav-link" @click="clicked(item.id)">Header</div>
              <div class="nav-link">Explainer</div>
              <div class="nav-link">Community</div>
              <div class="nav-link">Roadmap</div>
              <div class="nav-link">Footer</div>
            </div>
          </nav>
        </div>

        <Button label="Test" class="nav-button"/>
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
    },
    navLinkStyle() {
      var style = {}

      style['--nav-link-text-shadow--hover'] = `2px 2px ${Colors.secondary1}`
    
      return style
    }
  }
}
</script>