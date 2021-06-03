<template>
  <div>
    <button 
    type="button" 
    @click="onClick" 
    class="
    dark:border-gradient-br-blue-white-f-purple-1
    border-transparent 
    border-solid 
    border-2
    rounded-xl 
    text-gray-100 
    text-lg
    px-6
    py-2
    "
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
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    }
  },

  computed: {
    classes() {
      return {
        'button': true,
        'button--primary': this.primary,
        'button--secondary': !this.primary,
        [`button--${this.size}`]: true,
      };
    },
    style() {
      var style = {}

      // if (this.primary) {
      //   style['background-image'] = "linear-gradient(to bottom right," 
      //     + Colors.primary1 + "," 
      //     + Colors.primary2 + "," 
      //     + Colors.primary3 + ")"
      // } else {
      //   style['border-style'] = "solid"
      //   style['border-width'] = "2px"
      //   style['border-color'] = Colors.secondary1
      //   style['background-color'] = Colors.primary1
      //   style['color'] = Colors.secondary1
      // }

      return style
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
}
</script>