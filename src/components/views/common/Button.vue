<template>
  <button type="button" @click="onClick" :class="classes">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    label: {
      type: String,
      required: false,
    },
    isPrimary: {
      type: Boolean,
      default: true,
    },
    customClasses: {
      type: String,
      default: "",
    },
  },

  computed: {
    classes() {
      return `
        button
        ${this.isPrimary ? "is-primary" : ""}
        ${this.customClasses}
      `;
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>