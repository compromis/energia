<template>
  <section :id="id" :class="['section', `section-${color}`]">
    <div class="card">
      <h2 class="card-title"><slot name="title" /></h2>

      <slot />
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  gsap.from('#' + props.id + ' .card', {
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
    font-size: clamp(2rem, 3vw, 4rem); // lg
    margin-bottom: 10vh;
  }
}
</style>