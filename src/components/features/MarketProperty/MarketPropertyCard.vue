<template>
  <div>
    <Card :children="[property]" :is-inside-layout="true">
      <template slot-scope="property">
        <img class="property-image" :src="property.picture_url" alt="property.address1">

        <div class="property-info">
          <div class="property-info-header">Address</div>
          <div class="property-info-value">{{ property.address1 }}</div>

          <div class="property-info-header">Total Asset Value</div>
          <div class="property-info-value">${{ property.total_asset_value }}</div>

          <div class="property-info-header">Rent Income</div>
          <div class="property-info-value">${{ property.rental_income }}</div>
        </div>

        <Button :primary="false" label="Details" class="property-details-button"/>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../../common/Card'
import Button from '../../common/Button'

export default {
  name: 'MarketPropertyCard',
  components: {
    Card,
    Button,
  },
  props: {
    property: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.property-image {
  position: relative;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.property-info {
  margin-top: 16px;
}
.property-info-header {
  text-align: left;
  font-weight: 800;
  font-size: 1em;
  padding: 0 16px;
}
.property-info-value {
  text-align: left;
  font-weight: 400;
  font-size: 1.5em;
  padding: 0 16px;
}
.property-details-button {
  position: relative;
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
}
</style>