<template>
  <header class="sunny-hero">
    <div class="night-time" id="night-time" />
    <GuysSunnyGuy id="sun" class="floaty sunny-guy" />
    <GuysSolarGuy class="solar-guy" />
    <GuysSparkle class="floaty sparkle" />
    <h1 class="campaign-title">
      <span class="campaign-title-tag">Amb l'energia</span>
      <span class="campaign-title-main">Comencem<br>pel sostre</span>
    </h1>
  </header>
  <div class="campaign-marquee base-level">
    <ClientOnly fallback-tag="span" fallback="Carregant...">
      <MarqueeText :repeat="10" :duration="4">
        <svg class="icon-bolt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 40.04">
          <path fill="currentColor" d="M24.83,3.49c.46-1.07,.12-2.32-.83-3.01s-2.24-.63-3.12,.14L.86,18.14c-.78,.69-1.06,1.79-.7,2.76,.37,.97,1.31,1.63,2.35,1.63H11.23l-6.01,14.03c-.46,1.07-.12,2.32,.83,3.01,.95,.69,2.24,.63,3.12-.14L29.18,21.91c.78-.69,1.06-1.79,.7-2.76s-1.3-1.62-2.35-1.62h-8.72L24.83,3.49Z"/>
        </svg>
          Un nou model energètic
      </MarqueeText>
    </ClientOnly>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)

onMounted(() => {
  gsap.from('#sun', {
    y: '100vh',
    rotation: 50,
    duration: 2,
    delay: .5,
    ease: CustomEase.create('custom', 'M0,0 C0,0 0.05,0.228 0.09,0.373 0.12,0.484 0.139,0.547 0.18,0.654 0.211,0.737 0.235,0.785 0.275,0.864 0.291,0.896 0.303,0.915 0.325,0.944 0.344,0.97 0.356,0.989 0.38,1.009 0.413,1.039 0.441,1.058 0.48,1.08 0.496,1.089 0.51,1.091 0.53,1.095 0.552,1.099 0.567,1.101 0.59,1.099 0.623,1.097 0.646,1.094 0.68,1.085 0.768,1.061 0.798,0.998 0.888,0.982 0.964,0.968 1,1 1,1')
  });

  gsap.to("#night-time", { opacity: 0, duration: 1, delay: .75, ease: 'none' })
})
</script>

<style lang="scss" scoped>
.sunny-hero {
  position: relative;
  display: grid;
  background: linear-gradient(to bottom, var(--blue), var(--light-yellow));
  height: calc(100vh - var(--marquee-height));
  place-items: center;
}

.night-time {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    180deg,
    hsla(263deg 22% 20%) 0%,
    hsla(285deg 24% 24% / 97%) 33%,
    hsla(308deg 28% 27% / 93%) 48%,
    hsla(323deg 35% 33% / 90%) 58%,
    hsla(334deg 41% 38% / 85%) 67%,
    hsla(343deg 44% 43% / 80%) 74%,
    hsla(352deg 44% 49% / 75%) 81%,
    hsla(2deg 51% 53% / 75%) 89%,
    hsla(12deg 62% 54% / 75%) 100%
  );
  z-index: 2;
}

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
    font-size: clamp(1rem, 2vw, 2.5rem);
    border: var(--border-width) var(--black) solid;
    border-radius: 10rem;
    padding: .6rem 1rem .4rem 1rem;
  }

  &-main {
    display: block;
    font-size: clamp(6rem, 10vw, 12rem);
    line-height: .9;
    margin-top: .5rem;
  }
}

.campaign-marquee {
  background: var(--black);
  font-family: var(--base-font);
  color: var(--yellow);
  font-size: clamp(1.5rem, 2vw, 3rem);
  padding: .5rem 0;
  height: var(--marquee-height);
  overflow: hidden;

  .icon-bolt {
    height: 1em;
    margin: 0 1rem;
  }
}

.floaty {
  position: fixed;
  z-index: 0;
}

.sunny-guy {
  top: 10vh;
  right: 10vw;
  width: 15vw;
  min-width: 11rem;
}

.solar-guy {
  position: absolute;
  bottom: 0;
  left: 10vw;
  width: 15vw;
  min-width: 11rem;
  z-index: 1;
}

.sparkle {
  top: 20vh;
  left: 15vw;
  width: 4vw;
  min-width: 3rem;
}
</style>