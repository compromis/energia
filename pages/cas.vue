<template>
  <main>
    <SunnyHero />
    <div class="base-level">
      <ChargedIntro />
      <RainOnParade />
      <BeenDoing>
        <ElementsPoint title="Qué estamos haciendo" class="pb-0">
          <p>Estamos <ElementsAnnotated id="BD1" type="highlight">instalando placas solares</ElementsAnnotated> en centros educativos, edificios públicos y cementerios, aprovechando los tejados para generar energía que baje la factura de la luz del vecindario.</p>
          <p>Estamos impulsando las <ElementsAnnotated id="BD3" type="highlight" :delay=".5">comunidades energéticas locales</ElementsAnnotated>, porque la instalación de fotovoltaicas en tejados y en los pueblos sea democrática y con una participación de la ciudadanía.</p>
          <p>Estamos proponiendo medidas para que la <ElementsAnnotated id="BD4" type="highlight" :delay="1">transición energética</ElementsAnnotated> sea respetuosa con el medio ambiente y priorice los intereses de las personas frente a los de las multinacionales.</p>
        </ElementsPoint>
      </BeenDoing>
      <NewModel>
        <ElementsPoint number="1" title="Comencemos por el tejado">
          <template #positive>
            <ElementsAnnotated id="M1">Instalar placas solares</ElementsAnnotated> en los tejados de las casas, fincas e industrias para nuestro modelo de autoconsumo.
            Nuestros tejados son el mejor espacio para hacerlo sin afectar a ningún ecosistema.
            Tan sólo poniendo placas en el <ElementsAnnotated id="M2" type="circle" :delay=".5">40%</ElementsAnnotated> de los tejados, la mayoría de los pueblos podrían generar más luz de
            La que consume su población actual. <a href="#local" @click.prevent="scrollToLocals">Mira aquí el potencial de tu pueblo.</a>
          </template>
          <template #negative>
            Que se construyan <abbr title="Líneas de muy alta tensión">MATs</abbr>, <ElementsAnnotated id="M5" type="strike-through"  :delay="1">autopistas eléctricas</ElementsAnnotated> insostenibles que depredan el territorio.
          </template>
        </ElementsPoint>
        <ElementsPoint number="2" title="Plantas sostenibles, próximas y democráticas">
          <template #positive>
            Si se tiene que instalar una planta solar debido a la demanda eléctrica industrial, <ElementsAnnotated id="M3">se tiene que ubicar en solares urbanos e industriales</ElementsAnnotated>, o en suelos sin valor agrícola o ambiental.
            Todo con la participación y el control democrático de ayuntamientos y la ciudadanía de cada municipio.
          </template>
          <template #negative>
            <ElementsAnnotated id="M6" type="crossed-off" :delay=".5">Macroplantas</ElementsAnnotated> que depredan el territorio y se hacen de espaldas a los pueblos. Prioricemos plantas pequeñas y democráticas.
          </template>
        </ElementsPoint>
        <ElementsPoint number="3" title="Una energética pública">
          <template #positive>
            Poner en marcha una <ElementsAnnotated id="M4" type="box">Agencia Valenciana de la Energía</ElementsAnnotated>, para acelerar la instalación de placas solares para autoconsumo en tejados,
            Y para participar en la producción y distribución de energía. Una compañía eléctrica pública, controlada por la ciudadanía,
            que no especule y que baje el precio de la factura de la luz.
          </template>
          <template #negative>
            Un modelo energético donde las <ElementsAnnotated id="M7" type="strike-through" :delay=".5">multinacionales eléctricas</ElementsAnnotated> especulen con el precio de la luz.
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
  title: 'Con la energía, comencemos por el tejado - Compromís',
  htmlAttrs: { lang: 'ca' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Imagina una energía sostenible y democrática, barata y aprovechando espacios y recursos existentes sin destruir el territorio' },
    { hid: 'keywords', name: 'keywords', content: 'energía, placas solares, fotovoltaicas, renovables, emergencia climática, política, verdes, compromis' },
    { hid: 'robots', name: 'robots', content: 'index, follow' },
    { hid: 'og:locale', property: 'og:locale', content: 'ca' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:description', property: 'og:description', content: 'Imagina una energía sostenible y democrática, barata y aprovechando espacios y recursos ya existentes sin destruir el territorio' },
    { hid: 'og:image', property: 'og:image', content: '/images/ogimage.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://comencempelsostre.com' },
    { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', property: 'twitter:title', content: 'Con la energía, comencemos por el tejado - Compromís' },
    { hid: 'twitter:description', property: 'twitter:description', content: 'Imagina una energía sostenible y democrática, barata y aprovechando espacios y recursos existentes sin destruir el territorio' },
    { hid: 'twitter:image', property: 'twitter:image', content: '/images/ogimage.png' },
    { hid: 'twitter:url', property: 'twitter:url', content: 'https://comencempelsostre.com' }
  ]
})

const { $emitter } = useNuxtApp()

const scrollToLocals = () => {
  console.log('scroll')
  $emitter.emit('scrollTo', '#local')
}
</script>
