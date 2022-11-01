<template>
  <div>
    <div @click="tokenDetails" style="cursor: pointer;" class="tag is-large is-flex is-address-container" v-if="address !=null">
      <div>
        <span >{{ balance }}</span>
        <span class="has-text-mediumBlue ml-1"> {{ symbol }}</span>
      </div>
      <div
        class="tag is-primary has-radius-xs is-large is-clickable"
        @click="onClick"
      >
        <div class="is-family-monospace address">
          {{
            address.substring(0, 8) + "..." + address.substring(address.length - 4)
          }}
        </div>
      </div>
      <div class="dropdown is-right is-hoverable has-background-darkGray">
        <div class="dropdown-trigger">
          <button 
            class="button is-primary is-dropdown-icon" 
            role="button" ref="dropdownButton"
            @click="toggleDropdown()"
            aria-haspopup="true" aria-controls="dropdown-menu3">
            <span><unicon class="mr-0" :width="25" :height="25" name="angle-down" fill="darkGray"></unicon></span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content ">
            <a  class="dropdown-item is-disabled has-text-mediumGray">
              <!-- <span class="mr-1"><unicon name="eye-slash" fill="mediumGray" width="15" height="15"></unicon></span> -->
              Token Overview
            </a>
            
            <hr class="dropdown-divider">
            <a @click="onLogout" class="dropdown-item">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="tag is-primary has-radius-xs is-large is-clickable connect"
      @click="onClick"
    >
      <div class="has-text-white">Connect Wallet</div>
    </div>
    <div id="toeknModal"></div>
  </div>
  </template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { DAO } from "../../../services/constants"
import { Modal } from "../modal/Modal.vue"
import { ethers } from "ethers";
export default {
  name: "SignerAddress",
  computed: {
    ...mapGetters({
      whitelisted: "isWhitelisted",
      address: "userWalletAddress",
      balance: "userTokenBalance",
      symbol: "assetTokenSymbol",
    }),
    isConnected() {
      return ethers.utils.isAddress(this.address)
    }
  },
  methods: {
    ...mapActions({
      sync: "syncWallet",
      tokenInfo: "tokenInfo",
      logout: "logout"
    }),
    toggleDropdown() {
        
    },
    onClick() {
      if(ethers.utils.isAddress(this.address)){
        this.sync({$toast: this.$toast})
      }else {
        this.$router.push("/walletConnect")
      }
    },
    onLogout() {
      this.logout()
      this.$router.go("/")
    },
    async tokenDetails() {

    }
  },
  mounted() {
  }
    
};
  
</script>
  
  <style lang="scss" scoped>
  @import "../../../styles/frabric-custom.scss";
  
    .is-address-container {
      display: inline-flex !important;
      background: $darkGray !important;
      padding-right: 0px !important;
      gap: 10px;
      color: white;
      font-size: 1rem !important;
      height: 2.5em !important;
    }
  
    .address {
      font-size: 1rem;
    }
  
    .is-dropdown-icon {
      display: inline-flex !important;
      background: $darkGray !important;
      padding-right: 0px !important;
    }
  
    .connect {
      transition: all 150ms;
      &:hover {
        filter: contrast(120%);
      }
    }
  </style>
  