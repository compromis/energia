<template>
  <ElementsSection id="new-model" class="new-model">
    <template #title>Doncs ja estem començant a fer-ho a...</template>
    
    <div class="content">
      <ul class="list">
        <li>
          <IconsArrow />
          Sostres d'instituts
        </li>
        <li>
          <IconsArrow />
          Cementeris
        </li>
        <li>
          <IconsArrow />
          Embasaments
        </li>
        <li>
          <IconsArrow />
          Aparcaments
        </li>
      </ul>

      <div class="image-scroller">
        <div id="new-model-images" class="images">
          <img src="../assets/images/solar.jpg" alt="Plaques solars al sostre d'un institut" />
          <img src="../assets/images/cementeri.jpeg" alt="Plaques solars al sostre del cementeri de València" />
          <img src="../assets/images/parking.webp" alt="Plaques solars al sostre de les places d'un aparcament a l'aire lliure" />
          <img src="../assets/images/riu.webp" alt="Plaques solars damunt d'un canal d'aigua" />
          <img src="../assets/images/paiporta.jpeg" alt="Plaques solars al sostre d'un edifici de Paiporta" />
          <img src="../assets/images/solar-2.jpg" alt="Més plaques solars al sostre d'un institut" />
          <img src="../assets/images/riu-2.webp" alt="Plaques solars damunt d'un embasament" />
        </div>
      </div>

      <div class="text">
        <p class="first-p">
          La nostra proposta és fer-ho també
          <span id="new-model-annotate-1">a tots els sostres</span>,
          de cases finques i indústries. A tots els municipis.
        </p>

        <p>
          Utilitzant el <span id="new-model-annotate-2">40%</span> dels sostres,
          ja construits podem aconseguir abastir d’energia a
          <span id="new-model-annotate-3">tota la població</span>
          sense dependre de les multinacionals energètiques
        </p>
      </div>
    </div>
  </ElementsSection>
</template>

<script setup>
import { annotate } from 'rough-notation'

const { $gsap } = useNuxtApp()

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
    }

    svg {
      height: .5em;
      margin-right: .25em;
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
</style>