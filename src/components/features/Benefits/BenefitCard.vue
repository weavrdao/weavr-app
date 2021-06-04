<template>
  <div class="h-full">
    <Card :children="[benefit]">
      <template slot-scope="benefit">
        <div class="h-full my-4">
          <svg class="mx-auto h-12 w-12 text-f-blue-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              :d="benefit.iconSvgPath"
            />
          </svg>

          <div class="my-6 text-center">
            <div>{{ benefit.text }}</div>
          </div>

          <Button class="relative mb-0 mt-auto text-center" :label="benefit.cta"/>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../../common/Card'
import Button from '../../common/Button'

export default {
  name: 'BenefitCard',
  components: {
    Card,
    Button,
  },
  props: {
    benefit: {
      type: Object,
      required: true,
    }
  }
}
</script>