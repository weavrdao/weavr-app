<template>
  <div class="h-full">
    <div class="h-full" v-for="child in children" :key="child">
      <slot v-bind="child"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    children: {
      type: Array,
      required: true,
    }
  }
}
</script>