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
  title: 'Amb l\'energia, comencem pel sostre - Compromís',
  htmlAttrs: { lang: 'ca' },
  meta: [
  { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Imagina’t una energia sostenible i democràtica, barata i aprofitant espais i recursos existents sense destruir el territori' },
    { hid: 'keywords', name: 'keywords', content: 'energia, plaques solars, fotovoltaiques, renovables, emergencia climàtica, política, verds, compromis' },
    { hid: 'robots', name: 'robots', content: 'index, follow' },
    { hid: 'og:locale', property: 'og:locale', content: 'ca' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:description', property: 'og:description', content: 'Imagina’t una energia sostenible i democràtica, barata i aprofitant espais i recursos existents sense destruir el territori' },
    { hid: 'og:image', property: 'og:image', content: '/images/ogimage.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://comencempelsostre.com' },
    { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', property: 'twitter:title', content: 'Amb l\'energia, comencem pel sostre - Compromís' },
    { hid: 'twitter:description', property: 'twitter:description', content: 'Imagina’t una energia sostenible i democràtica, barata i aprofitant espais i recursos existents sense destruir el territori' },
    { hid: 'twitter:image', property: 'twitter:image', content: '/images/ogimage.png' },
    { hid: 'twitter:url', property: 'twitter:url', content: 'https://comencempelsostre.com' }
  ]
})

// Translations
const sunnyHero = {
  OVERTITLE: 'Amb l\'energia',
  TITLE: `Comencem<br>pel sostre`,
  MARQUEE: 'Un nou model energètic' 
}

const chargedIntro = {
  TITLE: `Imagina’t<br>una energia...`,
  BLOCK1: 'Sostenible i democràtica',
  BLOCK2: 'Amb una factura barata',
  BLOCK3: 'Aprofitant espais i recursos existents sense destruir el territori'
}

const rainOnParade = {
  QUOTE: '“Impossible!”',
  AUTHOR: 'Every Multinacional Energètica'
}

const newModel = {
  TITLE: 'Doncs ja estem començant a fer-ho a...',
  ITEM1: `Sostres d'instituts`,
  ITEM2: `Cementeris`,
  ITEM3: `Embassaments`,
  ITEM4: `Aparcaments`,
  P1: `
    La nostra proposta és fer-ho també
    <span id="new-model-annotate-1">a tots els sostres</span>,
    de cases, finques i indústries. A tots els municipis.
  `,
  P2: `
    Utilitzant el <span id="new-model-annotate-2">40%</span> dels sostres
    ja construits podem aconseguir abastir d’energia a
    <span id="new-model-annotate-3">tota la població</span>
    sense dependre de les multinacionals energètiques
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
  TITLE: `Calcula l’energia que es pot<br>generar al sostres del teu muncipi.`,
  PLACEHOLDER: 'Escriu el teu municipi...',
  EXPAND: 'Expandir llista',
  POPULATION: 'Població',
  CONSUMPTION: 'Consum per habitatge',
  POWER: 'Potència instal·lable',
  ENERGY_PRODUCED: 'Energia produïble en un any',
  PEOPLE_REACHED: 'Persones que podrien ser suministrades',
  OF_POP: 'de la població'
}

const shedLight = {
  TITLE: `Anem a posar llum sobre algunes cosetes <br class="optional" /> que es diuen per ahí...`,
  COL1: [
    {
      ID: 'Fake1',
      TITLE: 'L’energia solar només funciona en zones amb molta llum',
      CONTENT: `<p>El nostre territori és un dels que més potencial fotovoltaic té de tota la península ibèrica, on ja de per si és rendible i funciona a la perfecció. Quan el cel está núvol, la radiació solar que arriba als panells no és tan potent com la que arriba amb el cel despejat, però continua tenint un bon rendiment.</p>`
    },
    {
      ID: 'Fake2',
      TITLE: 'L’energia solar no funciona quan és de nit',
      CONTENT: `<p>De nit no es pot generar electricitat mitjançant l’energia solar, però amb la generada al llarg del dia i emmagatzemada a les bateries del propi sistema és més que suficient per a tindre electricitat les hores sense llum natural.</p>`
    },
    {
      ID: 'Fake3',
      TITLE: 'Invertir en energia solar és massa car',
      CONTENT: `<p>Des del 2010 els preus en la instal·lació i manteniment de plaques solars s’han desplomat i ja és més barat que mai. A això hem de sumar-li totes les ajudes que ja dona la Generalitat Valenciana i les que proposem per fer encara més accessible aquesta energia.</p>`
    },
    {
      ID: 'Fake7',
      TITLE: 'Les macroplantes solars són més eficients',
      CONTENT: `<p>A més de la depredació de territori que suposa la seua construcció, afectant a la flora i fauna de la zona, l’energia generada en aquestes macroplantes ha de traslladar-se a municipis a kilómetres de distància mitjançant línies d’alta tensió (MAT) que també afecten al territori. Durant aquest transport, l’energia generada pot tindre pèrdues de fins al 30%, un percentatge prou important.</p>`
    }
  ],
  COL2: [
    {
      ID: 'Fake4',
      TITLE: 'Segueixes depenent de les multinacionals energètiques',
      CONTENT: `<p>Una vegada instal·les les plaques solars, aquestes només depenen de tu o de la teua comunitat energètica local. De fet, amb aquest model cada Kw generat al teu sostre és un Kw que desapareix de la teua factura de la llum.</p>`
    },
    {
      ID: 'Fake5',
      TITLE: 'L’energia solar contamina igual que altres',
      CONTENT: `<p>Les emisions de CO2 de l’energia elèctrica actual són 5 vegades més contaminants que l’energia solar. Només el carbó ja emiteix 20 vegades més CO2 a l’atmòsfera que l’energia solar. Per tant, durant la vida útil d’un panell solar, l’estalvi en emissions de CO2 és molt major al que es consumeix durant la seua construcció.</p>`
    },
    {
      ID: 'Fake6',
      TITLE: 'Afecta a l’ecosistema',
      CONTENT: `<p>Aquest model no afecta a l’ecosistema, ja que aprofitem infraestructures ja existents sense necessitat de depredar el territori. De fet en alguns casos la seua instal·lació és beneficiosa, com és el cas dels embassaments de reg, evitant l’evaporació de l’aigua i refrigerant les pròpies plaques solars.</p>`
    }
  ]
}

const moreInfo = {
  TITLE: 'Més informació...',
  TODAY: 'Ajudes a les fotovoltaiques',
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