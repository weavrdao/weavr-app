<template>
  <div>
    <CardLayout :children="this.benefits" gridClasses="grid grid-cols-1 lg:grid-cols-2 gap-12 my-4 auto-rows-fr">
      <template slot-scope="benefit">
        <BenefitCard :benefit="benefit"/>
      </template>
    </CardLayout>
  </div>
</template>

<script>
import CardLayout from '../../common/CardLayout'
import BenefitCard from './BenefitCard'

export default {
  name: 'BenefitCardLayout',
  components: {
    CardLayout,
    BenefitCard,
  },
  props: {
    benefits: {
      type: Array,
      required: true,
    }
  }
}
</script>