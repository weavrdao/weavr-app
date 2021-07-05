<template>
  <div>
    <button 
    v-if="kind != 'image'"
    type="button" 
    @click="onClick" 
    :class="classes"
    >
      {{ label }}
    </button>

    <!-- <img :src="src" alt=""> -->
  </div>
</template>

<script>

export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: false
    },
    kind: {
      type: String,
      default: 'primary'
    },
    src: {
      type: String,
      required: false
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

      if (this.kind != 'image') {
        classes += `
          text-sm md:text-lg
          py-2 md:py-3
          px-6
          rounded-xl
          shadow-lg 
        `

        if (this.isPrimary) {
          classes += `
            bg-gradient-to-br from-f-green-foam to-f-blue-1
            text-gray-900
            font-medium
            border-2
            border-f-blue-1
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
      }

      classes += `
      ${this.customClasses}
      `

      return classes
    },

    isPrimary() {
      return this.kind == 'primary'
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
}
</script>