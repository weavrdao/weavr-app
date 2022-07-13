<template>
<div class="container">
    <h1>Create Order</h1>
    <div class="columns has-gap">
        <div class="column is-simple-container">
            <div class="is-flex is-justify-content-space-between">
                <span>Avbl <img class="is-wallet-image" src=".././../assets/pics/wallet-icon.svg"/></span>
                <span>
                    <span>5,250</span>
                    <span class="has-text-mediumBlue"> FBRC</span>
                </span>
            </div>
            <input class="is-price-input" type="number" placeholder="Price">
            <input class="is-price-input" type="number" placeholder="Total">
            <button class="button buy-button">Buy FBRC</button>
        </div>
        <div class="column is-simple-container">
            <div class="is-flex is-justify-content-space-between">
                <span>Avbl <img class="is-wallet-image" src=".././../assets/pics/wallet-icon.svg"/></span>
                <span>
                    <span>5,250</span>
                    <span class="has-text-mediumBlue"> FBRC</span>
                </span>
            </div>
            <input class="is-price-input" type="number" placeholder="Price">
            <input class="is-price-input" type="number" placeholder="Total">
            <button class="button sell-button">Sell FBRC</button>
        </div>
    </div>
    <div class="columns">
        <div class="column is-simple-container">
            <h2>Order Book</h2>
            <div></div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "DEX",
  data() {
    return {
      orderBookMode: "buy",
    }
  },
  computed: {
    ...mapGetters({
      orders: "assetMarketOrders"
    })
  },
  methods: {
    ...mapActions({
      fetchOrders: "fetchDexOrders",
    })
  },
  mounted() {
    const ASSET_ID = 0;
    this.fetchOrders({
        assetId: ASSET_ID,
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/frabric-custom.scss";
@import "../../styles/_variables.sass";

h1, h2 {
    color: white;
    font-size: 32px;
    margin-bottom: 52px;
}

.has-gap {
    gap: 17px;
}

.is-simple-container {
    border-radius: 10px;
    border: 1px solid $mediumGray;
    padding: 23px 38px;
    margin-bottom: 30px;
}

.is-price-input {
    background: #2F2C38;
    border: none !important;
    border-radius: 15px;
    outline: none;
    display: block;
    width: 100%;
    margin: 15px 0px;
    padding: 18px 27px;
    font-size: 18px;
}

.is-wallet-image {
    width: 18px;
}

.has-small-flex-gap {
    gap: 17px;
}

.button {
    width: 100%;
    font-size: 22px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    border: none;
}

.buy-button {
    background: $mint;
}

.sell-button {
    background: $red;
}
</style>