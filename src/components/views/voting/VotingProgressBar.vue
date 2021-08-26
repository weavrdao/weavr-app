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
      v-if="minPassCount > 0"
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
    totalCount: {
      type: Number,
      required: true
    },
    sumbittedCount: {
      type: Number,
      required: true
    },
    minPassCount: {
      type: Number,
      default: -1
    },
  },
  computed: {
    proposalFractionStyle() {
      return `width:${ 100 / (this.totalCount / this.sumbittedCount) }%;`
    },

    minThresholdStyle() {
      return `
        margin-left:${ 100 / (this.totalCount / this.minPassCount) }%;
        margin-right: auto;
      `
    }
  },
}
</script>