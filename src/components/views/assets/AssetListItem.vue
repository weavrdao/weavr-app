<template>
  <div>
    <section aria-labelledby="asset-title" class="card p-4">
      <div class="level card-body columns mt-3">
        <div class="level-item card-image column is-one-third">
          <div class="is-flex is-flex-direction-column is-align-items-center">
            <img :src="coverPictureURI" :alt="asset.address" />
          </div>
        </div>

        <div class="level-item column is-two-thirds">
          <div class="media has-text-left">
            <div class="content">
              <h2 id="asset-title" class="title is-4">
                {{ asset.address }}
              </h2>
              <div class="subtitle mt-2 is-6">
                ({{ numberFormat.format(asset.owners.size) }} holders,
                {{ numberFormat.format(openProposalCount) }} open proposals)
              </div>
            </div>
          </div>
          <div class="has-text-left">
            <div class="help"><strong>Token</strong></div>
            <Address class="mb-3" :value="asset.contractAddress" />
          </div>

          <dl class="columns is-mobile">
            <div class="column">
              <dt class="help">
                <strong>Current Rent</strong>
              </dt>
              <dd>${{ numberFormat.format(asset.currentRent) }}</dd>
            </div>
            <div class="column">
              <dt class="help">
                <strong>Market Value</strong>
              </dt>
              <dd>${{ numberFormat.format(asset.marketValue) }}</dd>
            </div>
            <div class="column">
              <dt class="help">
                <strong>Living Space</strong>
              </dt>
              <dd>{{ numberFormat.format(asset.area) }} sqft</dd>
            </div>
          </dl>

          <dl class="columns is-mobile">
            <div class="column">
              <dt class="help">
                <strong>Year Built</strong>
              </dt>
              <dd>
                {{ asset.yearBuilt }}
              </dd>
            </div>
            <div class="column">
              <dt class="help">
                <strong>Rooms</strong>
              </dt>
              <dd>
                {{ asset.bedroomCount }} bed, {{ asset.bathroomCount }} bath
              </dd>
            </div>
            <div class="column">
              <dt class="help">
                <strong>Capitalization Rate</strong>
              </dt>
              <dd>{{ asset.grossYieldPct }}%</dd>
            </div>
          </dl>
          <dl class="columns is-mobile">
            <div class="column is-one-third">
              <dt class="help"><strong>Balance</strong></dt>
              <dd>
                {{ numberFormat.format(shareBalance) }}
              </dd>
            </div>
            <div class="column is-one-third">
              <dt class="help"><strong>Total Supply</strong></dt>
              <dd>
                {{ numberFormat.format(asset.numOfShares) }}
              </dd>
            </div>
          </dl>
          <div class="has-text-left border-top">
            <Button :isPrimary="true" label="Open DAO" @click="openDAO" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Address from "../address/Address.vue";
import Button from "../common/Button.vue";

export default {
  name: "AssetListItem",
  components: {
    Address,
    Button,
  },
  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      numberFormat: new Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 3,
      }),
      coverPictureURI: require("../../../assets/pics/fbra.jpg"),
    };
  },
  computed: {
    ...mapGetters({
      walletAddress: "userWalletAddress",
    }),
    shareBalance() {
      return this.asset.owners.get(this.walletAddress);
    },
    timestamp() {
      return Math.floor(Date.now() / 1000);
    },
    openProposalCount() {
      return this.asset.proposals.filter((p) => {
        return p.endTimestamp > this.timestamp;
      }).length;
    },
  },
  methods: {
    openSwap() {
      this.$router.push("/swap");
    },
    openDAO() {
      this.$router.push(`/dao/${this.asset.id}/proposals`);
    },
  },
};
</script>