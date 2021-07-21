<template>
  <div class="h-full w-full overflow-auto">
    <div class="w-full fixed">
      <HeaderNavigation />
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
import HeaderNavigation from "./layout/navigation/HeaderHavigation"

export default {
  name: 'AppBody',
  components: {
    HeaderNavigation,
  },
}
</script>