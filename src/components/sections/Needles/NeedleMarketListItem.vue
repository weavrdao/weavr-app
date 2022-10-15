 <template>
  <section class="card  is-rounded-lg" >
    <img v-bind:src="getCoverImageIpfsUrl()" alt="">
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Address from "@/components/views/address/Address.vue";

export default {
  name: "NeedleMarketListItem",
  components: {
    // Address,
  },
  props: {
    needle: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      walletAddress: "userWalletAddress",
    }),
  },
  methods: {
    getCoverImageIpfsUrl() {
      return `${process.env.VUE_APP_IFPS_GATEWAY_BASE_URL}/${this.needle.imageHashes[0]}`
    }
  },
};
</script>