<template>
  <ElementsSection id="shed-light" class="shed-light" color="yellow">
    <template #title>
      <span v-html="$t('LIGHT.TITLE')" />
    </template>

    <div class="fake-items multiply-annotations">
      <div class="col first" data-lag="0.5">
        <ElementsDrawer v-for="i in 4" :key="i" :id="`FAKE-1-${i}`" :title="$t(`LIGHT.COL1.FAKE${i}.TITLE`)"> 
          <div v-html="$t(`LIGHT.COL1.FAKE${i}.CONTENT`)" />
        </ElementsDrawer>
      </div>
      <div class="col second" data-lag="0.25">
        <ElementsDrawer v-for="i in 3" :key="i" :id="`FAKE-2-${i}`" :title="$t(`LIGHT.COL2.FAKE${i}.TITLE`)"> 
          <div v-html="$t(`LIGHT.COL2.FAKE${i}.CONTENT`)" />
        </ElementsDrawer>
      </div>
    </div>
  </ElementsSection>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.fake-items {
  display: flex;
  gap: 2rem;

  .second {
    margin-top: 15vh;
  }
}

@include media-breakpoint-down(lg) {
  .fake-items {
    flex-direction: column;
    gap: 0;

    .second {
      margin-top: 0;
    }
  }
}
</style>