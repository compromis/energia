<template>
  <ElementsSection id="new-model">
    <template #title>{{ $t('MODEL.TITLE') }}</template>
    <div class="text">
      <p>{{ $t('MODEL.INTRO') }}</p>
    </div>
    <div class="mt-5">
      <slot />
    </div>
  </ElementsSection>
</template>
