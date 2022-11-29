<template>
  <div>
    <BNav no-spacer collapse-at="lg">
      <template #logo-append>
        <NuxtLink to="/">Energia</NuxtLink>
      </template>

      <template #basic-nav>
        <li class="nav-menu-item d-md-none">
          <NuxtLink to="/" v-if="route.name === 'cas'">VAL</NuxtLink>
          <NuxtLink to="/cas" v-else>CAS</NuxtLink>
        </li>
        <li class="nav-menu-item d-none d-md-flex">
          <NuxtLink to="/" v-if="route.name === 'cas'">En valencià</NuxtLink>
          <NuxtLink to="/cas" v-else>En castellano</NuxtLink>
        </li>
      </template>
    </BNav>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <NuxtPage />
        <div class="footer-wrapper">
          <div class="container">
            <BFooter variant="light" />
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
const router = useRouter()
const { $ScrollTrigger } = useNuxtApp()
router.afterEach(() => {
  $ScrollTrigger.getAll().forEach(t => t.kill())
})

onMounted(() => {
  const originalTitle = document.title;
  document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? 'Energia' : originalTitle
  })
})
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: var(--black);
}
</style>