<template>
  <div>
    <section aria-labelledby="offer-title">
      <div class="rounded-lg border-gradient-br-l2-light-purple-three-level-1-light border-transparent border-solid border-4 overflow-hidden shadow">
        <h2 class="sr-only" id="offer-title"> Offer — {{ offer.world.property.address }}</h2>
        <div class="flex flex-row justify-between items-stretch">
          <div class="flex flex-row justify-start items-stretch">
            <div class="w-60 h-1/1 overflow-hidden">
              <img 
                :src="offer.world.property.coverImageUrl" :alt="offer.world.property.address" 
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
                    {{ offer.world.env.currency.symbol }} {{ offer.world.property.currentRent }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Area
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ offer.world.property.area }} {{ offer.world.env.measurements.area.unit }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Market Value
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ offer.world.env.currency.symbol }} {{ offer.world.property.marketValue }}
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Rooms
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ offer.world.property.rooms.bd }} bd, {{ offer.world.property.rooms.ba }} ba
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Gross Yield
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ offer.world.property.grossYieldPct }}%
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Year Built
                  </dt>
                  <dd class="mt-1 text-lg font-bold text-opacity-80">
                    {{ offer.world.property.yearBuilt }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Address
                  </dt>
                  <dd class="mt-1 text-md font-normal text-opacity-80">
                    {{ offer.world.property.address }}
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
                    <Address/>
                  </dd>
                </div>
                <div class="flex flex-col gap-4">
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Holder Count
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ offer.chain.holderCount }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Maket Cap
                    </dt>
                    <dd class="mt-1 text-lg font-bold text-opacity-80">
                      {{ offer.world.env.currency.symbol }} {{ offer.chain.erc20.marketCap }}
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
                          <div class="flex flex-row items-center">
                            <label for="company-website" class="block text-sm font-medium text-foam text-opacity-50">
                              From
                            </label>
                            <label for="company-website" class="block text-sm font-light text-foam text-opacity-50">
                              Balance: 42.31
                            </label>
                          </div>
                          <div class="mt-2 h-12 rounded-md shadow-sm flex">
                            <div 
                              class="
                                flex flex-row items-center justify-between
                                bg-level-2-light rounded-l-lg pl-3 pr-2 w-48
                                hover:bg-opacity-75 cursor-pointer
                              "
                            >
                              <div class="text-foam font-bold text-opacity-80 ">
                                ETH
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                            <input 
                              type="text" 
                              name="order-from" 
                              id="order-from" 
                              class="text-right text-lg font-bold border-level-2-light bg-level-2-dark focus:ring-action-blue focus:border-action-blue flex-grow block w-full min-w-0 rounded-none rounded-r-md border-gray-300"
                              placeholder="0.0"
                            >
                          </div>
                        </div>

                        <div>
                          <div class="flex flex-row justify-between items-center">
                            <label for="company-website" class="block text-sm font-medium text-foam text-opacity-50">
                              To
                            </label>
                            <label for="company-website" class="block text-sm font-light text-foam text-opacity-50">
                              Balance: 0.02
                            </label>
                          </div>
                          <div class="mt-2 h-12 rounded-md shadow-sm flex">
                            <div 
                              class="
                                flex flex-row items-center justify-between
                                bg-level-2-light rounded-l-lg pl-3 pr-2 w-48
                                hover:bg-opacity-75 cursor-pointer
                              "
                            >
                              <div class="text-foam font-bold text-opacity-80 overflow-ellipsis overflow-hidden">
                                {{ offer.chain.erc20.code.substring(0, 7) + '..' }}
                              </div>
                            </div>
                            <input 
                              type="text" 
                              name="order-from" 
                              id="order-from" 
                              class="text-right text-lg font-bold border-level-2-light bg-level-2-dark focus:ring-action-blue focus:border-action-blue flex-grow block w-full min-w-0 rounded-none rounded-r-md border-gray-300"
                              placeholder="0.0"
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="mt-8 flex flex-col">
                          <Button label="Review Order" customClasses="w-full"/>
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
import Address from '../address/Address.vue'
import Button from '../../common/Button.vue'

export default {
  name: 'MarketListItem',
  components: {
    Address,
    Button,
  },
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
}
</script>