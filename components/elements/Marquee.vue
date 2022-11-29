<template>
  <div class="campaign-marquee base-level" :aria-label="$t('SUNNY.MARQUEE')">
    <ClientOnly>
      <MarqueeText :repeat="10" :duration="4">
        <svg class="icon-bolt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 40.04">
          <path fill="currentColor" d="M24.83,3.49c.46-1.07,.12-2.32-.83-3.01s-2.24-.63-3.12,.14L.86,18.14c-.78,.69-1.06,1.79-.7,2.76,.37,.97,1.31,1.63,2.35,1.63H11.23l-6.01,14.03c-.46,1.07-.12,2.32,.83,3.01,.95,.69,2.24,.63,3.12-.14L29.18,21.91c.78-.69,1.06-1.79,.7-2.76s-1.3-1.62-2.35-1.62h-8.72L24.83,3.49Z"/>
        </svg>
        {{ $t('SUNNY.MARQUEE') }}
      </MarqueeText>
    </ClientOnly>
  </div>
</template>

<script setup>
const { $t } = useNuxtApp()
</script>

<style lang="scss">
.campaign-marquee {
  background: var(--black);
  font-family: var(--base-font);
  color: var(--yellow);
  font-size: var(--text-md);
  padding: .5rem 0;
  height: var(--marquee-height);
  overflow: hidden;

  .icon-bolt {
    height: 1em;
    margin: 0 1rem;
  }
}
</style>
