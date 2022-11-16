<template>
  <ElementsSection id="more-info" class="more-info" color="blue">
    <template #title>
      {{ t.TITLE }}
    </template>

    <h3>{{ t.TODAY }}</h3>
    <ul class="docs">
      <li v-for="(item, i) in t.TODAY_ITEMS" :key="i">
        <a :href="item.LINK" target="_blank" rel="noopener noreferer">
          <IconsDocument />
          {{ item.TEXT }}
        </a>
      </li>
    </ul>
  </ElementsSection>
</template>

<script setup>
defineProps({
  t: {
    type: Object,
    required: true
  }
})
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
  }

  svg {
    height: 1em;
    width: 1em;
  }
}
</style>