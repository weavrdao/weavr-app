<template>
  <div 
    class="
    w-full max-w-screen mx-auto
    "
  >
    <StackNavigationBar class="mt-8" @onBack="openProposals">
      {{ 'Proposal — ' + proposal.org.title }}
    </StackNavigationBar>

    <div class="mt-12 mx-auto grid grid-cols-1 gap-8 lg:grid-flow-col-dense lg:grid-cols-3">
      <div class="space-y-6 lg:col-start-1 lg:col-span-2">
        <!-- Details-->
        <section>
          <div class="bg-level-1-light opacity-95 shadow-xl sm:rounded-lg">
            <div class="px-8 py-8">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Created By
                  </dt>
                  <dd class="mt-2">
                    <Address/>
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Title
                  </dt>
                  <dd class="mt-2 text-lg font-bold text-opacity-80">
                    {{ proposal.title }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-foam text-opacity-50">
                    Description
                  </dt>
                  <dd class="mt-2 text-md font-normal text-opacity-80">
                    {{ proposal.description }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>

      <section class="lg:col-start-3 lg:col-span-1">
        <div class="bg-level-1-light opacity-95 shadow-xl px-8 py-8 rounded-lg">
          <!-- Actions -->
          <dl class="flex flex-col gap-8">
            <div>
              <dt class="text-sm font-medium text-foam text-opacity-50">
                Time Remaning
              </dt>
              <dd class="mt-2 text-lg font-bold text-opacity-80">
                2 days, 11h : 56m : 27s
              </dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-foam text-opacity-50">
                Holders Voted
              </dt>
              <dd class="mt-2 text-lg font-bold text-opacity-80">
                41 / 214 (min 53 required)
                <VotingProgressBar 
                  class="mt-2"
                  :sumbittedProposalCount="41"
                  :totalProposalCount="214"
                  :minPassProposalCount="53"
                />
              </dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-foam text-opacity-50">
                Your Vote
              </dt>
              <dd class="mt-4">
                <div class="rounded-lg -space-y-px">
                  <label 
                    v-for="(option, i) in proposal.options" :key="option.id"
                    :class="
                      `
                      border-action-blue 
                      ${ i == 0 ? 'rounded-tl-lg rounded-tr-lg' : i == (proposal.options.length - 1) ? 'rounded-bl-lg rounded-br-lg' : '' }
                      relative border p-4 flex
                      cursor-pointer hover:bg-purple-three hover:bg-opacity-50
                      focus-within:bg-purple-three
                      `
                    "
                  >
                    <input 
                      type="radio" 
                      name="proposal-option" 
                      :value="option.title" 
                      class="sr-only" 
                      :aria-labelledby="`proposal-option-${ i }-label`" 
                    >
                    <div class="ml-3 flex flex-col">
                      <span :id="`proposal-option-${ i }-label`" class="block text-lg font-medium">
                        {{ option.title }}
                      </span>
                    </div>
                  </label>
                </div>
              </dd>
            </div>
          </dl>
          <div class="mt-8 flex flex-col items-stretch">
            <Button label="Vote" customClasses="w-full"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { proposals } from '../../data/mock/mockDataProvider'
import StackNavigationBar from '../layout/navigation/StackNavigationBar.vue'
import Address from '../views/address/Address.vue'
import VotingProgressBar from '../views/voting/VotingProgressBar.vue'
import Button from '../common/Button.vue'

export default {
  name: 'Proposal',
  components: {
    StackNavigationBar,
    Address,
    VotingProgressBar,
    Button,
  },
  data() {
    return {
      proposal: null
    }
  },
  methods: {
    pullData() {
      this.proposal = proposals[0]
    },
    openProposals() {
      this.$router.push('/assets')
    }
  },
  created() {
    this.pullData()
  }
}
</script>