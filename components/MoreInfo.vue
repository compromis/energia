<template>
  <ElementsSection id="more-info" class="more-info" color="blue">
    <template #title>
      {{ t.TITLE }}
    </template>

    <h3>{{ t.TODAY }}</h3>
    <ul>
      <li v-for="(item, i) in t.TODAY_ITEMS" :key="i">
        <a :href="item.LINK" target="_blank" rel="noopener noreferer">{{ item.TEXT }}</a>
      </li>
    </ul>

    <h3>{{ t.PROPOSED }}</h3>
    <ul>
      <li v-for="(item, i) in t.PROPOSED_ITEMS" :key="i">
        <a :href="item.LINK" target="_blank" rel="noopener noreferer">{{ item.TEXT }}</a>
      </li>
    </ul>

    <h3>{{ t.PROPOSAL }}</h3>
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