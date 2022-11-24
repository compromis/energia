<template>
  <article class="point">
    <h3 class="point-title"><span class="number" v-if="number">{{ number }}</span> {{ title }}</h3>
    <div class="point-text point-default" v-if="$slots.default">
      <slot  />
    </div>
    <div class="point-text point-positive" v-if="$slots.positive">
      <h4><IconsCheck /> {{ $t('MODEL.POSITIVE') }}</h4>

      <slot name="positive" />
    </div>
    <div class="point-text point-negative multiply-annotations" v-if="$slots.negative">
      <h4><IconsTimes /> {{ $t('MODEL.NEGATIVE') }}</h4>

      <slot name="negative" />
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  number: {
    type: String,
    default: false
  }
})
</script>

<style lang="scss">
.point {
  border-top: 2px var(--black) solid;
  display: grid;
  grid-template-columns: minmax(200px, 20vw) 1fr 1fr;
  padding: 2rem 0;
  gap: 3rem;
  font-size: var(--text-md2);

  &-title {
    display: flex;
    gap: .5em;
    align-items: baseline;
    font-size: inherit;
    line-height: 1.25;

    .number {
      display: flex;
      background: var(--black);
      color: var(--yellow);
      height: 1.5em;
      width: 1.5em;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      font-size: .85em;
    }
  }

  &-text {
    line-height: 1.25;

    h4 {
      display: flex;
      border: 2px var(--black) solid;
      border-radius: 2em;
      width: fit-content;
      padding: .25em .5em;
      margin-bottom: .75em !important;
      text-transform: uppercase;
      align-items: center;
      font-size: .65em;

      svg {
        height: 1em;
        width: 1em;
        margin-right: .25em;
      }
    }

    a {
      color: var(--black);
      text-decoration: underline;
      text-decoration-color: rgba(0, 0, 0, .25);

      &:hover {
        text-decoration-color: var(--black);
      }
    }
  }

  &-default {
    grid-column: span 2;
  }
}

@include media-breakpoint-down(lg) {
  .point {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &-title {
      .number {
        order: 2;
        margin-left: auto;
      }
    } 
  }
}
</style>