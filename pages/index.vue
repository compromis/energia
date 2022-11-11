<template>
  <div id="smooth-wrapper">
    <main id="smooth-content">
      <SunnyHero />
      <div class="base-level">
        <ChargedIntro />
        <RainOnParade />
        <NewModel />
        <LocalEnergy />
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  script: [
    { hid: 'gsap', src: 'https://assets.codepen.io/16327/ScrollSmoother.min.js' }
  ]
})
</script>

<style lang="scss" scoped>
main {
  color: var(--black);
  background: var(--black);
  --main-padding: 2rem;
  font-family: var(--base-font);
}
</style>