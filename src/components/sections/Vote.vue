<template>
  <div 
    class="
    w-full max-w-screen mx-auto
    "
  >
    <StackNavigationBar class="mt-8" @onBack="openVotes">
      {{ 'Vote — ' + vote.org.title }}
    </StackNavigationBar>
  </div>
</template>

<script>
import { votes } from '../../data/mock/mockDataProvider'
import StackNavigationBar from '../layout/navigation/StackNavigationBar.vue'

export default {
  name: 'Vote',
  components: {
    StackNavigationBar,
  },
  data() {
    return {
      vote: null
    }
  },
  methods: {
    pullData() {
      this.vote = votes[0]
    },
    openVotes() {
      this.$router.push('/assets')
    }
  },
  created() {
    this.pullData()
  }
}
</script>