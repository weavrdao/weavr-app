<template>
  <div class="sticky top-0 w-full z-50 lg:block">
    <div 
    class="
    w-full h-16
    py-8 px-8
    flex flex-row-reverse items-center gap-8
    dark:bg-f-purple-3 dark:text-white
    ">
      <div>
        <Button label="View Whitepaper" />
      </div>
      <div>
        <Button label="Join Our Discord" />
      </div>
    </div>
    <div class="h-0.5 bg-white"></div>
  </div>
</template>

<script>
import Button from '../common/Button.vue'

export default {
  name: 'HeaderNavigation',
  components: {
    Button,
  },
  data() {
    return {
      items: [], // TODO: Add binding to page contents
    }
  }
}
</script>