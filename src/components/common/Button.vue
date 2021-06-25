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
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: true,
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
      text-sm md:text-lg
      py-2 md:py-3
      px-6
      rounded-xl
      shadow-lg 
      `

      classes += `
      ${this.customClasses}
      `

      if (this.primary) {
        classes += `
        bg-gradient-to-br from-f-green-foam to-f-blue-1
        text-gray-900
        font-medium
        border-2
        border-f-blue-1
        `
      } else {
        classes += `
        border-gradient-br-blue-white-f-purple-1
        border-transparent 
        border-solid 
        border-2
        text-white
        `
      }
      
      return classes
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
}
</script>