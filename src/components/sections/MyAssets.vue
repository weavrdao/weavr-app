<template>
  <div 
    class="
    w-full max-w-screen mx-auto
    "
  >
    <div>My Assets Placeholder</div>
    <div v-on:click="testVote" class="cursor-pointer">
      Test Vote Transition
    </div>
  </div>
</template>

<script>
import { votes } from '../../data/mock/mockDataProvider'
import { mapActions } from 'vuex'

export default {
  name: 'MyAssets',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['openVote']),
    testVote() {
      this.$router.push('/vote/' + votes[0].id)
    }
  },
}
</script>