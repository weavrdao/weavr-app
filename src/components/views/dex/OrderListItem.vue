<template>
<div class="columns is-align-items-center">
    <div class="column is-one-quarter">
        <Blockies :seed="order.address"/>
        {{ order.address }}
    </div>
    <div class="column is-one-quarter">
        {{ formatEther(`${order.totalAmount}`) }} FBRC
    </div>
    <div class="column is-one-quarter">
        {{ order.price.toFixed(2) }} USD
    </div>
    <div class="column is-one-quarter is-justify-content-flex-end">
        <div
            class="purchase-type"
            v-bind:class="order.type === 'buy' ? 'is-buy' : 'is-sell'">
            {{ order.type === 'buy' ? 'BUY' : 'SELL' }}
        </div>
    </div>
</div>
</template>

<script>
import { Blockies } from "blockies-vue";
import { ethers } from "ethers";

export default {
  name: "OrderListItem",
  components: {
    Blockies,
  },
  computed: {

  },
  props: {
    order: {
      type: Object,
    }
  },
  methods: {
    formatEther: (amount) => Number(ethers.utils.formatEther(amount)).toFixed(2),
  }
}
</script>


<style lang="scss" scoped>
@import "../../../styles/frabric-custom.scss";

.columns {
    border-top: 1px solid #2F2C38;
    margin-top: 0.75rem !important;
}

.purchase-type {
    font-weight: 600;
    color: white;
    border-radius: 8px;
    padding: 10px 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.is-buy {
    background: $mint;
}

.is-sell {
    background: $red;
}
</style>