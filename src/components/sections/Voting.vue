<template>
  <div 
    v-if="asset"
    class="
    w-full max-w-screen mx-auto
    "
  > 
    <StackNavigationBar class="mt-8" @onBack="goBack">
      {{ 'DAO — ' + asset.address }}
    </StackNavigationBar>

    <div
      class="mt-12 w-full flex flex-row justify-between items-center opacity-95"
    >
      <div class="font-bold text-lg text-foam text-opacity-80">Voting</div>
      <Button label="New Proposal" customClasses="w-full" @click="createProposal"/>
    </div>

    <div v-if="proposals" class="w-full mt-8 overflow-hidden">
      <ul>
        <li
          v-for="proposal in proposals" :key="proposal.id"
          class="mb-8"
        >
          <ProposalListItem :assetId="assetId" :proposal="proposal"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StackNavigationBar from '../layout/navigation/StackNavigationBar.vue'
import Button from '../views/common/Button.vue'
import ProposalListItem from '../views/voting/ProposalListItem.vue'

export default {
  name: 'Voting',
  props: {
    assetId: {
      type: String,
      required: true
    }
  },
  components: {
    StackNavigationBar,
    Button,
    ProposalListItem,
  },
  computed: {
    ...mapGetters({
      assetMap: 'assetsById',
      assetProposalMap: 'assetProposals'
    }),

    asset() {
      return this.assetMap.get(this.assetId)
    },

    proposals() {
      return this.assetProposalMap.get(this.assetId)
    }
  },
  methods: {
    ...mapActions({
      refresh: 'refreshProposalsDataForAsset',
      syncWallet: 'syncWallet'
    }),

    goBack() {
      this.$router.back()
    }
  },
  mounted() {
    this.refresh({ assetId: this.assetId })
  }
}
</script>