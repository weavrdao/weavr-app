<template>
  <div 
    class="
      text-sm md:text-lg align-middle
      px-4
      rounded-lg
      bg-level-2-light
      w-56
      overflow-hidden
      cursor-pointer
      opacity-95 hover:bg-opacity-75
    "
  >
    <div class="h-full w-full flex flex-row justify-between items-center">
      <div class="font-bold w-5/6">
        {{
          address.substring(0, 8) + '...' + address.substring(address.length - 4)
        }}
      </div>
      <div class="ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Address',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      address: ""
    }
  },
  methods: {
    onClick() {
      
    },
  },
  created() {
    this.address = this.value
  }
}
</script>