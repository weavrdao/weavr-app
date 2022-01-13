<template>
  <div v-if="asset" class="container p-5 is-dark">
    <StackNavigationBar @onBack="goBack">
      {{ `Proposals for ${asset.address}` }}
    </StackNavigationBar>

    <div class="columns" v-if="proposals">
      <div class="column is-one-third mt-5 mb-5 mr-1 ml-1">
        <div class="panel m-2 p-4">
          <strong>Join the discussion</strong>
          <ul>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
        <Accordion summary="Tokenholders">
          <ul>
            <li
              v-for="tokenholder in asset.owners.entries()"
              :key="tokenholder[0]"
            >
              <div class="pt-1 pb-1 content is-vcentered">
                <Address :value="tokenholder[0]"></Address>
                <span class="m-1">
                  <strong>{{ tokenholder[1] }}</strong>
                  shares
                </span>
              </div>
            </li>
          </ul>
        </Accordion>
      </div>
      <ul class="column is-half mt-5 mb-5 mr-1 ml-1">
        <li>
          <div class="panel m-2 p-4">
            <!-- <Button label="New Proposal"></Button> -->
            <a href="javascript:void(0)" @click="createProposal"
              ><strong>Create a new proposal...</strong></a
            >
          </div>
        </li>
        <li v-for="proposal in proposals" :key="proposal.id">
          <ProposalListItem :assetId="assetId" :proposal="proposal" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content.is-vcentered {
  display: flex;
  flex-wrap: wrap;
  align-content: center; /* used this for multiple child */
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import StackNavigationBar from "../layout/navigation/StackNavigationBar.vue";
/* import Button from "../views/common/Button.vue"; */
import ProposalListItem from "../views/voting/ProposalListItem.vue";
import Accordion from "../layout/utils/Accordion.vue";
import Address from "../views/address/Address.vue";

export default {
  name: "Voting",
  props: {
    assetId: {
      type: String,
      required: true,
    },
  },
  components: {
    StackNavigationBar,
    ProposalListItem,
    Accordion,
    Address,
  },
  computed: {
    ...mapGetters({
      assetMap: "assetsById",
      assetProposalMap: "assetProposals",
    }),

    asset() {
      return this.assetMap.get(this.assetId);
    },

    proposals() {
      return this.assetProposalMap.get(this.assetId);
    },
  },
  methods: {
    ...mapActions({
      refresh: "refreshProposalsDataForAsset",
      syncWallet: "syncWallet",
    }),

    goBack() {
      this.$router.back();
    },

    createProposal() {
      this.$router.push(`/dao/${this.assetId}/proposals/create`);
    },
  },
  mounted() {
    this.refresh({ assetId: this.assetId });
    this.syncWallet();
  },
};
</script>