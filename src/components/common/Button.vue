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
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
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
      button--${this.size}
      relative
      outline-none
      focus:outline-none
      text-white
      text-lg
      py-1
      `

      classes += `
      ${this.customClasses}
      `

      if (this.primary) {
        classes += `
        button--primary
        bg-f-blue-1
        rounded-xl
        px-6
        `
      } else {
        classes += `
        underline
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