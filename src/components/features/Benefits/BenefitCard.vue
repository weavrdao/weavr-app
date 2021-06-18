<template>
  <div class="h-full">
    <Card :children="[benefit]">
      <template slot-scope="benefit">
        <div :class="containerClasses">
          <div class="
          font-bold
          text-center text-lg md:text-xl lg:text-2xl
          p-4
          ">
            {{ benefit.title }}
          </div>
          <div class="h-1 w-full bg-white shadow-blue-1-glow"></div>
          <div class="py-4">
            <div 
            v-for="b in benefit.benefits" :key="b"
            class="
            px-8 py-2
            font-medium text-md md:text-lg lg:text-xl
            "
            >
              <div>{{ b }}</div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../../common/Card'

export default {
  name: 'BenefitCard',
  components: {
    Card,
  },
  props: {
    benefit: {
      type: Object,
      required: true,
    },
    isBordered: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    containerClasses() {
      var classes = `
      h-full w-full
      rounded 
      self-stretch
      `

      if (this.isBordered) {
        classes += `
        border-4 shadow-blue-1-glow
        `
      }

      return classes
    }
  }
}
</script>