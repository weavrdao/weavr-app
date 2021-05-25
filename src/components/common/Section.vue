<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style scoped>
.section {
  padding: 69px 20px;
  max-width: 68rem;
  margin: 20px auto;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  border-color: white;
  border-style: dashed;
  border-width: 1px;
}

.section h1 {
  font-weight: 400;
  font-size: 3.4375rem;
  line-height: 5.25rem;
  color: #FFFFFF;
  margin: 0;
  text-align: center;
}
</style>