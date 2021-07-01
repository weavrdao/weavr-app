<template>
  <div class="flex justify-center">
    <div :class="gridClasses">
        <div 
        v-for="(child, i) in children" :key="i"
        >
          <slot v-bind="child"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLayout',
  props: {
    children: {
      type: Array,
    },
    gridClasses: {
      type: String,
    },
  }
}
</script>