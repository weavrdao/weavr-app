<template>
  <div class="row" :style="style"></div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    width: {
      type: String,
    },
    align: {
      type: String,
    },
    justify: {
      type: String,
    },
    padding: {
      type: String,
    },
    border: {
      type: String,
    },
    borderRadius: {
      type: String,
    },
  },
  computed: {
    style() {
      var style = {}

      style['width'] = this.width ?? '100%'
      style['align-items'] = this.align ?? 'center'
      style['justify-content'] = this.justify ?? 'flex-start'
      style['padding'] = this.padding
      style['border'] = this.border
      style['border-radius'] = this.borderRadius

      return style
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  padding: 0;
}
</style>