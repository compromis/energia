<template>
  <ElementsSection id="new-model" class="new-model">
    <template #title>{{ t.TITLE }}</template>
    
    <div class="content">
      <ul class="list">
        <li><IconsArrow /> {{ t.ITEM1 }}</li>
        <li><IconsArrow /> {{ t.ITEM2 }}</li>
        <li><IconsArrow /> {{ t.ITEM3 }}</li>
        <li><IconsArrow /> {{ t.ITEM4 }}</li>
      </ul>

      <div class="image-scroller">
        <div id="new-model-images" class="images">
          <img src="../assets/images/solar.jpg" :alt="t.ALT1" />
          <img src="../assets/images/cementeri.jpeg" :alt="t.ALT2" />
          <img src="../assets/images/parking.webp" :alt="t.ALT3" />
          <img src="../assets/images/riu.webp" :alt="t.ALT4" />
          <img src="../assets/images/paiporta.jpeg" :alt="t.ALT5" />
          <img src="../assets/images/solar-2.jpg" :alt="t.ALT6" />
          <img src="../assets/images/riu-2.webp" :alt="t.ALT7" />
        </div>
      </div>

      <div class="text">
        <p class="first-p" v-html="t.P1" />
        <p class="second-p" v-html="t.P2" />
      </div>
    </div>
  </ElementsSection>
</template>

<script setup>
import { annotate } from 'rough-notation'

const { $gsap } = useNuxtApp()

defineProps({
  t: {
    type: Object,
    required: true
  }
})

const hasAnimated = reactive([false, false, false])

onMounted(() => {
  $gsap.to('#new-model-annotate-1', {
    scrollTrigger: {
      trigger: '#new-model-annotate-1',
      start: 'top 80%',
      end: '+=200',
      onToggle: () => {
        if (!hasAnimated[0]) {
          const e = document.querySelector('#new-model-annotate-1')
          const annotation = annotate(e, { type: 'box', strokeWidth: 4, multiline: true })
          annotation.show()
        }
        hasAnimated[0] = true
      }
    }
  })

  $gsap.to('#new-model-annotate-2', {
    scrollTrigger: {
      trigger: '#new-model-annotate-2',
      start: 'top 80%',
      end: '+=200',
      onToggle: () => {
        if (!hasAnimated[1]) {
          setTimeout(() => {
            const e = document.querySelector('#new-model-annotate-2')
            const annotation = annotate(e, { type: 'circle', strokeWidth: 4 })
            annotation.show()
          }, 1000)
        }
        hasAnimated[1] = true
      }
    }
  })

  $gsap.to('#new-model-annotate-3', {
    scrollTrigger: {
      trigger: '#new-model-annotate-3',
      start: 'top 80%',
      end: '+=200',
      onToggle: () => {
        if (!hasAnimated[2]) {
          setTimeout(() => {
          const e = document.querySelector('#new-model-annotate-3')
          const annotation = annotate(e, { type: 'underline', strokeWidth: 4 })
          annotation.show()
          }, 1500)
        }
        hasAnimated[2] = true
      }
    }
  })

  $gsap.to('#new-model-images', {
    scrollTrigger: {
      trigger: '#new-model-images',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    x: '-30vw'
  })
})
</script>

<style lang="scss" scoped>
.new-model {
  position: relative;
}

.content {
  font-size: var(--text-md);

  .list {
    max-width: 45%;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      line-height: 1;
      margin-bottom: .5em;
    }

    svg {
      height: .5em;
      margin-right: .25em;
      flex-shrink: 0;
    }
  }

  .first-p {
    margin-bottom: 10vh;
  }

  .image-scroller {
    overflow: hidden;
    margin: 5vh calc(var(--card-padding) * -1);
  }

  .images {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;

    img {
      height: 30vh;
      border-radius: 1rem;
    }
  }

  .text {
    display: flex;

    p {
      width: 50%;
      line-height: 1.25;
    }
  }
}

@include media-breakpoint-down(sm) {
  .content {
    .text {
      flex-direction: column;

      p {
        width: 100%;
      }
    }
  }
}
</style>