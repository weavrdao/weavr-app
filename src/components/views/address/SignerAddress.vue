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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignerAddress',
  data() {
    return {
      address: '0x220866b1a2219f40e72f5c628b65d54268ca3a9d'
    }
  },
  methods: {
    onClick() {
      
    },
  },
}
</script>