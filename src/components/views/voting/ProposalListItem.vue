<template>
  <div>
    <section aria-labelledby="proposal-title">
      <div class="rounded-lg bg-level-1-light opacity-95 overflow-hidden shadow">
        <h2 class="sr-only" id="proposal-title"> Proposal — {{ proposal.title }}</h2>
        <div class="mx-auto grid grid-cols-1 lg:grid-flow-col-dense lg:grid-cols-3">
          <div class="lg:col-start-1 lg:col-span-2">
            <section>
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
                    <dd 
                      class="mt-2 text-md font-normal text-opacity-80 line-clamp-2"
                    >
                      {{ proposal.description }}
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
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
            </section>
          </div>

          <section class="bg-level-2-light lg:col-start-3 lg:col-span-1">
            <div class="h-full px-8 py-8">
              <div class="h-full flex flex-col justify-between">
                <dl class="flex flex-col gap-8">
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      Start Date
                    </dt>
                    <dd class="mt-2 text-lg font-bold text-opacity-80">
                      {{ startDateString }}
                    </dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-foam text-opacity-50">
                      End Date
                    </dt>
                    <dd class="mt-2 text-lg font-bold text-opacity-80">
                      {{ endDateString }}
                    </dd>
                  </div>
                </dl>
                <div class="mt-8">
                  <Button label="View Details" customClasses="w-full" @click="openProposal"/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Address from '../address/Address.vue'
import Button from '../common/Button.vue'
import { VoteType } from '../../../models/vote'

export default {
  name: 'ProposalListItem',
  components: {
    Address,
    Button,
  },
  props: {
    assetId: {
      type: String,
      required: true
    },
    proposal: {
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

    startDateString() {
      return this.dateStringForTimestamp(this.proposal.startTimestamp)
    },

    endDateString() {
      return this.dateStringForTimestamp(this.proposal.endTimestamp)
    }
  },
  methods: {
    dateStringForTimestamp(timestamp) {
      var date = new Date(timestamp * 1000)

      var hours = date.getHours()
      var minutes = date.getMinutes()
      var suffix = " AM"

      if (hours > 11) {
        hours = 24 - hours
        suffix = " PM"
      }

      return `${ date.getFullYear() }-${ date.getMonth()+1 }-${ date.getDate() }, ${ hours }:${ minutes } ${ suffix }`
    },

    openProposal() {
       this.$router.push(`/dao/${ this.assetId }/proposal/${ this.proposal.id }`)
    }
  },
}
</script>