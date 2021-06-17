<template>
  <div class="flex justify-center">
    <div :class="gridClasses">
        <div 
        v-for="child in children" :key="child"
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