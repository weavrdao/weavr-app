<template>
  <div>
    <button 
    type="button" 
    @click="onClick" 
    :class="classes"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>

export default {
  name: "Button",

  props: {
    label: {
      type: String,
      required: false
    },
    isPrimary: {
      type: Boolean,
      default: true
    },
    customClasses: {
      type: String,
      default: ""
    }
  },

  computed: {
    classes() {
      var classes = `
        button
        relative
        outline-none
        focus:outline-none
      `

      classes += `
        text-sm md:text-lg
        py-2 md:py-3
        px-6
        rounded-xl
      `

      if (this.isPrimary) {
        classes += `
          bg-action-blue
          text-gray-900
          font-medium
          hover:opacity-80
        `
      } else {
        classes += `
          border-gradient-br-blue-white-f-purple-1
          border-transparent 
          border-solid 
          border-2
          text-white
          hover:border-f-blue-1
        `
      }

      classes += `
      ${this.customClasses}
      `

      return classes
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
}
</script>