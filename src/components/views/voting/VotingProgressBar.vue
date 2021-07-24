<template>
  <div 
    class="
      rounded-lg
      border
      border-purple-three
      overflow-hidden
      h-8
    "
  >
    <div class="relative h-full w-full">
      <div
        class="absolute h-full bg-purple-three"
        :style="voteFractionStyle"
      >
      </div>
      <div 
      class="absolute w-1 h-full border-dashed border-l border-foam"
      :style="minThresholdStyle"
      >

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VotingProgressBar',
  props: {
    totalVoteCount: {
      type: Number,
      required: true
    },
    sumbittedVoteCount: {
      type: Number,
      required: true
    },
    minPassVoteCount: {
      type: Number,
      required: true
    },
  },
  computed: {
    voteFractionStyle() {
      return `width:${ 100 / (this.totalVoteCount / this.sumbittedVoteCount) }%;`
    },

    minThresholdStyle() {
      return `
        margin-left:${ 100 / (this.totalVoteCount / this.minPassVoteCount) }%;
        margin-right: auto;
      `
    }
  },
}
</script>