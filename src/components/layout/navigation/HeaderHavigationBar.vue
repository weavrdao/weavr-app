<template>
  <Disclosure 
    as="nav" 
    class="border-b border-purple-three border-gray-200"
  >
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-16">
      <div class="flex justify-between items-center h-16">
        <div class="flex h-full">
          <div class="hidden sm:-my-px sm:flex sm:space-x-8">
            <div 
              v-for="item in navigation.items" :key="item.name"
              v-on:click="transitTo(item.path)"
              :class="[this.isItemCurrent(item) ? 'border-foam border-opacity-75 text-foam text-opacity-75' : 'border-transparent text-foam text-opacity-25 hover:text-opacity-50', 'inline-flex items-center px-1 pt-1 border-b text-sm font-medium cursor-pointer']" 
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <SignerAddress class="h-8" />
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure } from '@headlessui/vue'
import SignerAddress from '../../views/address/SignerAddress.vue'
import { useRoute } from 'vue-router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HeaderHavigationBar',
  components: {
    Disclosure,
    SignerAddress,
  },
  data() {
    return {
      navigation: {
        items: [
          { name: 'My Assets', path: '/assets' },
          { name: 'Marketplace', path: '/market' },
          { name: 'Swap', path: '/swap' },
          { name: 'Vote Demo', path: '/vote' },
        ]
      },
    }
  },
  computed: {
    ...mapGetters(['currentNavigationItem']),
  },
  methods: {
    ...mapActions(['goBack']),
    isItemCurrent(item) {
      return item.path == useRoute().path
    },
    transitTo(path) {
      this.$router.push(path)
    }
  },
}
</script>