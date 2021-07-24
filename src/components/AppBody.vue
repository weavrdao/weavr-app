<template>
  <div class="h-full w-full overflow-auto">
    <div class="z-50 w-full fixed">
      <HeaderHavigationBar />
    </div>

    <div class="py-24">
      <main>
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-16">
          <RouterView/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderHavigationBar from './layout/navigation/HeaderHavigationBar.vue'

export default {
  name: 'AppBody',
  components: {
    HeaderHavigationBar,
  },
}
</script>