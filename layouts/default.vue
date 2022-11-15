<template>
  <div>
    <b-nav no-spacer collapse-at="lg">
      <template #logo-append>
        <nuxt-link to="/">Energia</nuxt-link>
      </template>

      <li class="nav-menu-item d-md-none">
        <nuxt-link to="/" v-if="route.name === 'cas'">VAL</nuxt-link>
        <nuxt-link to="/cas" v-else>CAS</nuxt-link>
      </li>
      <li class="nav-menu-item d-none d-md-flex">
        <nuxt-link to="/" v-if="route.name === 'cas'">En valencià</nuxt-link>
        <nuxt-link to="/cas" v-else>En castellano</nuxt-link>
      </li>
    </b-nav>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <nuxt-page />
        <div class="footer-wrapper">
          <div class="container">
            <b-footer variant="light" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'

const route = useRoute()
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: var(--black);
}
</style>