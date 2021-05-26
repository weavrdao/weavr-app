<template>
  <div class="side-nav-panel" :style="style">
        <div class="nav-content">
          <img class="side-nav-logo" src="../../assets/logo/full/frabric_logo_full-white.png" alt="Frabric">

          <div class="nav-link" @click="clicked(item.id)">Header</div>
          <div class="nav-link">Explainer</div>
          <div class="nav-link">Community</div>
          <div class="nav-link">Roadmap</div>
          <div class="nav-link">Footer</div>
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
      
      style['background-color'] = Colors.primary1
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

<style scoped>
.side-nav-panel {
  margin: 0;
  padding: 0;
  width: 300px;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.side-nav-logo {
  position: relative;
  padding: 16px 16px;
  margin-bottom: 16px;
  width: auto;
  height: 100px;
  object-fit: cover;
}
.nav-content {
  margin-top: 16px;
}
.nav-link {
  text-align: left;
  font-weight: 400;
  font-size: 1.5em;
  padding: 8px 16px;
}
.nav-link:hover {
  cursor: pointer;
  text-shadow: 1px 1px #00A4FF;
}
.nav-button {
  position: relative;
  border-radius: 8px;
  margin: 32px 16px;
  padding: 16px;
}
</style>