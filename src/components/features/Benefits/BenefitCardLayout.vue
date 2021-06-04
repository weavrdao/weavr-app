<template>
  <div>
    <CardLayout :children="this.benefits">
      <template slot-scope="benefit">
        <BenefitCard :benefit="benefit"/>
        <Button class="text-center" :label="benefit.cta"/>
      </template>
    </CardLayout>
  </div>
</template>

<script>
import CardLayout from '../../common/CardLayout'
import BenefitCard from './BenefitCard'
import Button from '../../common/Button'

export default {
  name: 'BenefitCardLayout',
  components: {
    CardLayout,
    BenefitCard,
    Button,
  },
  props: {
    benefits: {
      type: Array,
      required: true,
    }
  }
}
</script>