<template>
  <div 
    v-if="asset"
    class="
    w-full max-w-screen mx-auto
    "
  >
    <StackNavigationBar class="mt-8" @onBack="goBack">
      {{ 'New Proposal — ' + asset.address }}
    </StackNavigationBar>

    <div class="mt-12 mx-auto grid grid-cols-1 gap-8 lg:grid-flow-col-dense lg:grid-cols-3">
      <div class="space-y-6 lg:col-start-1 lg:col-span-2">
        <section>
          <div class="bg-level-1-light opacity-95 shadow-xl sm:rounded-lg">
            <div class="px-8 py-8 flex flex-col items-stretch">
              <label for="new-proposal-title" class="sr-only">Title</label>
              <div class="mt-1 h-12 relative rounded-lg bg-level-2-dark">
                <input 
                  type="text" 
                  name="new-proposal-title" 
                  id="new-proposal-title"
                  class="bg-level-2-dark border-0 focus:ring-action-blue focus:border-action-blue block w-full h-full sm:text-lg rounded-lg" 
                  placeholder="Title*"
                  v-model="title"
                  >
              </div>

              <label for="new-proposal-desc" class="sr-only">Description</label>
              <div class="mt-4 relative rounded-lg bg-level-2-dark">
                <textarea 
                  id="new-proposal-desc" 
                  name="new-proposal-desc" 
                  placeholder="Description*"
                  rows="4"
                  class="bg-level-2-dark border-0 focus:ring-action-blue focus:border-action-blue block w-full sm:text-md rounded-lg" 
                  v-model="description"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="lg:col-start-3 lg:col-span-1">
        <div class="bg-level-1-light opacity-95 shadow-xl rounded-lg">
          <div class="px-8 py-8 flex flex-col items-stretch">
            <label for="new-proposal-start-date" class="sr-only">Start Date and Time</label>
            <div class="mt-1 h-12 relative rounded-lg bg-level-2-dark">
              <input 
                type="text" 
                name="new-proposal-start-date" 
                id="new-proposal-start-date"
                class="bg-level-2-dark border-0 focus:ring-action-blue focus:border-action-blue block w-full h-full sm:text-lg rounded-lg" 
                placeholder="Start Date and Time"
                v-model="startDate"
                >
            </div>
            <label for="new-proposal-start-date" class="sr-only">End Date and Time</label>
            <div class="mt-4 h-12 relative rounded-lg bg-level-2-dark">
              <input 
                type="text" 
                name="new-proposal-end-date" 
                id="new-proposal-end-date"
                class="bg-level-2-dark border-0 focus:ring-action-blue focus:border-action-blue block w-full h-full sm:text-lg rounded-lg" 
                placeholder="End Date and Time"
                v-model="endDate"
                >
            </div>
            <div class="mt-8">
              <Button label="Publish" customClasses="w-full" @click="publish"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StackNavigationBar from '../layout/navigation/StackNavigationBar.vue'
import Button from '../views/common/Button.vue'

export default {
  name: 'NewProposal',
  components: {
    StackNavigationBar,
    Button,
  },
  props: {
    assetId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: "",
      description: "",
      startDate: "",
      endDate: ""
    }
  },
  computed: {
    ...mapGetters({
      assetMap: 'assetsById',
    }),

    asset() {
      return this.assetMap.get(this.assetId)
    },
  },
  methods: {
    ...mapActions({
      refresh: 'refreshProposalsDataForAsset',
      createProposal: 'createProposal'
    }),

    goBack() {
      this.$router.back()
    },

    publish() {
      if (this.title.length < 1 || this.description.length < 1) { return }

      this.createProposal({ assetId: this.assetId, title: this.title, description: this.description })
    }
  },
  mounted() {
    this.refresh({ assetId: this.assetId })
  },
}
</script>