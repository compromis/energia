<template>
  <section id="rain-on-parade">
    <div class="cloudy-storm" data-speed="0.5" data-lag="0.25">
      <GuysEvilGuy class="evil-guy" data-lag="0.2" />
      <div class="cloudy-quote" data-lag="0.05">
        <p class="cloudy-quote-text">{{ t.QUOTE }}</p>
        <span class="cloudy-quote-author">&mdash; {{ t.AUTHOR }}</span>
      </div>
    </div>
  </section>
  <Teleport to="body">
    <video aria-hidden="true" class="rain" width="100%" loop autoplay playsinline muted>
      <source src="/video/rain.mp4" type="video/mp4">
    </video>
  </Teleport>
</template>

<script setup>
const { $gsap } = useNuxtApp()

defineProps({
  t: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  const mm = $gsap.matchMedia()
  mm.add("(min-width: 800px)", () => {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".cloudy-storm",
        start: "top 70%",
        end: "+=1500",
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.5, max: 3 },
          delay: 0.2,
          ease: "power1.inOut"
        }
      }
    })

    tl.addLabel("start")
      .from(".cloudy-storm", { scale: 1.8, x: "-100vw", autoAlpha: 0, duration: 3 })
      .addLabel("spin")
      .to(".cloudy-storm", { x:"+=20", yoyo: true, repeat: 5, delay: 3, duration: 5 })
      .addLabel("end")
      .to(".cloudy-storm", { scale: 0.8, autoAlpha: 0, delay: 3, duration: 3 })

    $gsap.to('.rain', {
      scrollTrigger: {
        trigger: ".cloudy-storm",
        start: "top 70%",
        end: "+=1500",
        scrub: 1,
        toggleClass: { targets: ".rain", className: "active" }
      }
    })
  })

  mm.add("(max-width: 799px)", () => {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".cloudy-storm",
        start: "top 70%",
        end: "+=1000",
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.5, max: 3 },
          delay: 0.2,
          ease: "power1.inOut"
        }
      }
    })

    tl.addLabel("start")
      .from(".cloudy-storm", { scale: 1.8, x: "-100vw", autoAlpha: 0, duration: 3 })
      .addLabel("spin")
      .to(".cloudy-storm", { x:"+=20", yoyo: true, repeat: 5, delay: 3, duration: 5 })
      .addLabel("end")
      .to(".cloudy-storm", { scale: 0.8, autoAlpha: 0, delay: 3, duration: 3 })

    $gsap.to('.rain', {
      scrollTrigger: {
        trigger: ".cloudy-storm",
        start: "top 70%",
        end: "+=1000",
        scrub: 1,
        toggleClass: { targets: ".rain", className: "active" }
      }
    })
  })
})
</script>

<style lang="scss" scoped>
  #rain-on-parade {
    margin-bottom: 25vh;
  }

  .cloudy-storm {
    background: #7a949e;
    border-radius: 2rem;
    width: 70vw;
    margin: 0 auto;
    position: relative;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: -10vh;
  }

  .evil-guy {
    width: 25%;
  }

  .cloudy-quote {
    text-align: right;
    line-height: .8;

    &-text {
      font-family: var(--serif-font);
      font-size: var(--text-3xl);
      text-align: center;
    }

    &-author {
      font-size: var(--text-md2);
    }
  }

  .rain {
    object-fit: cover;
    mix-blend-mode: plus-lighter;
    position: fixed;
    inset: 0;
    display: flex;
    pointer-events: none;
    z-index: 1000;
    opacity: 0;
    transition: 1s ease;
    height: 100%;

    &.active {
      opacity: 1;
    }
  }

  @include media-breakpoint-down(sm) {
    .cloudy-storm {
      flex-direction: column;
      width: calc(100% - 30px * 2);
      margin-top: -50vh;
    }

    .cloudy-quote {
      text-align: center;
    }

    .evil-guy {
      width: 75%;
      margin-bottom: 2rem;
    }
  }
</style>