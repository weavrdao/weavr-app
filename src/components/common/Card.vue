<template>
  <div class="card" :style="style">
    <div v-for="child in children" :key="child">
        <slot v-bind="child"></slot>
    </div>
  </div>
</template>

<script>
import { UI, Sizes } from "../../theme/index"

export default {
  name: 'Card',
  props: {
    isInsideLayout: {
      type: Boolean,
      required: true,
    },
    children: {
      type: Array,
      required: true,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
  },
  computed: {
    style() {
      var style = {}

      const cssWidth = this.dimension(this.width, `${DEFAULT_WIDTH}px`)
      const cssHeight = this.dimension(this.height, `${DEFAULT_HEIGHT}px`)

      style['width'] = cssWidth
      style['height'] = cssHeight
      style['background'] = UI.Surface.backgroundColor
      style['border-radius'] = `${Sizes.gu}px`

      return style
    }
  },
  methods: {
    dimension(value, defaultValue) {
      if (this.isInsideLayout) {
        return '100%'
      }
      if (typeof value === 'number') {
        value = `${value}px`
      }
      return value === undefined ? defaultValue : value
    }
  }
}

const DEFAULT_WIDTH = 35 * Sizes.gu
const DEFAULT_HEIGHT = 40 * Sizes.gu
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>