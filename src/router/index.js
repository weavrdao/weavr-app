import { createRouter, createWebHashHistory } from "vue-router"
import MyAssets from "@/components/sections/MyAssets.vue"
import ThreadsMarketplace from "@/components/sections/Threads/ThreadMarketplace.vue"
import NeedlesMarketplace from "@/components/sections/Needles/NeedleMarketplace.vue"
import Swap from "@/components/sections/Swap.vue"
import ThreadDetails from "@/components/sections/Threads/ThreadDetails.vue"
import Proposal from "@/components/sections/Proposal.vue"
import NewProposal from "@/components/sections/NewProposal.vue"
import MarketListDetailVue from "../components/views/market/MarketListDetail.vue"
import DEX from "../components/sections/DEX.vue";

export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/assets"
    },
    {
      path: "/assets",
      alias: "/",
      name: "myAssets",
      component: MyAssets
    },
    {
      path: "/thread-market",
      name: "thread-market",
      component: ThreadsMarketplace
    },
    ,
    {
      path: "/needle-market",
      name: "needle-market",
      component: NeedlesMarketplace
    },
    /* {
          path: "/swap",
          name: "swap",
          component: Swap
    }, */
    {
      path: "/thread/:threadId",
      name: "thread",
      props: true,
      component: ThreadDetails
    },
    {
      path: "/dao/:assetId/proposals/:proposalId",
      name: "proposal",
      props: true,
      component: Proposal
    },
    {
      path: "/dao/:assetId/proposals/create",
      name: "newProposal",
      props: true,
      component: NewProposal
    },
    {
      path: "/dao/details",
      name: "assetDetails",
      props: true,
      component: MarketListDetailVue
    },
    {
      path: "/exchange",
      redirect: `/exchange/${process.env.VUE_APP_FRABRIC_ADDRESS}`,
    },
    {
      path: "/exchange/:assetId",
      name: "exchange",
      component: DEX,
    }
  ]
})