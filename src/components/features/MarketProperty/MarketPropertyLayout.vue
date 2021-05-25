<template>
  <div>
    <CardLayout :children="this.properties" :column-width-min="this.columnWidthMin">
      <template slot-scope="property">
        <MarketPropertyCard :property="property"/>
      </template>
    </CardLayout>
  </div>
</template>

<script>
import { Sizes } from "../../../theme/index"
import CardLayout from '../../common/CardLayout'
import MarketPropertyCard from './MarketPropertyCard'

export default {
  name: 'MarketPropertyLayout',
  components: {
    CardLayout,
    MarketPropertyCard,
  },
  data() {
    return {
      columnWidthMin: 30 * Sizes.gu,
    }
  },
  props: {
    properties: {
      type: Array,
      required: true,
    }
  }
}
</script>