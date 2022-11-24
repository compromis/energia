<template>
  <div>
    <b-nav no-spacer collapse-at="lg">
      <template #logo-append>
        <nuxt-link to="/">Energia</nuxt-link>
      </template>

      <template #basic-nav>
        <li class="nav-menu-item d-md-none">
          <nuxt-link :to="switchLocalePath('val')" v-if="locale === 'cas'">VAL</nuxt-link>
          <nuxt-link :to="switchLocalePath('cas')" v-else>CAS</nuxt-link>
        </li>
        <li class="nav-menu-item d-none d-md-flex">
          <nuxt-link :to="switchLocalePath('val')" v-if="locale === 'cas'">En valencià</nuxt-link>
          <nuxt-link :to="switchLocalePath('cas')" v-else>En castellano</nuxt-link>
        </li>
      </template>
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

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: var(--black);
}
</style>