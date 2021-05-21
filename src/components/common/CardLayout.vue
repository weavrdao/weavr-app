<template>
  <div class="card-layout" :style="style">
    <div v-for="child in children" :key="child">
        <slot v-bind="child"></slot>
    </div>
  </div>
</template>

<script>
import { Sizes } from "../../theme/index"

export default {
  name: 'CardLayout',
  props: {
    children: {
      type: Array,
    },
    fullWidth: {
      type: Boolean,
    },
    columnWidthMin: {
      type: Number,
      required: true,
    },
    rowHeight: {
      type: Number
    },
  },
  computed: {
    style() {
      var style = {}
      
      style['grid-gap'] = `${2 * Sizes.gu}px`
      style['grid-template-columns'] = `repeat(${this.fullWidth ? 'auto-fit' : 'auto-fill'}, minmax(${this.columnWidthMin}px, 1fr))`
      style['padding'] = `0 ${this.fullWidth ? 2 * Sizes.gu : 0}px ${3 * Sizes.gu}px`

      return style
    }
  }
}
</script>

<style scoped>
.card-layout {
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  margin: 0 auto;
  grid-auto-rows: 1fr;
}
</style>