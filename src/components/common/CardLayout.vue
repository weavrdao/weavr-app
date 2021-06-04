<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 auto-rows-fr">
        <div 
        class="
        bg-gray-700 bg-opacity-50 shadow-b-purple-3-glow w-full p-8 rounded self-stretch
        "
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
    }
  }
}
</script>