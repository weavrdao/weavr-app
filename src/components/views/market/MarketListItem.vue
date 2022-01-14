<template>
  <div>
    <div class="card">
      <div class="columns">
        <div class="column p-3 md:p-6">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="coverPictureURI" :alt="asset.address" />
            </figure>
          </div>
        </div>
        <div class="column p-6">
          <div class="level" style="border-bottom: 1px black solid">
            <div class="level-item">Current Rent</div>
            <div class="level-item">
              $ {{ numberFormat.format(asset.currentRent) }}
            </div>
          </div>
          <div class="level" style="border-bottom: 1px black solid">
            <div class="level-item">Living Space</div>
            <div class="level-item">
              {{ numberFormat.format(asset.area) }} sqft
            </div>
          </div>
          <div class="level" style="border-bottom: 1px black solid">
            <div class="level-item">Market Value</div>
            <div class="level-item">
              $ {{ numberFormat.format(asset.marketValue) }}
            </div>
          </div>
          <div class="level" style="border-bottom: 1px black solid">
            <div class="level-item">Living Space</div>
            <div class="level-item">
              {{ numberFormat.format(asset.area) }} sqft
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="coverPictureURI" :alt="asset.address" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ asset.address }}</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div class="content">
          <button class="button is-danger m-3">close thread</button>
          <button class="button is-primary m-3">Open thread</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toFixedNumber } from "../../../utils/common";
import { mapGetters, mapActions } from "vuex";
import Address from "../address/Address.vue";
import Button from "../common/Button.vue";

export default {
  name: "MarketListItem",
  components: {
    // Address,
    // Button,
  },
  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      numberFormat: new Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 3,
      }),
      orderFromValue: "",
      orderToValue: "",
      coverPictureURI: require("../../../assets/pics/fbra.jpg"),
    };
  },
  computed: {
    ...mapGetters({
      walletAddress: "userWalletAddress",
      ethBalance: "userEthBalance",
      assetPrices: "bestAssetPrices",
    }),
    shareBalance() {
      return this.asset.owners.get(this.walletAddress) ?? 0;
    },
    askPrice() {
      var askETH = this.assetPrices.get(this.asset.id).ask;

      if (askETH) {
        askETH = askETH.toString() / Math.pow(10, 18);
      } else {
        askETH = 0.0;
      }

      return askETH;
    },
    askPriceString() {
      return toFixedNumber(this.askPrice);
    },
    orderToString() {
      return toFixedNumber(this.orderToValue);
    },
    orderFromString() {
      return toFixedNumber(this.orderFromValue);
    },
  },
  methods: {
    ...mapActions({
      swap: "swapToAsset",
    }),
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    /* eslint-disable indent */
    orderInputUpdated(index, event) {
      switch (index) {
        case 0:
          this.orderFromValue = event.target.value;
          this.orderToValue = this.convertToShares(this.orderFromValue);
          break;
        case 1:
          this.orderToValue = event.target.value;
          this.orderFromValue = this.convertToETH(this.orderToValue);
          break;
        default:
          break;
      }
    },
    convertToETH(shares) {
      return shares * this.askPrice;
    },
    convertToShares(eth) {
      return eth / this.askPrice;
    },
    performSwap() {
      this.swap({
        asset: this.asset,
        amount: this.orderToValue,
        $toast: this.$toast,
      });
    },
  },
};
</script>