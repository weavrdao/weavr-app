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

    <div aria-live="assertive" class="fixed w-full bottom-0 right-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
      <div class="w-full flex flex-col items-center sm:items-end">
        <Alert v-if="alert != null" v-bind:show="alert != null" v-bind:type="alert.type" v-bind:title="alert.title"  v-bind:message="alert.message"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import HeaderHavigationBar from "./layout/navigation/HeaderHavigationBar.vue"
import Alert from "./views/common/Alert.vue"

export default {
  name: "AppBody",
  components: {
    HeaderHavigationBar,
    Alert,
  },
  computed: {
    ...mapGetters({
      alert: "activeAlert"
    })
  }
}
</script>