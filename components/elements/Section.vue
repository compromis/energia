<template>
  <section :id="id" :class="['section', `section-${color}`]">
    <div class="card">
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
  padding: 2rem;
  font-family: var(--base-font);

  &-yellow {
    --section-color: var(--yellow);
  }

  &-blue {
    --section-color: var(--blue);
  }
}

.card {
  background: var(--section-color, var(--yellow));
  padding: 2rem;
  border-radius: 2rem;
  max-width: 2500px;
  margin: 0 auto;
}
</style>