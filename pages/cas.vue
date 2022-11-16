<template>
  <main>
    <SunnyHero :t="sunnyHero" />
    <div class="base-level">
      <ChargedIntro :t="chargedIntro" />
      <RainOnParade :t="rainOnParade" />
      <NewModel :t="newModel" />
      <LocalEnergy :t="localEnergy" />
      <ShedLight :t="shedLight" />
      <MoreInfo :t="moreInfo" />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Con la energía, empezamos por el tejado - Compromís',
  htmlAttrs: { lang: 'ca' },
  meta: [
  { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Imagínate una energía sostenible y democrática, barata y aprovechando espacios y recursos existentes sin destruir el territorio' },
    { hid: 'keywords', name: 'keywords', content: 'energia, placas solares, fotovoltaicas, renovables, energia climática, política, verdes, compromis' },
    { hid: 'robots', name: 'robots', content: 'index, follow' },
    { hid: 'og:locale', property: 'og:locale', content: 'ca' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:description', property: 'og:description', content: 'Imagínate una energía sostenible y democrática, barata y aprovechando espacios y recursos existentes sin destruir el territorio' },
    { hid: 'og:image', property: 'og:image', content: '/images/ogimage.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://comencempelsostre.com' },
    { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', property: 'twitter:title', content: 'Con la energía, empezamos por el tejado - Compromís' },
    { hid: 'twitter:description', property: 'twitter:description', content: 'Imagínate una energía sostenible y democrática, barata y aprovechando espacios y recursos existentes sin destruir el territorio' },
    { hid: 'twitter:image', property: 'twitter:image', content: '/images/ogimage.png' },
    { hid: 'twitter:url', property: 'twitter:url', content: 'https://comencempelsostre.com' }
  ]
})

// Translations
const sunnyHero = {
  OVERTITLE: 'Con la energía',
  TITLE: `Empezamos<br>por el tejado`,
  MARQUEE: 'Un nuevo model energético' 
}

const chargedIntro = {
  TITLE: `Imagínate<br>una energía...`,
  BLOCK1: 'Sostenible y democrática',
  BLOCK2: 'Con una factura barata',
  BLOCK3: 'Aprovechando espacios y recursos existentes sin destruir el territorio'
}

const rainOnParade = {
  QUOTE: '“¡Imposible!”',
  AUTHOR: 'Every Multinacional Energética'
}

const newModel = {
  TITLE: 'Pues ya estamos empezando a hacerlo en...',
  ITEM1: `Techos de institutos`,
  ITEM2: `Cementerios`,
  ITEM3: `Embases`,
  ITEM4: `Aparcamientos`,
  P1: `
    Nuestra propuesta es hacerlo también
    <span id="new-model-annotate-1">en todos los techos</span>,
    de casas, fincas e industrias. En todos los municipios.
  `,
  P2: `
    Utilizando el <span id="new-model-annotate-2">40%</span> de los techos
    ya construidos podemos conseguir abastecer de energía a
    <span id="new-model-annotate-3">toda la población</span>
    sin depender de multinacionales energéticas
  `,
  ALT1: `Plaques solars al sostre d'un institut`,
  ALT2: `Plaques solars al sostre del cementeri de València`,
  ALT3: `Plaques solars al sostre de les places d'un aparcament a l'aire lliure`,
  ALT4: `Plaques solars damunt d'un canal d'aigua`,
  ALT5: `Plaques solars al sostre d'un edifici de Paiporta`,
  ALT6: `Més plaques solars al sostre d'un institut`,
  ALT7: `Plaques solars damunt d'un embasament`,
}

const localEnergy = {
  TITLE: `Calcula la energía que se puede <br class="optional" /> generar en los techos de tu muncipio.`,
  PLACEHOLDER: 'Escribe tu municipio...',
  EXPAND: 'Expandir lista',
  POPULATION: 'Población',
  CONSUMPTION: 'Consumo por vivienda',
  POWER: 'Potencia instalable',
  ENERGY_PRODUCED: 'Energía producible en un año',
  PEOPLE_REACHED: 'Personas que podrían ser suministradas',
  OF_POP: 'de la población'
}

const shedLight = {
  TITLE: `Vamos a poner luz sobre algunas cosas <br class="optional" /> que se dicen por ahí...`,
  COL1: [
    {
      ID: 'Fake1',
      TITLE: 'Quan és de nit, no hi ha energia...',
      CONTENT: `<p>Fals perque bla bla bla</p>`
    },
    {
      ID: 'Fake2',
      TITLE: 'Quan és de nit, no hi ha energia...',
      CONTENT: `<p>Fals perque bla bla bla</p>`
    },
    {
      ID: 'Fake3',
      TITLE: 'Quan és de nit, no hi ha energia...',
      CONTENT: `<p>Fals perque bla bla bla</p>`
    }
  ],
  COL2: [
    {
      ID: 'Fake4',
      TITLE: 'Quan és de nit, no hi ha energia...',
      CONTENT: `<p>Fals perque bla bla bla</p>`
    },
    {
      ID: 'Fake5',
      TITLE: 'Quan és de nit, no hi ha energia...',
      CONTENT: `<p>Fals perque bla bla bla</p>`
    }
  ]
}

const moreInfo = {
  TITLE: 'Más información...',
  TODAY: 'Ajudes que pots demanar hui mateix',
  TODAY_ITEMS: [
    {
      TEXT: 'Instal·lacions d’autoconsum en l’àmbit domèstic: deducció fiscal.',
      LINK: 'https://www.gva.es/es/inicio/procedimientos?id_proc=19476'
    },
    {
      TEXT: 'Autoconsum per a ajuntaments',
      LINK: 'https://www.gva.es/va/inicio/procedimientos?id_proc=21988'
    },
    {
      TEXT: 'Comunitats Energètiques Locals i autoconsum',
      LINK: 'https://www.gva.es/va/inicio/procedimientos?id_proc=21988'
    },
    {
      TEXT: 'Programa Autoconsum i Emmagatzematge darrere del comptador',
      LINK: 'https://dogv.gva.es/datos/2021/10/04/pdf/2021_9892.pdf'
    }
  ],
}
</script>