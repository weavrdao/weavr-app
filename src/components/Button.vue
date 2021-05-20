<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import { Colors } from '../theme/index'

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

      if (this.primary) {
        style['background-image'] = "linear-gradient(to bottom right," 
          + Colors.primary1 + "," 
          + Colors.primary2 + "," 
          + Colors.primary3 + ")"
      } else {
        style['border-style'] = "solid"
        style['border-width'] = "2px"
        style['border-color'] = Colors.secondary1
        style['background-color'] = Colors.primary1
        style['color'] = Colors.secondary1
      }

      return style
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style scoped>
.button {
  font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.2em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

}
.button:hover {
  opacity: 80%;
}
.button--primary {
  color: white;
}
.button--secondary {
  color: #333;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>