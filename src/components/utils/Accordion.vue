<template>
  <div>
    <details class="panel m-2 p-4">
      <summary class="is-clickable">
        <strong>{{ summary }}</strong>
      </summary>
      <slot></slot>
    </details>
  </div>
</template>

<style scoped>
details {
  max-height: 4rem;
}

details[open] {
  max-height: 10000vh;
}

details[open] > summary {
  margin-bottom: 1rem;
}

details {
  transition-duration: 0.2s;
}

details > summary {
  transition-duration: 0.2s;
}
</style>

<script>
export default {
  name: "Accordion",
  props: {
    summary: {
      type: String,
      required: true,
    },
  },
  computed: {},
};
</script>