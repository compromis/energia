<template>
  <ElementsSection id="been-doing" color="blue" class="been-doing">
    <template #title>{{ $t('DOING.TITLE') }}</template>
    
    <div class="content">
      <div class="image-scroller">
        <div id="been-doing-images" class="images">
          <div class="d-none d-md-block"><img src="../assets/images/paiporta.jpeg" :alt="$t('DOING.ALT1')" /></div>
          <div class="image image-1">
            <img src="../assets/images/solar.jpg" :alt="$t('DOING.ALT2')" />
            <span class="tag">{{ $t('DOING.ITEM1') }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div class="image image-2">
            <img src="../assets/images/cementeri.jpeg" :alt="$t('DOING.ALT3')" />
            <span class="tag">{{ $t('DOING.ITEM2') }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div class="image image-3">
            <img src="../assets/images/riu.webp" :alt="$t('DOING.ALT4')" />
            <span class="tag">{{ $t('DOING.ITEM3') }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div class="image image-4">
            <img src="../assets/images/parking.webp" :alt="$t('DOING.ALT5')" />
            <span class="tag">{{ $t('DOING.ITEM4') }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div>
            <img src="../assets/images/solar-2.jpg" :alt="$t('DOING.ALT6')" />
          </div>
          <div>
            <img src="../assets/images/riu-2.webp" :alt="$t('DOING.ALT7')" />
          </div>
        </div>
      </div>

      <slot />
    </div>
  </ElementsSection>
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
  const mm = $gsap.matchMedia()
  mm.add("(min-width: 800px)", () => {
    $gsap.to('#been-doing-images', {
      scrollTrigger: {
        trigger: '#been-doing-images',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      x: '-30vw'
    })
  })
})
</script>

<style lang="scss" scoped>
.been-doing {
  position: relative;
}

.content {
  font-size: var(--text-md);

  .image-scroller {
    overflow: hidden;
    margin: 5vh calc(var(--card-padding) * -1);
  }

  .images {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;

    img {
      height: 35vh;
      width: 25vw;
      object-fit: cover;
      border-radius: 1rem;
    }

    .image {
      position: relative;

      .tag {
        position: absolute;
        background: var(--white);
        z-index: 1;
        border: 3px var(--black) solid;
        font-family: var(--headline-font);
        border-radius: .75rem;
        padding: .5rem 1rem;
        line-height: 1;
        font-size: var(--text-md);
      }

      svg {
        position: absolute;
        top: -1em;
        right: -1.75em;
        width: 1.5em;
        z-index: 2;
      }

      &-1 .tag {
        left: -5%;
        top: 15%;
        transform: rotate(-2deg);
      }

      &-2 .tag {
        left: -8%;
        bottom: 10%;
        transform: rotate(3deg);
      }

      &-3 .tag {
        left: -8%;
        top: 22%;
        transform: rotate(1deg);
      }

      &-4 .tag {
        left: -2%;
        bottom: 20%;
        transform: rotate(-5deg);
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .content {
    .image-scroller {
      overflow: auto;
    }

    .images img {
      max-height: 20vh;
      width: auto;
    }
  }
}
</style>