<template>
  <div>
    <section aria-labelledby="asset-title">
      <div class="rounded-lg border-gradient-br-l2-light-purple-three-level-1-light border-transparent border-solid border-4 overflow-hidden shadow">
        <h2 class="sr-only" id="asset-title"> Asset — {{ asset.address }}</h2>
        <div class="flex flex-row justify-between items-stretch">
          <div class="flex flex-row justify-start items-stretch">
            <div class="w-60 h-1/1 overflow-hidden">
              <img 
                :src="asset.coverPictureURI" :alt="asset.address" 
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
                    Area
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
                    Gross Yield
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
          <div class="flex flex-row justify-start items-stretch">
            <div class="bg-level-2-dark m-4 overflow-hidden rounded-lg">
              <form class="h-full" action="#">
                <div class="h-full shadow rounded-lg">
                  <div class="h-full py-4 px-4">
                    <div class="h-full flex flex-col justify-between space-y-8">
                      <div class="flex flex-col space-y-8">
                        <div>
                          <div class="flex flex-row items-center justify-between">
                            <label for="company-website" class="block text-sm font-medium text-foam text-opacity-50">
                              From
                            </label>
                            <label for="company-website" class="block text-sm font-light text-foam text-opacity-50">
                              Balance: {{ ethBalance }}
                            </label>
                          </div>
                          <div class="mt-2 h-12 rounded-md shadow-sm flex">
                            <div 
                              class="
                                flex flex-row items-center justify-between
                                bg-level-2-light rounded-l-lg pl-3 pr-2 w-60
                              "
                            >
                              <div class="text-foam font-bold text-opacity-80">
                                ETH
                              </div>
                              <!-- <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div> -->
                            </div>
                            <input 
                              type="text" 
                              name="order-from" 
                              id="order-from" 
                              class="text-right text-lg font-bold border-level-2-light bg-level-2-dark focus:ring-action-blue focus:border-action-blue flex-grow block w-full min-w-0 rounded-none rounded-r-md border-gray-300"
                              placeholder="0.0"
                              :value="orderFromString"
                              @keypress="isNumber($event)"
                              @input="orderInputUpdated(0, $event)"
                            >
                          </div>
                        </div>

                        <div>
                          <div class="flex flex-row justify-between items-center">
                            <label for="company-website" class="block text-sm font-medium text-foam text-opacity-50">
                              To
                            </label>
                            <label for="company-website" class="block text-sm font-light text-foam text-opacity-50">
                              Balance: {{ shareBalance }}
                            </label>
                          </div>
                          <div class="mt-2 h-12 rounded-md shadow-sm flex">
                            <div 
                              class="
                                flex flex-row items-center justify-between
                                bg-level-2-light rounded-l-lg pl-3 pr-2 w-60
                              "
                              @click="pickActiveToken"
                            >
                              <div class="text-foam font-bold text-opacity-80 overflow-ellipsis overflow-hidden">
                                {{ asset.symbol }}
                              </div>
                            </div>
                            <input 
                              type="text"
                              name="order-to" 
                              id="order-to" 
                              class="text-right text-lg font-bold border-level-2-light bg-level-2-dark focus:ring-action-blue focus:border-action-blue flex-grow block w-full min-w-0 rounded-none rounded-r-md border-gray-300"
                              placeholder="0.0"
                              :value="orderToString"
                              @keypress="isNumber($event)"
                              @input="orderInputUpdated(1, $event)"
                            >
                          </div>
                        </div>
                        <div>
                          <div class="flex flex-row justify-between items-center">
                            <label for="company-website" class="block text-sm font-medium text-foam text-opacity-50">
                              Rate
                            </label>
                            <label for="company-website" class="block text-sm font-light text-foam text-opacity-50">
                              1 {{ asset.symbol }} = {{ askPriceString }} ETH
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="mt-8 flex flex-col">
                          <Button label="Swap" customClasses="w-full" @click="performSwap"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { toFixedNumber } from '../../../utils/common'
import { mapGetters, mapActions } from 'vuex'
import Address from '../address/Address.vue'
import Button from '../../common/Button.vue'

export default {
  name: 'MarketListItem',
  components: {
    Address,
    Button,
  },
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      numberFormat: new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }),
      orderFromValue: "",
      orderToValue: ""
    }
  },
  computed: {
    ...mapGetters({
      walletAddress: 'userWalletAddress',
      ethBalance: 'userEthBalance',
      assetPrices: 'bestAssetPrices'
    }),
    shareBalance() {
      return this.asset.owners.get(this.walletAddress)
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
    }
  }
}
</script>