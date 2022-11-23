<template>
  <ElementsSection id="new-model" class="new-model">
    <template #title>{{ t.TITLE }}</template>
    
    <div class="content">
      <div class="image-scroller">
        <div id="new-model-images" class="images">
          <div><img src="../assets/images/paiporta.jpeg" :alt="t.ALT1" /></div>
          <div class="image image-1">
            <img src="../assets/images/solar.jpg" :alt="t.ALT2" />
            <span class="tag">{{ t.ITEM1 }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div class="image image-2">
            <img src="../assets/images/cementeri.jpeg" :alt="t.ALT3" />
            <span class="tag">{{ t.ITEM2 }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div class="image image-3">
            <img src="../assets/images/riu.webp" :alt="t.ALT4" />
            <span class="tag">{{ t.ITEM3 }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div class="image image-4">
            <img src="../assets/images/parking.webp" :alt="t.ALT5" />
            <span class="tag">{{ t.ITEM4 }} <GuysSparkle aria-hidden="true" /></span>
          </div>
          <div>
            <img src="../assets/images/solar-2.jpg" :alt="t.ALT6" />
          </div>
          <div>
            <img src="../assets/images/riu-2.webp" :alt="t.ALT7" />
          </div>
        </div>
      </div>

      <div class="text">
        <h3>Per què comencem pel sostre?</h3>
        <p>
          Els nostres sostres són el millor testimoni de les hores de llum que tenim
          al nostre territori. A més, són <span class="annotate" data-type="underline">infraestrcutres existents</span> on instal·lar plaques solars no afecta a cap ecosistema
          o activitat medioambiental.
        </p>
        <p>Per això, volem omplir fins el <span class="annotate" data-type="circle">40%</span> dels sostres de cases, finques i indústries amb plaques solars. Per aprofitar tota eixa energia que els sol ens dona i dia de hui desaprofitem.</p>

        <h3>I després dels sostres?</h3>
        <p>També instal·larem plaques solars a solars urbans i industrials i sols sense ús agricola ni forestal.</p>

        <h3>Anem a crear l'Agència Valenciana de l'Energia</h3>
        <p>
          Una energètica pública que comercialitze i puga emmagatzemar aquesta energia, que a més informarà i ajudarà amb la burocràcia a aquelles persones que es vullguen sumar a la transformació del model energètic valencià.
        </p>
        <p>
          A més d'aquesta ajuda, l'energètica pública també podrà comprar-te els excedents d'energia a un preu just, fent que arribe a gent vulnerable i contribuirà en el mercat energètic a que baixe la factura de la llum a aquelles persones que encara no tinguen plaques solars instal·lades.
        </p>

        <h3>Comunitats energètiques locals</h3>
        <p>dasdsa</p>
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
  const annotations = document.querySelectorAll('.annotate')
  annotations.forEach(annotation => {
    // 
  })

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

  const mm = $gsap.matchMedia()
  mm.add("(min-width: 800px)", () => {
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
})
</script>

<style lang="scss" scoped>
.new-model {
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
      height: 30vh;
      width: 25vw;
      object-position: cover;
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
        top: 10%;
        transform: rotate(-2deg);
      }

      &-2 .tag {
        left: -8%;
        bottom: 10%;
        transform: rotate(3deg);
      }

      &-3 .tag {
        left: -8%;
        top: 20%;
        transform: rotate(1deg);
      }

      &-4 .tag {
        left: -2%;
        bottom: 20%;
        transform: rotate(-5deg);
      }
    }
  }

  .text {
    max-width: 60ch;

    h3 {
      font-size: clamp(1.25rem, 3vw, 2.25rem);
      margin-bottom: .5em;
      margin-top: 1.25em;
    }

    p {
      line-height: 1.25;
      margin-bottom: .5em;
      font-size: clamp(1.25rem, 3vw, 2.25rem);
    }
  }
}

@include media-breakpoint-down(sm) {
  .content {
    .image-scroller {
      overflow: auto;
    }

    .images img {
      max-height: 20vh;
    }
  }
}
</style>