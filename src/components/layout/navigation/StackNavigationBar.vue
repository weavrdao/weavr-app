<template>
  <div class="bg-level-1-light opacity-95 rounded-lg shadow-xl h-16 w-full overflow-hidden">
    <div class="flex flex-row items-center h-full">
      <div 
        class="bg-level-2-light hover:opacity-75 h-full flex flex-row justify-start items-center p-4 w-24 cursor-pointer"
        v-on:click="goBack"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <div class="ml-2">
          Back
        </div>
      </div>
      <div class="h-full p-4 flex flex-col justify-center items-start">
        <div class="font-bold">
          <slot v-bind="title"></slot>
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StackNavigationBar',
  methods: {
    goBack() {
      this.$emit('onBack');
    }
  },
}
</script>