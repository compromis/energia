<template>
  <section id="intro" class="intro">
    <h2 class="imagine" data-speed="0.22" data-lag="0.25">Imagina’t<br>una energia...</h2>

    <ul class="things-to-imagine">
      <li class="first" data-speed="0.5" data-lag="0.25">
        <div id="energy" class="icon"></div>
        Sostenible i democràtica</li>
      <li class="second" data-speed="0.7" data-lag="0.25">
        <div id="invoice" class="icon"></div>
        Amb una factura barata</li>
      <li class="third" data-speed="0.9" data-lag="0.25">
        <div id="home" class="icon"></div>
        Aprofitant espais i recursos existents sense destruir el territori</li>
    </ul>   
  </section>
</template>

<script setup>
import lottie from 'lottie-web'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById('energy'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/light-on/light-on.json'
  })

  lottie.loadAnimation({
    container: document.getElementById('invoice'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/discount/discount.json'
  })

  lottie.loadAnimation({
    container: document.getElementById('home'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/home/home.json'
  })

  gsap.from('.imagine', {
    scrollTrigger: {
      trigger: '.imagine',
      start: 'top 70%',
      end: '+=400',
      scrub: true,
    },
    opacity: 0
  })

  gsap.from('.first', {
    scrollTrigger: {
      trigger: '.first',
      start: 'top 85%',
      end: '+=400',
      scrub: true
    },
    opacity: 0
  })

  gsap.from('.second', {
    scrollTrigger: {
      trigger: '.second',
      start: 'top 85%',
      end: '+=400',
      scrub: true
    },
    opacity: 0
  })

  gsap.from('.third', {
    scrollTrigger: {
      trigger: '.third',
      start: 'top 85%',
      end: '+=400',
      scrub: true
    },
    opacity: 0
  })
})
</script>

<style lang="scss" scoped>
.intro {
  color: var(--white);
  overflow: hidden;
  padding: 100vh 0;
}

.imagine {
  width: fit-content;
  margin: 0 auto;
  font-family: var(--serif-font);
  background: linear-gradient(to right, var(--blue), var(--yellow));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(3rem, 5vw, 6rem); // xl
  letter-spacing: 0;
  line-height: .9;
  text-align: center;
}

.things-to-imagine {
  margin: 0;
  padding: var(--main-padding);
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  li {
    display: flex;
    flex-direction: column;
    border: var(--border-width) var(--white) solid;
    border-radius: 2rem;
    padding: 2rem;
    font-size: clamp(2rem, 3vw, 4rem); // xl
    line-height: 1;
    width: 33%;
    aspect-ratio: 1/1;
    background: var(--black);
    
    .icon {
      margin-bottom: 2rem;
      width: 2em;
      height: 2em;

      :deep(path) {
        stroke: white;
      }
    }
  }
}
</style>