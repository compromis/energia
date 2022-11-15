<template>
  <ElementsSection id="shed-light" class="shed-light" color="yellow">
    <template #title>
      <span v-html="t.TITLE" />
    </template>

    <div class="fake-items">
      <div class="col first" data-lag="0.5">
        <ElementsDrawer v-for="item in t.COL1" :key="item.ID" :id="item.ID" :title="item.TITLE"> 
          <div v-html="item.CONTENT" />
        </ElementsDrawer>
      </div>
      <div class="col second" data-lag="0.25">
        <ElementsDrawer v-for="item in t.COL2" :key="item.ID" :id="item.ID" :title="item.TITLE"> 
          <div v-html="item.CONTENT" />
        </ElementsDrawer>
      </div>
    </div>
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
.fake-items {
  display: flex;
  gap: 2rem;

  .second {
    margin-top: 15vh;
  }
}
</style>