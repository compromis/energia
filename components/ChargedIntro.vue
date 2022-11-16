<template>
  <section id="intro" class="intro">
    <h2 class="imagine" data-speed="0.22" data-lag="0.25">
      <span v-html="t.TITLE" />
      <span class="hide" />
    </h2>

    <ul class="things-to-imagine">
      <li class="intro-card first" data-speed="0.5" data-lag="0.25">
        <div id="energy" class="icon"></div>
        {{ t.BLOCK1 }}
      </li>
      <li class="intro-card second" data-speed="0.7" data-lag="0.25">
        <div id="invoice" class="icon"></div>
        {{ t.BLOCK2 }}
      </li>
      <li class="intro-card third" data-speed="0.9" data-lag="0.25">
        <div id="home" class="icon"></div>
        {{ t.BLOCK3 }}
      </li>
    </ul>   
  </section>
</template>

<script setup>
import lottie from 'lottie-web'

const { $gsap } = useNuxtApp()

defineProps({
  t: {
    type: Object,
    required: true
  }
})

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

  $gsap.from('.imagine', {
    scrollTrigger: {
      trigger: '.imagine',
      start: 'top 70%',
      end: '+=400',
      scrub: true,
      toggleClass: 'visible'
    },
    opacity: 0
  })

  $gsap.to('.imagine .hide', {
    scrollTrigger: {
      trigger: '.imagine',
      start: 'bottom center',
      end: '+=400',
      scrub: true
    },
    opacity: 1
  })

  const mm = $gsap.matchMedia()
  mm.add("(min-width: 800px)", () => {
    const cards = document.getElementsByClassName('intro-card')
    Object.values(cards).forEach(card => {
      $gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: '+=400',
          scrub: true
        },
        opacity: 0
      })
    })
  })

  mm.add("(max-width: 799px)", () => {    
    $gsap.from('.first', {
      scrollTrigger: {
        trigger: '.first',
        start: 'top 85%',
        end: '+=400',
        scrub: true
      },
      x: '-100vw',
      rotate: '45deg',
      opacity: 0
    })
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
  position: relative;
  width: fit-content;
  margin: 0 auto;
  font-family: var(--serif-font);
  background: linear-gradient(to right, var(--blue), var(--yellow));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: var(--text-2xl);
  letter-spacing: 0;
  line-height: .9;
  text-align: center;

  .hide {
    display: block;
    position: absolute;
    inset: 0;
    background: var(--black);
    opacity: 0;
  }
}

.things-to-imagine {
  margin: 0;
  padding: var(--main-padding);
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  .intro-card {
    display: flex;
    flex-direction: column;
    border: var(--border-width) var(--white) solid;
    border-radius: 2rem;
    padding: 2rem;
    font-size: var(--text-xl);
    line-height: 1;
    width: 33%;
    aspect-ratio: 1/1;
    background: var(--black);
    
    .icon {
      margin-bottom: 2rem;
      width: 2em;
      height: 2em;

      :deep(path) {
        stroke: var(--white);
        fill: var(--white);
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .imagine {
    margin-top: -25vh;
    margin-bottom: 25vh;
  }

  .things-to-imagine {
    flex-direction: column;

    .intro-card {
      width: 100%;
    }
  }
}
</style>