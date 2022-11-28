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

  <div class="campaign-marquee base-level" :aria-label="$t('SUNNY.MARQUEE')">
    <MarqueeText :repeat="10" :duration="4">
      <svg class="icon-bolt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 40.04">
        <path fill="currentColor" d="M24.83,3.49c.46-1.07,.12-2.32-.83-3.01s-2.24-.63-3.12,.14L.86,18.14c-.78,.69-1.06,1.79-.7,2.76,.37,.97,1.31,1.63,2.35,1.63H11.23l-6.01,14.03c-.46,1.07-.12,2.32,.83,3.01,.95,.69,2.24,.63,3.12-.14L29.18,21.91c.78-.69,1.06-1.79,.7-2.76s-1.3-1.62-2.35-1.62h-8.72L24.83,3.49Z"/>
      </svg>
      {{ $t('SUNNY.MARQUEE') }}
    </MarqueeText>
  </div>
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

.campaign-marquee {
  background: var(--black);
  font-family: var(--base-font);
  color: var(--yellow);
  font-size: var(--text-md);
  padding: .5rem 0;
  height: var(--marquee-height);
  overflow: hidden;

  .icon-bolt {
    height: 1em;
    margin: 0 1rem;
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