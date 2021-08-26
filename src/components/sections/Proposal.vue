<template>
  <div 
    v-if="proposal"
    class="
    w-full max-w-screen mx-auto
    "
  >
    <StackNavigationBar class="mt-8" @onBack="goBack">
      {{ 'Proposal — ' + proposal.title }}
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
                    <Address :value="proposal.creatorAddress"/>
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
                    <span style="white-space: pre-wrap;">{{ proposal.description }}</span>
                  </dd>
                </div>
                <div v-if="!isVotable" class="sm:col-span-2">
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Results
                    </dt>
                    <dd class="mt-2 text-md font-normal">
                      <p>Yes — <span class="inline font-bold text-affirmative-green">{{ numberFormat.format(votes.yes.percentage) }}%</span> ({{ votes.yes.count }} shares)</p>
                      <p>No — <span class="inline font-bold text-negative-red">{{ numberFormat.format(votes.no.percentage) }}%</span> ({{ votes.no.count }}  shares)</p>
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
                {{ timeRemainingString }}
              </dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-foam text-opacity-50">
                Holders Voted
              </dt>
              <dd class="mt-2 text-lg font-bold text-opacity-80">
                {{ holderCounts.voted }} / {{ holderCounts.total }}
                <VotingProgressBar 
                  class="mt-2"
                  :sumbittedCount="holderCounts.voted"
                  :totalCount="holderCounts.total"
                />
              </dd>
            </div>
            <div v-if="isVotable">
              <dt class="text-sm font-medium text-foam text-opacity-50">
                Your Vote
              </dt>
              <dd class="mt-4">
                <div class="rounded-lg -space-y-px">
                  <label 
                    v-for="(option, i) in voteOptions" :key="option"
                    :class="
                      `
                      border-action-blue 
                      ${ i == 0 ? 'rounded-tl-lg rounded-tr-lg' : i == (voteOptions.length - 1) ? 'rounded-bl-lg rounded-br-lg' : '' }
                      relative border p-4 flex
                      cursor-pointer hover:bg-purple-three hover:bg-opacity-50
                      focus-within:bg-purple-three
                      `
                    "
                  >
                    <input 
                      type="radio" 
                      name="proposal-option" 
                      class="sr-only" 
                      :aria-labelledby="`proposal-option-${ i }-label`" 
                      @input="optionPickedAtIndex(i)"
                    >
                    <div class="ml-3 flex flex-col">
                      <span :id="`proposal-option-${ i }-label`" class="block text-lg font-medium">
                        {{ option }}
                      </span>
                    </div>
                  </label>
                </div>
              </dd>
            </div>
          </dl>
          <div v-if="isVotable" class="mt-8 flex flex-col items-stretch">
            <Button label="Vote" customClasses="w-full" @click="vote"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StackNavigationBar from '../layout/navigation/StackNavigationBar.vue'
import Address from '../views/address/Address.vue'
import VotingProgressBar from '../views/voting/VotingProgressBar.vue'
import Button from '../views/common/Button.vue'
import { VoteType } from '../../models/vote'

export default {
  name: 'Proposal',
  components: {
    StackNavigationBar,
    Address,
    VotingProgressBar,
    Button,
  },
  props: {
    assetId: {
      type: String,
      required: true
    },
    proposalId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      numberFormat: new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }),
      countdownRef: null,
      timeRemainingString: "",
      pickedOption: null
    }
  },
  computed: {
    ...mapGetters({
      walletAddress: 'userWalletAddress',
      assetMap: 'assetsById',
      proposalsMap: 'proposalsById'
    }),

    asset() {
      return this.assetMap.get(this.assetId)
    },

    proposal() {
      return this.proposalsMap.get(this.proposalId)
    },

    votes() {
      var yesVoteShares = 0
      var noVoteShares = 0

      this.proposal.votes
        .forEach(vote => {
          if (vote.type == VoteType.Yes) { yesVoteShares += vote.count }
          else if (vote.type == VoteType.No) { noVoteShares += vote.count }
        })

      return {
        yes: {
          count: yesVoteShares,
          percentage: yesVoteShares / (yesVoteShares + noVoteShares) * 100,
        },
        no: {
          count: noVoteShares,
          percentage: noVoteShares / (yesVoteShares + noVoteShares) * 100,
        }
      }
    },

    holderCounts() {
      return {
        voted: this.proposal.votes.length,
        total: this.asset.owners.size
      }
    },

    voteOptions() {
      return Object.values(VoteType)
    },

    isVotable() {
      let hasWalletVoted = this.proposal.votes
        .find(v => { return v.voterAddress == this.walletAddress })

      return !hasWalletVoted
    }
  },
  methods: {
    ...mapActions({
      refresh: 'refreshProposalsDataForAsset',
      syncWallet: 'syncWallet',
      voteOnProposal: 'voteOnProposal'
    }),

    goBack() {
      this.$router.back()
    },

    setTimeRemainingCountdown() {
      clearInterval(this.countdownRef)

      this.countdownRef = setInterval(
        function() {
          let now = new Date().getTime() / 1000

          let t = this.proposal.endTimestamp - now;
          
          if (t >= 0) {
            let days = Math.floor(t / (60 * 60 * 24))
            let hours = Math.floor((t % (60 * 60 * 24)) / (60 * 60))
            let mins = Math.floor((t % (60 * 60)) / (60))
            let secs = Math.floor(t % 60)
        
            this.timeRemainingString = `${ days } days, ${ hours }h : ${ mins }m : ${ secs }s`
          } else {
            this.timeRemainingString = "The voting is over"
          }
        }.bind(this), 
        1000
      )
    },

    optionPickedAtIndex(optionIndex) {
      switch (optionIndex) {
        case 0:
          this.pickedOption = VoteType.Yes
          break
        case 1:
          this.pickedOption = VoteType.No
          break
        case 2:
          this.pickedOption = VoteType.Abstain
          break
        default:
          this.pickedOption = null
          break
      }
    },

    vote() {
      if (!this.pickedOption) {
        return
      }

      this.voteOnProposal(
        {  
          assetId: this.assetId,
          proposalId: this.proposalId,
          voteType: this.pickedOption
        }
      )
    }
  },
  mounted() {
    this.refresh({ assetId: this.assetId })
    this.syncWallet()
  },
  created() {
   this.setTimeRemainingCountdown()
  },
  unmounted() {
    clearInterval(this.countdownRef)
  }
}
</script>