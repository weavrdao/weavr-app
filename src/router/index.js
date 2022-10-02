import { createRouter, createWebHashHistory } from "vue-router";
import MyAssets from "@/components/sections/MyAssets.vue";
import ThreadsMarketplace from "@/components/sections/Threads/ThreadMarketplace.vue";
import NeedlesMarketplace from "@/components/sections/Needles/NeedleMarketplace.vue";
import Swap from "@/components/sections/Swap.vue";
import { WhitelistPage } from "../whitelist";
import WalletConnect from "@/components/sections/WalletConnect.vue";
import ThreadDetails from "@/components/sections/Threads/ThreadDetails.vue";
import Proposal from "@/components/sections/Proposal.vue";
import Modal from "@/components/views/modal/Modal.vue";
import NewProposal from "@/components/sections/NewProposal.vue";
import MarketListDetailVue from "../components/views/market/MarketListDetail.vue";
import DEX from "../components/sections/DEX.vue";
import { ethers } from "ethers";
import store from "../store";

const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/whitelist",
    },
    {
      path: "/whitelist",
      component: WhitelistPage,
    },
    {
      path: "/walletConnect",
      component: Modal,
      props: { component: WalletConnect },
    },
    {
      path: "/assets",
      alias: "/",
      name: "myAssets",
      component: MyAssets,
    },
    {
      path: "/thread-market",
      name: "thread-market",
      component: ThreadsMarketplace,
    },
    ,
    {
      path: "/needle-market",
      name: "needle-market",
      component: NeedlesMarketplace,
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
      component: ThreadDetails,
    },
    {
      path: "/dao/:assetId/proposals/:proposalId",
      name: "proposal",
      props: true,
      component: Proposal,
    },
    {
      path: "/dao/:assetId/proposals/create",
      name: "newProposal",
      props: true,
      component: NewProposal,
    },
    {
      path: "/dao/details",
      name: "assetDetails",
      props: true,
      component: MarketListDetailVue,
    },
    {
      path: "/exchange",
      redirect: `/exchange/${process.env.VUE_APP_FRABRIC_ADDRESS}`,
    },
    {
      path: "/exchange/:assetId",
      name: "exchange",
      component: DEX,
    },
  ],
});

let originalPath = "";
let hasOriginalPathBeenSet = false;
let hasRedirectedAfterWhitelisting = false;

router.beforeEach((to, from) => {
  if (!hasOriginalPathBeenSet) {
    originalPath = to.fullPath;
    hasOriginalPathBeenSet = true;
    console.log(originalPath);
  }

  if (to.fullPath === "/whitelist") {
    return true;
  }

  if (to.fullPath === "/walletConnect") {
    return true;
  }
  const address = store.getters.userWalletAddress;
  const isConnected = ethers.utils.isAddress(address);
  if (!isConnected) {
    router.push("/");
  }
  const whitelisted = store.getters.isWhitelisted;
  if (whitelisted) {
    if (!hasRedirectedAfterWhitelisting) {
      router.push(originalPath);
      hasRedirectedAfterWhitelisting = true;
    }
    return true;
  } else {
    router.push("/whitelist");
  }

  return true;
});

export default router;
