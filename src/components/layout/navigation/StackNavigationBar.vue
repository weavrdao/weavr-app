<template>
  <div class="my-3">
    <div class="is-flex is-align-items-center">
      <a
        href="javascript:void(0)"
        :class="`mx-3 is-size-${size}`"
        v-on:click="goBack"
        ><strong>←</strong></a
      >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StackNavigationBar",
  props: {
    size: {
      type: Number,
      default: 6,
    },
  },
  methods: {
    goBack() {
      this.$emit("onBack");
    },
  },
};
</script>