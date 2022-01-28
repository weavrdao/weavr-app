<template>
  <nav
    class="navbar is-fixed-top is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <div class="title">FRABRIC DAO</div>
      </a>

      <a
        role="button"
        ref="menuButton"
        :class="[navigation.isOpen ? 'is-active' : '', 'navbar-burger']"
        @click="menuToggle()"
        aria-label="menu"
        aria-expanded="false"
        data-target="frabric-navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="[navigation.isOpen ? 'is-active' : '', 'navbar-menu']">
      <div class="navbar-start">
        <a
          class="navbar-item"
          v-for="item in navigation.items"
          :key="item.name"
          v-on:click="transitTo(item.path)"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <SignerAddress />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SignerAddress from "../../views/address/SignerAddress.vue";
import { useRoute } from "vue-router";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HeaderHavigationBar",
  components: {
    SignerAddress,
  },
  data() {
    return {
      navigation: {
        isOpen: false,
        items: [
          { name: "My Assets", path: "/assets" },
          { name: "Marketplace", path: "/market" },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["currentNavigationItem"]),
  },
  methods: {
    ...mapActions(["goBack"]),
    isItemCurrent(item) {
      return item.path == useRoute().path;
    },
    transitTo(path) {
      this.$router.push(path);
      this.menuToggle();
    },
    menuToggle() {
      this.navigation.isOpen = !this.navigation.isOpen;
    },
  },
};
</script>