<template>
  <div>
    <!-- <section aria-labelledby="asset-title">
      <div class="rounded-lg border-gradient-br-l2-light-purple-three-level-1-light border-transparent border-solid border-4 overflow-hidden shadow">
        <h2 class="sr-only" id="asset-title"> Asset — {{ asset.address }}</h2>
        <div class="flex flex-row justify-between items-stretch">
          <div class="flex flex-row justify-start items-stretch">
            <div class="w-60 h-1/1 overflow-hidden">
              <img 
                :src="coverPictureURI" :alt="asset.address" 
                class="object-cover w-full h-full pointer-events-none group-hover:opacity-75"
              >
            </div>
            
            <div class="px-4 py-4 bg-level-2-light flex-shrink flex-grow-0 max-w-sm">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Current Rent
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    $ {{ numberFormat.format(asset.currentRent) }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Living Space
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ numberFormat.format(asset.area) }} sqft
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Market Value
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    $ {{ numberFormat.format(asset.marketValue) }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Rooms
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.bedroomCount }} bd, {{ asset.bathroomCount }} ba
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Capitalization Rate
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.grossYieldPct }}%
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Year Built
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.yearBuilt }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Address
                  </dt>
                  <dd class="mt-1 text-md font-normal text-opacity-80">
                    {{ asset.address }}
                  </dd>
                </div>
              </dl>
            </div>

            <div class="px-4 py-4 max-w-sm">
              <dl class="flex flex-col gap-4 justify-between h-full">
                <div>
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Token
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    <Address :value="asset.contractAddress"/>
                  </dd>
                </div>
                <div class="flex flex-col gap-4">
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Total Supply
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ numberFormat.format(asset.numOfShares) }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Proposals
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ numberFormat.format(asset.proposals.length) }}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <div class="card">
      <div class="columns">
        <div class="column p-3 md:p-6">
          <div class="card-image">
            <figure class="image is-4by3" >
              <img :src="coverPictureURI" :alt="asset.address">
            </figure>
          </div>
        </div>
        <div class="column p-6">
          <div class="level" style="border-bottom: 1px black solid">
          <div class="level-item">
            Current Rent
          </div>
          <div class="level-item">
            $ {{ numberFormat.format(asset.currentRent) }}
          </div>
        </div>
        <div class="level" style="border-bottom: 1px black solid">
          <div class="level-item">
            Living Space
          </div>
          <div class="level-item">
            {{ numberFormat.format(asset.area) }} sqft
          </div>
        </div>
        <div class="level" style="border-bottom: 1px black solid">
          <div class="level-item">
            Market Value
          </div>
          <div class="level-item">
            $ {{ numberFormat.format(asset.marketValue) }}
          </div>
        </div>
        <div class="level" style="border-bottom: 1px black solid">
          <div class="level-item">
            Living Space
          </div>
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
              <img :src="coverPictureURI" :alt="asset.address">
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
import { toFixedNumber } from "../../../utils/common"
import { mapGetters, mapActions } from "vuex"
import Address from "../address/Address.vue"
import Button from "../common/Button.vue"

export default {
  name: "MarketListItem",
  components: {
    // Address,
    // Button,
  },
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      numberFormat: new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }),
      orderFromValue: "",
      orderToValue: "",
      coverPictureURI: require("../../../assets/pics/fbra.jpg")
    }
  },
  computed: {
    ...mapGetters({
      walletAddress: "userWalletAddress",
      ethBalance: "userEthBalance",
      assetPrices: "bestAssetPrices"
    }),
    shareBalance() {
      return this.asset.owners.get(this.walletAddress) ?? 0
    },
    askPrice() {
      var askETH = this.assetPrices.get(this.asset.id).ask

      if (askETH) {
        askETH = askETH.toString() / Math.pow(10, 18)
      } else {
        askETH = 0.0
      }

      return askETH
    },
    askPriceString() {
      return toFixedNumber(this.askPrice)
    },
    orderToString() {
      return toFixedNumber(this.orderToValue)
    },
    orderFromString() {
      return toFixedNumber(this.orderFromValue)
    }
  },
  methods: {
    ...mapActions({
      swap: "swapToAsset"
    }),
    isNumber(evt) {
      evt = (evt) ? evt : window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    orderInputUpdated(index, event) {
      switch (index) {
        case 0:
          this.orderFromValue = event.target.value
          this.orderToValue = this.convertToShares(this.orderFromValue)
          break
        case 1:
          this.orderToValue = event.target.value
          this.orderFromValue = this.convertToETH(this.orderToValue)
          break
        default:
          break
      }
    },
    convertToETH(shares) {
      return shares * this.askPrice
    },
    convertToShares(eth) {
      return eth / this.askPrice
    },
    performSwap() {
      this.swap({ asset: this.asset, amount: this.orderToValue })
    }
  }
}
</script>