import { createRouter, createWebHashHistory } from 'vue-router'
import MyAssets from '@/components/sections/MyAssets.vue'
import Marketplace from '@/components/sections/Marketplace.vue'
import Swap from '@/components/sections/Swap.vue'
import Proposal from '@/components/sections/Proposal.vue'

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
      path: '/proposal/:id',
      name: 'proposal',
      component: Proposal
    }
  ]
})