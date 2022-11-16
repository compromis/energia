<template>
  <section :id="id" :class="['section', `section-${color}`]">
    <div class="card">
      <h2 class="card-title"><slot name="title" /></h2>

      <slot />
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
  color: {
    type: String,
    default: 'yellow'
  },

  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  $gsap.from('#' + props.id + ' .card', {
    scrollTrigger: {
      trigger: '#' + props.id + ' .card',
      start: "top bottom",
      end: "+=400",
      scrub: true
    },
    scale: 0.85
  })
})
</script>

<style lang="scss" scoped>
.section {
  background: var(--black);
  padding: var(--main-padding);
  padding-top: 0;
  font-family: var(--base-font);

  &-yellow {
    --section-color: var(--yellow);
  }

  &-blue {
    --section-color: var(--blue);
  }
}

.card {
  --card-padding: 2rem;
  background: var(--section-color, var(--yellow));
  padding: var(--card-padding);
  border-radius: 2rem;
  max-width: 2500px;
  margin: 0 auto;

  &-title {
    font-family: var(--serif-font);
    font-weight: bold;
    letter-spacing: 0;
    font-size: var(--text-lg); // lg
    margin-bottom: 10vh;
  }
}

@include media-breakpoint-down(sm) {
  .card {
    --card-padding: 1rem;

    &-title {
      margin-bottom: 5vh;
    }
  }
}
</style>