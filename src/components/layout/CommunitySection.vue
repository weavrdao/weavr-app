<template>
  <BenefitCardLayout :benefits="benefits"/>
</template>

<script>
import * as ObjectDB from "../../data/mock/objects"
import BenefitCardLayout from "../features/Benefits/BenefitCardLayout"

export default {
  name: 'CommunitySection',
  components: {
    BenefitCardLayout,
  },
  data() {
    return {
      benefits: [],
    }
  },
  mounted() {
    ObjectDB.getAll(ObjectDB.Types.UserBenefits)
      .then((benefits) => { 
        console.log(benefits)

        const flatBenefits = [
            benefits['buyers'],
            benefits['sellers'],
            benefits['holders'],
        ]

        this.benefits = flatBenefits
      })
  },
}
</script>