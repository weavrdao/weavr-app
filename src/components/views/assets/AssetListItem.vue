<template>
  <div>
    <section aria-labelledby="asset-title">
      <div class="rounded-lg border-gradient-br-l2-light-purple-three-level-1-light border-transparent border-solid border-4 overflow-hidden shadow">
        <h2 class="sr-only" id="asset-title"> asset — {{ asset.address }}</h2>
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
          </div>
          <div class="flex flex-col justify-center max-w-xs text-center">
            This emptiness create confusion should not let you. For it's a WIP.
          </div>
          <div class="flex flex-row justify-start items-stretch">
            <div class="px-4 py-4 max-w-sm">
              <dl class="flex flex-col gap-4 justify-between h-full">
                <div class="flex flex-col gap-4">
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Token
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      <Address :value="asset.contractAddress"/>
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Balance
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ shareBalance }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Total Supply
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ numberFormat.format(asset.numOfShares) }}
                    </dd>
                  </div>
                  <!-- <div>
                    <div class="flex flex-col">
                      <Button label="Swap" customClasses="w-full" @click="openSwap"/>
                    </div>
                  </div> -->
                </div>
              </dl>
            </div>
            <div class="px-4 py-4 max-w-sm">
              <dl class="flex flex-col gap-4 justify-between h-full">
                <div class="flex flex-col gap-4">
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Holder Count
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ numberFormat.format(asset.owners.size) }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Proposals Open / Total
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ numberFormat.format(openProposalCount) }} / {{ numberFormat.format(asset.proposals.length) }}
                    </dd>
                  </div>
                  <div>
                    <div class="flex flex-col">
                      <Button label="Open DAO" customClasses="w-full"/>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Address from '../address/Address.vue'
import Button from '../../common/Button.vue'

export default {
  name: 'AssetListItem',
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
      numberFormat: new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 })
    }
  },
  computed: {
    ...mapGetters({
      walletAddress: 'userWalletAddress'
    }),
    shareBalance() {
      return this.asset.owners.get(this.walletAddress)
    },
    timestamp() {
      return Math.floor(Date.now() / 1000)
    },
    openProposalCount() {
      return this.asset.proposals.filter(p => { return p.endTimestamp < this.timestamp }).length
    }
  },
  methods: {
    openSwap() {
      this.$router.push('/swap')
    }
  },
}
</script>