<template>
  <div id="app">
    <b-row align-h="center">
      <b-button v-if="connection.address == undefined" v-on:click="connectToWeb3" type="button">
        Connect
      </b-button>
      <p v-if="connection.address != undefined">
        Connected as {{ connection.address }}
      </p>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Connector',
  computed: mapGetters(['connection']),
  methods: {
    ...mapActions(['fetchAccount', 'establishConnection']),
    connectToWeb3() {
      this.establishConnection()
    }
  },
  created() {
    this.fetchAccount()
  }
}
</script>

<style>

</style>