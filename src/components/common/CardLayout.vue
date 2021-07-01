<template>
  <div class="flex justify-center">
    <div :class="gridClasses">
        <div 
        v-for="(child, i) in children" :key="child"
        >
          <div 
            :class="
              i / 2 == 0 
                ? 'transform skew-y-0 hover:-skew-y-0 transition duration-500' 
                : 'transform -skew-y-0 hover:skew-y-0 transition duration-500'
              "
          >
            <slot v-bind="child"></slot>
          </div>
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