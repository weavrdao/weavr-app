import { createRouter, createWebHashHistory } from 'vue-router'
import MyAssets from '@/components/sections/MyAssets.vue'
import Marketplace from '@/components/sections/Marketplace.vue'
import Swap from '@/components/sections/Swap.vue'

export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/assets',
      name: 'My Assets',
      component: MyAssets
    },
    {
      path: '/market',
      name: 'Marketplace',
      component: Marketplace
    },
    {
      path: '/swap',
      name: 'Swap',
      component: Swap
    }
  ]
})