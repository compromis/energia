<template>
  <article :id="id" class="drawer">
    <header class="drawer-header">
      <h3>{{ title }}</h3>
      <span class="toggle"></span>
    </header>
    
    <div class="drawer-content">
      <slot />
    </div>
  </article>
</template>

<script setup>
import { annotate } from 'rough-notation'

const { $gsap } = useNuxtApp()

const props = defineProps({
  id: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  }
})

const hasAnnotated = ref(false)
onMounted(() => {
  $gsap.to(`#${props.id}`, {
    scrollTrigger: {
      trigger: `#${props.id}`,
      start: 'center 70%',
      toggleClass: 'active',
      onToggle: () => {
        if (!hasAnnotated.value) {
          const e = document.querySelector(`#${props.id} h3`)
          const annotation = annotate(e, { type: 'strike-through', multiline: true, color: '#f4520b', strokeWidth: 3 })
          annotation.show()
          hasAnnotated.value = true
        }
      }
    }
  })
})
</script>

<style lang="scss" scoped>
.drawer {
  border: 2px var(--black) solid;
  border-radius: 1rem;
  margin-bottom: 2rem;
  overflow: hidden;

  &-header {
    display: flex;
    border-bottom: 2px var(--black) solid;
    padding: 1rem 2rem;
    gap: 1rem;
    align-items: center;

    h3 {
      font-size: var(--text-base);
      margin: 0;
      letter-spacing: 0;
    }

    .toggle {
      position: relative;
      height: 1.5em;
      width: 3em;
      background: var(--black);
      margin-left: auto;
      border-radius: 2em;

      &::before {
        position: absolute;
        display: block;
        content: '';
        width: 1em;
        height: 1em;
        background: var(--yellow);
        top: .25em;
        left: .25em;
        border-radius: 2em;
        transition: left .5s ease;
      }
    }
  }

  &-content {
    position: relative;
    padding: 1rem 2rem;
    font-size: var(--text-base);
    min-height: 30vh;

    :deep(p:last-child) {
      margin-bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      background: var(--black);
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      transition: height .5s ease;
    }
  }

  &.active {
    .toggle {
      &::before {
        left: 1.75em;
        background: var(--blue);
      }
    }
    .drawer-content::before {
      height: 0;
    }
  }
}

@include media-breakpoint-down(sm) {
  .drawer {
    &-header {
      .toggle {
        flex-shrink: 0;
      }
    }
  }
}
</style>