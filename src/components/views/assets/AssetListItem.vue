<template>
  <div>
    <section aria-labelledby="asset-title">
      <div class="rounded-lg border-gradient-br-l2-light-purple-three-level-1-light border-transparent border-solid border-4 overflow-hidden shadow">
        <h2 class="sr-only" id="asset-title"> asset — {{ asset.world.property.address }}</h2>
        <div class="flex flex-row justify-between items-stretch">
          <div class="flex flex-row justify-start items-stretch">
            <div class="w-60 h-1/1 overflow-hidden">
              <img 
                :src="asset.world.property.coverImageUrl" :alt="asset.world.property.address" 
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
                    {{ asset.world.env.currency.symbol }} {{ numberFormat.format(asset.world.property.currentRent) }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Area
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ numberFormat.format(asset.world.property.area) }} {{ asset.world.env.measurements.area.unit }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Market Value
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.world.env.currency.symbol }} {{ numberFormat.format(asset.world.property.marketValue) }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Rooms
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.world.property.rooms.bd }} bd, {{ asset.world.property.rooms.ba }} ba
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Gross Yield
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.world.property.grossYieldPct }}%
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Year Built
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ asset.world.property.yearBuilt }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Address
                  </dt>
                  <dd class="mt-1 text-md font-normal text-opacity-80">
                    {{ asset.world.property.address }}
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
                      <Address/>
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Balance
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ asset.chain.erc20.balance }} ({{ asset.world.env.currency.symbol }} {{ numberFormat.format(asset.world.property.marketValue) }})
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Maket Cap
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ asset.world.env.currency.symbol }} {{ numberFormat.format(asset.chain.erc20.marketCap) }}
                    </dd>
                  </div>
                  <div>
                    <div class="flex flex-col">
                      <Button label="Swap" customClasses="w-full" @click="openSwap"/>
                    </div>
                  </div>
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
                      {{ numberFormat.format(asset.chain.holderCount) }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Proposals Open / Closed
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ numberFormat.format(asset.chain.dao.proposalsOpen) }} / {{ numberFormat.format(asset.chain.dao.proposals.length) }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Voting Strength
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ asset.chain.dao.votingStrengthFactor }}x
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
import Address from '../address/Address.vue'
import Button from '../../common/Button.vue'

export default {
  name: 'AssetListItem',
  data() {
    return {
      numberFormat: new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 })
    }
  },
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
  methods: {
    openSwap() {
      this.$router.push('/swap')
    }
  },
}
</script>