<template>
  <header class="sunny-hero">
    <h1 class="campaign-title" data-speed="0.5" data-lag="0.5">
      <span class="campaign-title-tag">{{ $t('SUNNY.OVERTITLE') }}</span>
      <span class="campaign-title-main" v-html="$t('SUNNY.TITLE')"></span>
    </h1>

    <div class="night-time" id="night-time" aria-hidden="true" />
    <GuysSunnyGuy id="sunny-guy" class="floaty sunny-guy" aria-hidden="true" />
    <GuysPanelGuy id="panel-guy" class="panel-guy" aria-hidden="true" />
    <GuysSparkle id="sparkle" class="floaty sparkle" aria-hidden="true" />
  </header>

  <ElementsMarquee />
</template>

<script setup>
const { $gsap, $ScrollSmoother, $emitter, $t } = useNuxtApp()

onMounted(() => {
  let smoother
  if (!$ScrollSmoother.isTouch) {
    smoother = $ScrollSmoother.create({
      smooth: 0.5,
      effects: true,
      normalizeScroll: true
    })
  }

  $emitter.on('scrollTo', (tag) => {
    smoother.scrollTo(tag, true, "top 100px")
  })

  $gsap.to('#sunny-guy', {
    top: '10vh',
    rotation: 0,
    opacity: 1,
    y: '',
    duration: 2,
    delay: .5,
    ease: 'Expo.easeOut'
  })

  $gsap.to('#night-time', {
    opacity: 0,
    duration: 1,
    delay: .75,
    ease: 'none'
  })

  $gsap.to('#panel-guy', {
    scrollTrigger: {
      trigger: '.sunny-hero',
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    x: '+4vw'
  })

  $gsap.to('#sunny-guy', {
    scrollTrigger: {
      trigger: '.sunny-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: '+40vh'
  })

  $gsap.to('#sparkle', {
    scrollTrigger: {
      trigger: '.sunny-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: '+40vh'
  })
})
</script>

<style lang="scss" scoped>
/* Sky */
.sunny-hero {
  position: relative;
  display: grid;
  background-image: var(--daytime-gradient);
  height: calc(100vh - var(--marquee-height));
  place-items: center;
  overflow: hidden;
}

@supports(height: 100svh) {
  .sunny-hero {
    height: calc(100svh - var(--marquee-height));
  }
}

.night-time {
  position: absolute;
  inset: 0;
  background-image: var(--nighttime-gradient);
  pointer-events: none;
  z-index: 2;
}

/* Hero elements */
.campaign-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--headline-font);
  letter-spacing: 0;
  text-align: center;

  &-tag {
    display: inline-block;
    font-family: var(--serif-font);
    font-size: var(--text-md2);
    border: var(--border-width) var(--black) solid;
    border-radius: 10rem;
    padding: .6rem 1rem .4rem 1rem;
  }

  &-main {
    display: block;
    font-size: var(--text-4xl);
    line-height: .9;
    margin-top: .5rem;
  }
}

/* Guys */
.sunny-guy {
  position: absolute;
  top: 100vh;
  right: 10vw;
  width: 15vw;
  min-width: 11rem;
  opacity: 0;

  svg {
    width: 100%;
  }
}

.panel-guy {
  position: absolute;
  bottom: 0;
  left: 10vw;
  width: 15vw;
  min-width: 11rem;
  z-index: 1;
}

.sparkle {
  position: absolute;
  top: 20vh;
  left: 15vw;
  width: 4vw;
  min-width: 3rem;
}

/* Mobile */
@include media-breakpoint-down(sm) {
  .sunny-guy {
    width: 10vw;
    min-width: 9rem;
    right: 5vw;
  }

  .campaign-title {
    margin-top: -2vh;
  }
}
</style>