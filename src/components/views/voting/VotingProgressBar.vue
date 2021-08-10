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
        :style="proposalFractionStyle"
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
    totalProposalCount: {
      type: Number,
      required: true
    },
    sumbittedProposalCount: {
      type: Number,
      required: true
    },
    minPassProposalCount: {
      type: Number,
      required: true
    },
  },
  computed: {
    proposalFractionStyle() {
      return `width:${ 100 / (this.totalProposalCount / this.sumbittedProposalCount) }%;`
    },

    minThresholdStyle() {
      return `
        margin-left:${ 100 / (this.totalProposalCount / this.minPassProposalCount) }%;
        margin-right: auto;
      `
    }
  },
}
</script>