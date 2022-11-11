<template>
  <ElementsSection id="local" class="local" color="blue">
    <template #title>
      Calcula l’energia que es pot<br>generar al sostres del teu muncipi.
    </template>

    <div :class="['local-selector', { expanded: expanded || filter }]" key="search">
      <div class="local-search">
        <input type="search" v-model="filter" placeholder="Escriu el teu municipi..." />
      </div>
      <ul class="local-list">
        <li v-for="municipality in municipalities" :key="municipality.municipality" class="local-list-item">
          <button @click="selectedMunicipality = municipality">
            {{ municipality.municipality }}
          </button>
        </li>
      </ul>
      <button class="expand" @click="expanded = !expanded">
        <span class="visually-hidden">Expandir llista</span>
      </button>
    </div>
    <Teleport to="body">
      <Transition name="pop">
        <div v-if="selectedMunicipality" class="details" key="details">
          <article class="details-card">
            <div class="details-card-header">
              <h3 class="details-title">{{ selectedMunicipality.municipality}}</h3>
              <button @click="selectedMunicipality = null" class="close-button ms-auto">
                <IconsClose />
                <span class="visually-hidden">Tancar</span>
              </button>
            </div>
            <div class="details-card-content">
              <div class="details-overview">
                <div class="details-overview-row">
                  Població <span class="spacer"/> <strong>{{ selectedMunicipality.population }}</strong>
                </div>
                <div class="details-overview-row">
                  Consum per habitatge <span class="spacer"/> <strong>{{ selectedMunicipality.DkWh }} KWh</strong>
                </div>
                <div class="details-overview-row">
                  Potència instal·lable <span class="spacer"/> <strong>{{ selectedMunicipality.PMWp }} MWatt</strong>
                </div>
              </div>
              <div class="details-energy details-big">
                <strong class="number"><span id="annotatedEnergy">{{ selectedMunicipality.EGWh }} GWh</span></strong>
                <span class="label">Energia produïble en un any</span>
              </div>
              <div class="details-population details-big">
                <strong class="number"><span id="annotatedReach">{{ selectedMunicipality.reach }}</span> <span class="pill">{{ selectedMunicipality.factor }}% de la població</span></strong>
                <span class="label">Persones que podrien ser suministrades</span>
              </div>
            </div>
          </article>
          <button @click="selectedMunicipality = null" aria-hidden="true" class="backdrop"></button>
        </div>
      </Transition>
    </Teleport>
  </ElementsSection>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { annotate } from 'rough-notation'
import localData from '../content/local'

const selectedMunicipality = ref(null)
const filter = ref('')
const expanded = ref(false)

const municipalities = computed(() => localData.filter(mun => {
    if (!filter.value) return true
    const municipalityName = mun.municipality.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const inputFilter = filter.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return municipalityName.includes(inputFilter)
}))

watch(selectedMunicipality, async (newMunicipality) => {
  if (newMunicipality) {
    setTimeout(() => {
      const e = document.querySelector('#annotatedReach')
      const annotation = annotate(e, { type: 'highlight', color: '#f3b955' })
      annotation.show()
    }, 1500)

    setTimeout(() => {
      const e = document.querySelector('#annotatedEnergy')
      const annotation = annotate(e, { type: 'circle' })
      annotation.show()
    }, 500)
  }
})
</script>

<style lang="scss" scoped>
.local {
  &-selector {
    position: relative;

    .expand {
      appearance: none;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to bottom, #{rgba(#cee8ef, 0)}, var(--blue));
      border: 0;
      cursor: pointer;
      height: 100px;
    }

    &.expanded {
      .local-list {
        max-height: 3000px;
      }

      .expand {
        position: relative;
      }
    }
  }

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    max-height: 40vh;
    overflow: hidden;
    transition: max-height .5s ease;

    &-item  {
      margin: 0 .75rem .75rem 0;

      button {
        display: block;
        font-family: var(--base-font);
        background: rgba(0, 0, 0, .1);
        color: var(--black);
        border: 0;
        border-radius: 5rem;
        font-size: clamp(1rem, .85vw, 1.5rem);
        padding: .15rem 1rem;

        &:hover {
          background: var(--black);
          color: var(--blue);
        }
      }
    }
  }

  &-search {
    input {
      appearance: none;
      font-family: var(--base-font);
      font-size: clamp(1.75rem, 2.25vw, 2.75rem);
      padding: 0;
      border: 0;
      border-bottom: 2px var(--black) solid;
      background: transparent;
      width: 100%;
      margin: 1rem 0;

      &::placeholder {
        color: rgba(0, 0, 0, .35);
      }

      &:focus {
        outline: 0;
      }
    }
  }
}

.details {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 100;
  font-family: var(--base-font);

  &-card {
    position: relative;
    border: 2px var(--black) solid;
    border-radius: 1rem;
    --card-padding: 1.5rem;
    background: var(--white);
    z-index: 110;

    &-header {
      display: flex;
      align-items: center;
      border-bottom: 2px var(--black) solid;
      padding: var(--card-padding);
      line-height: 1;
      font-size: clamp(1.25rem, 2vw, 3rem); //md-lg

      .close-button {
        font-size: 1em;
      }
    }

    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "overview overview"
        "energy population";
      padding: var(--card-padding);
      gap: 1.5rem;
    }
  }

  &-title {
    font-family: var(--base-font);
    font-weight: normal;
    font-size: 1em;
    margin: 0;
  }

  &-overview {
    display: flex;
    grid-area: overview;
    font-size: clamp(1rem, 1.5vw, 2.5rem); // md-sm
    line-height: 1;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 4vh;

    &-row {
      display: flex;
      gap: .5rem;

      .spacer {
        flex-grow: 1;
        border-bottom: 1px dotted var(--black);
        margin: .15em 0;
      }
    }
  }

  &-energy {
    grid-area: energy;
  }

  &-population {
    grid-area: population;
  }

  &-big {
    line-height: 1;

    .number {
      display: block;
      font-size: clamp(2rem, 5vw, 4rem);

      .pill {
        background: rgba(0, 0, 0, 0.1);
        padding: .25em .75em;
        border-radius: 2rem;
        font-size: .25em;
        position: relative;
        top: -.3em;
        margin-left: .5rem;
        color: var(--black);
      }
    }

    .label {
      font-size: clamp(1rem, 1.5vw, 2.5rem);
    }
  }

  .backdrop {
    appearance: none;
    border: 0;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    cursor: default;
  }
}
</style>