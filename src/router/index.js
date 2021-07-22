import { createRouter, createWebHashHistory } from 'vue-router'
import MyAssets from '@/components/sections/MyAssets.vue'
import Marketplace from '@/components/sections/Marketplace.vue'
import Swap from '@/components/sections/Swap.vue'
import Vote from '@/components/sections/Vote.vue'

export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/assets'
    },
    {
      path: '/assets',
      alias: '/',
      name: 'myAssets',
      component: MyAssets
    },
    {
      path: '/market',
      name: 'market',
      component: Marketplace
    },
    {
      path: '/swap',
      name: 'swap',
      component: Swap
    },
    {
      path: '/vote/:id',
      name: 'vote',
      component: Vote
    }
  ]
})