<template>
  <main>
    <SunnyHero />
    <div class="base-level">
      <ChargedIntro />
      <RainOnParade />
      <BeenDoing>
        <ElementsPoint title="Què estem fent" class="pb-0">
          <p>Estem <ElementsAnnotated type="highlight">instal·lant plaques solars</ElementsAnnotated> en centres educatius, edificis públics i cementeris, aprofitant les teulades per a generar energia que baixe la factura de la llum del veïnat.</p>
          <p>Estem impulsant les <ElementsAnnotated type="highlight" :delay=".5">comunitats energètiques locals</ElementsAnnotated>, perquè la instal·lació de fotovoltàica en teulades i en els pobles siga democràtica i amb una participació de la ciutadania.</p>
          <p>Estem proposant mesures perquè la <ElementsAnnotated type="highlight" :delay="1">transició energètica</ElementsAnnotated> siga respectuosa amb el mediambient i prioritze els interessos de les persones front als de les multinacionals.</p>
        </ElementsPoint>
      </BeenDoing>
      <NewModel>
        <ElementsPoint number="1" title="Comencem per la teulada">
          <template #positive>
            <ElementsAnnotated>Instal·lar plaques solars</ElementsAnnotated> a les teulades de les cases, finques i indústries per al nostre autoconsum.
            Les nostres teulades són el millor espai per fer-ho sense afectar a cap ecosistema.
            Només posant plaques en el <ElementsAnnotated type="circle" :delay=".5">40%</ElementsAnnotated> de les teulades, la majoria dels pobles podrien generar més llum de
            la que consumeix la seua població actual. <a href="#local" @click.prevent="scrollToLocals" class="d-none d-md-inline">Mira ací el potencial del teu poble.</a>
          </template>
          <template #negative>
            Que es construisquen <abbr title="Línies de molta alta tensió">MATs</abbr>, <ElementsAnnotated type="strike-through"  :delay="1">autopistes elèctriques</ElementsAnnotated> insostenibles que depreden el territori.
          </template>
        </ElementsPoint>
        <ElementsPoint number="2" title="Plantes sostenibles, pròximes i democràtiques">
          <template #positive>
            <p>
              Si s'ha d'instal·lar una planta solar degut a la demanda elèctrica industrial, <ElementsAnnotated>s'ha d'ubicar en solars urbans i industrials</ElementsAnnotated>, o en sòls sense valor agrícola o ambiental.
              Tot amb la participació i el control democràtic d'ajuntaments i la ciutadania de cada municipi.
            </p>
            <p>
              Amb els 51,7 milions de m<sup>2</sup> disponibles en polígons industrials i en solars urbans sense edificar, arribaríem als 2590WM de potència, el 43% de l’objectiu marcat per la UE per al territori valencià per a 2030
            </p>
          </template>
          <template #negative>
            <ElementsAnnotated type="crossed-off" :delay=".5">Macroplantes</ElementsAnnotated> que depreden el territori i es fan d'esquenes als pobles. Prioritzem plantes xicotetes i democràtiques.
          </template>
        </ElementsPoint>
        <ElementsPoint number="3" title="Una energètica pública">
          <template #positive>
            Posar en marxa una <ElementsAnnotated type="box">Agència Valenciana de l'Energia</ElementsAnnotated>, per accelerar la instal·lació de plaques per a autoconsum en teulades,
            i per a participar en la producció i distribució d'energia. Una companyia elèctrica pública, transparent, al servei de la ciutadania,
            que no especule i que abaixe el preu de la factura de la llum.
          </template>
          <template #negative>
            Un model energètic on les <ElementsAnnotated type="strike-through" :delay=".5">multinacionals elèctriques</ElementsAnnotated> especulen amb el preu de la llum.
          </template>
        </ElementsPoint>
      </NewModel>
      <LocalEnergy />
      <ShedLight />
      <MoreInfo />
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
    { hid: 'og:image', property: 'og:image', content: 'https://comencemperlateulada.com/images/ogimage.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://comencemperlateulada.com' },
    { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', property: 'twitter:title', content: 'Amb l\'energia, comencem pel sostre - Compromís' },
    { hid: 'twitter:description', property: 'twitter:description', content: 'Imagina’t una energia sostenible i democràtica, barata i aprofitant espais i recursos existents sense destruir el territori' },
    { hid: 'twitter:image', property: 'twitter:image', content: 'https://comencemperlateulada.com/images/ogimage.png' },
    { hid: 'twitter:url', property: 'twitter:url', content: 'https://comencemperlateulada.com' }
  ]
})

const { $emitter } = useNuxtApp()

const scrollToLocals = () => {
  $emitter.emit('scrollTo', '#local')
}
</script>