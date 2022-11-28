<template>
  <ElementsSection id="more-info" class="more-info" color="blue">
    <template #title>
      Fes difusió
    </template>

    <div class="share">
      <a href="https://twitter.com/intent/tweet/?text=&url=https://comencempelsostre.com&hashtags=ComencemPelSostre" class="bigass-button">
        <IconsTwitter />
        <span>
          Fes un <strong>Tweet</strong>
        </span>
      </a>

      <a href="whatsapp://send?text=https://comencempelsostre.com" class="bigass-button">
        <IconsWhatsApp />
        <span>
          Passa-ho per <strong>WhatsApp</strong>
        </span>
      </a>

      <a href="https://t.me/share/url?url=https://comencempelsostre.com&text=" class="bigass-button">
        <IconsTelegram />
        <span>
          Passa-ho per <strong>Telegram</strong>
        </span>
      </a>

      <a href="https://www.facebook.com/sharer/sharer.php?u=https://comencempelsostre.com" class="bigass-button">
        <IconsFacebook />
        <span>
          Comparteix-ho a <strong>Facebook</strong>
        </span>
      </a>
    </div>

    <h3 class="separate">Més informació</h3>
    <ul class="docs">
      <li>
        <a href="/docs/Model-Energetic.pdf">
          <IconsDocument />
          Document explicatiu
        </a>
      </li>
    </ul>

    <h3 class="mt-5">{{ $t('INFO.TODAY') }}</h3>
    <ul class="docs">
      <li v-for="(item, i) in todayDocs" :key="i">
        <a :href="item.url" target="_blank" rel="noopener noreferer">
          <IconsDocument />
          {{ item.text }}
        </a>
      </li>
    </ul>

    <h3 class="mt-5">Informes</h3>
    <ul class="docs">
      <li>
        <a href="https://www.ivace.es/index.php/es/documentos/descargas/func-startdown/6326/lang,es-es/" target="_blank" rel="noopener noreferer">
          <IconsDocument /> Informe Aprovechamiento Fotovoltaico
        </a>
      </li>
    </ul>
  </ElementsSection>
</template>

<script setup>
const todayDocs = [
  {
    text: "Instal·lacions d’autoconsum en l’àmbit domèstic: deducció fiscal.",
    url: "https://www.gva.es/es/inicio/procedimientos?id_proc=19476"
  },
  {
    text: "Autoconsum per a ajuntaments",
    url: "https://www.gva.es/va/inicio/procedimientos?id_proc=21988"
  },
  {
    text: "Comunitats Energètiques Locals i autoconsum",
    url: "https://www.gva.es/va/inicio/procedimientos?id_proc=21988"
  },
  {
    text: "Programa Autoconsum i Emmagatzematge darrere del comptador",
    url: "https://dogv.gva.es/datos/2021/10/04/pdf/2021_9892.pdf"
  }
]
</script>

<style lang="scss" scoped>
.docs {
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  
  li {
    display: flex;
    font-size: 1.25rem;
  }

  a {
    color: var(--black);
    display: flex;
    align-items: center;
    gap: .25rem;
  }

  svg {
    height: 1em;
    width: 1em;
  }
}

.separate {
  margin-top: 10vh;
  margin-bottom: 1rem;
}

.share {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.bigass-button {
  border: 3px var(--black) solid;
  background: var(--white);
  font-size: var(--text-base);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  color: var(--black);
  border-radius: 10em;
  padding: .5em 1.5em;
  line-height: 1;
  transition: .5s ease;
  box-shadow: 0 0 0 #000;

  svg {
    height: 2em;
    width: 2em;
  }

  strong {
    display: block;
    font-size: var(--text-md);
  }

  &:hover {
    text-decoration: none;
    box-shadow: -.25em .25em 0 #000;
    transform: translate(.25em, -.25em);
  }
}

@include media-breakpoint-down(md) {
  .bigass-button {
    width: 100%;
  }
}
</style>