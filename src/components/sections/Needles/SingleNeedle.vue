<template>
<div class="container">
    <div :style="getCoverStyle()" class="cover-image mb-5">
        <div class="weavr-icon-container">
          <img src="../../../assets/logo/new-logo.svg" alt="">
        </div>
    </div>
    <h3 class="has-text-white">{{ needle.name }}</h3>
    <div class="tag-container mb-2">
      <span class="tag has-background-mediumBlue has-text-white">Residential</span>
    </div>
    <div class="progress-bar-container">
        <p class="target-text has-text-right is-size-5">🎯 {{ target }} <strong>USDC</strong></p>
        <div class="progress-bar">
          <div v-bind:style="getProgressBarStyle()" class="progress" />
        </div>
          <p class="target-text has-text-left is-size-5">💰 {{ deposited }} <strong>USDC</strong></p>
        </div>
    <div>
    <div class="purchase-container">
      <label class="label">Purchase share</label>
      <div class="is-flex">
        <input v-model="purchaseAmount" class="input" type="number" />
        <button v-if="!allowance" class="button has-background-mediumBlue has-text-white">...</button>
        <button v-else-if="Number(allowance) === 0" @click="approve" class="button has-background-mint has-text-white">Approve</button>
        <button v-else @click="purchase" class="button has-background-mint has-text-white">Purchase</button>
      </div>
      <p class="has-text-white mt-2">Balance: {{ tradeTokenBalance }} <strong>USDC</strong></p>
      <p class="has-text-white mt-2">Shares: {{ crowdfundTokenAllowance }} <strong>CROWDFUND</strong></p>
    </div>
      <div class="carousel-container">
        <Carousel :items-to-show="1" :wrap-around="true">
          <Slide v-for="imageHash in needle.imagesHashes" v-bind:key="imageHash">
            <div class="slide-image-container">
              <img v-bind:src="getIpfsUrl(imageHash)" alt="">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ethers } from "ethers";
import Address from "@components/views/address/Address.vue";
import { AddEthereumChainResponse } from "@coinbase/wallet-sdk/dist/relay/Web3Response";

export default {
  name: "SingleNeedle",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      needleId: this.$route.params.needleId.toLowerCase(),
      purchaseAmount: 0,
    }
  },
  computed: {
    ...mapGetters({
      needles: "allNeedles",
      allowance: "userTradeTokenAllowance",
      tradeTokenBalance: "userTradeTokenBalance",
      crowdfundTokenAllowance: "userCrowdfundTokenAllowance",
    }),
    needle() {
      return this.needles
        .find(n => n.id === this.needleId);
    },
    target() {
      return Number(ethers.utils.formatUnits(this.needle.target, 6)).toLocaleString();
    },
    deposited() {
      return Number(ethers.utils.formatUnits(this.needle.amountDeposited, 6)).toLocaleString();
    }
  },
  methods: {
    ...mapActions({
      deposit: "deposit",
      approveTradeToken: "approveTradeToken",
      fetchNeedleTokenData: "fetchNeedleTokenData",
    }),
    getIpfsUrl(path) {
      return path
        ? `${process.env.VUE_APP_IFPS_GATEWAY_BASE_URL}/${path}`
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";
    },
    getCoverStyle() {
      const url = this.needle.imagesHashes
        ? `${process.env.VUE_APP_IFPS_GATEWAY_BASE_URL}/${this.needle.imagesHashes[0]}`
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";
    
      return { "background-image": `url(${url})`}
    },
    getProgressBarStyle() {
      return {
        width: `${100
          * Number(
            ethers.utils.formatUnits(this.needle.amountDeposited)
          ) / Number(
          ethers.utils.formatUnits(this.needle.target)
        )}%`
      }
    },
    purchase() {
      console.log(this.purchaseAmount);
      this.deposit({
        crowdfundAddress: this.$route.params.needleId,
        amount: this.purchaseAmount,
      })
    },
    approve() {
      this.approveTradeToken({
        assetId: this.needleId,
      })
    },
    getFormattedNeedleBalance() {
      return ethers.utils.parseEthers(this.crowdfundTokenAllowance);
    }
  },
  mounted() {
    this.fetchNeedleTokenData({
      assetId: this.needleId,
    })
  }
}
</script>
<style scoped lang="scss">
@import "../../../../node_modules/hooper-vue3/dist/hooper.css";
@import "../../../styles/_variables.sass";
@import "../../../styles/frabric-custom.scss";

.cover-image {
    position: relative;
    height: 400px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
}

.weavr-icon-container {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    background: white;
    border-radius: 1000px;
    border: 2px solid $mediumBlue;
    margin: 0 auto;

    img {
      height: 28px;
      width: 28px;
    }
  }

.carousel-container {
    width: 66%;
    background: $darkGray;
    padding: 10px;
    border-radius: 12px;
}

//vue-carousel overrides

.carousel__icon {
    svg {
        fill: white !important;
    }
}

.container {
    h3 {
        font-size: 2.2rem;
        font-weight: 600;
    }
}

.slide-image-container {
    height: 300px;

    img {
        object-fit: cover;
        height: 100%;
        border-radius: 12px;
    }
}

.progress-bar-container {
  margin: 24px 0;
  .progress-bar {
    width: 100%;
    background: $lightGray;
    height: 22px;
    border-radius: 0px;
    overflow: hidden;

    .progress {
      background: $mint;
      height: 22px;
      border-radius: 0px;
    }
  }
}

.purchase-container {
  margin-bottom: 20px;

  .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

input {
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

input[type=number] {
    -moz-appearance:textfield;
}
</style>