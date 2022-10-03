<template>
    <div>
        <!-- slider import from needle/views-->
        <CrowdfundSlider />
        <section>
            <p>Did you find an exciting Real Estate project but cannot afford it? Bring the idea to us and let’s find like minded   investors to make it happen.</p>
            <button class="button">Start a needle</button>
        </section> -->
        <section>
            <CrowdfundCard />
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ethers } from "ethers";
import CrowdfundSlider from "../views/needles/CrowdfundSlider.vue"
import CrowdfundCard from "../views/needles/CrowdfundCard.vue";


export default {
    name: "Needles",
    components: {
        CrowdfundSlider,
        CrowdfundCard,
    },
    // No page data for now.
    // data() {
    //     return {
            
    //     }
    // },
    methods: {
        // Function to initialize/create crowdfund
        // async createNeedle() {

        // }
    },
    mounted() {
        this.syncWallet();
    }
}
</script>