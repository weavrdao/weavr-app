<template>
  <div id="app">
    <b-row align="center" align-h="center">
        <b-col>
          <Button v-if="connection.address == undefined" :primary="false" label="Connect" @onClick="connectToWeb3"/>
      
          <p v-if="connection.address != undefined">
            Connected as {{ connection.address }}
          </p>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from '../../common/Button'

export default {
  name: 'Connector',
  components: {
    Button
  },
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

<style scoped>

</style>