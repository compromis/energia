<template>
  <section>
    <div class="cloudy-storm" data-speed="0.5" data-lag="0.25">
      <GuysEvilGuy class="evil-guy" />
      <div class="cloudy-quote">
        <p class="cloudy-quote-text">“Impossible!”</p>
        <span class="cloudy-quote-author">&mdash; Every Multinacional Energètica</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .cloudy-storm {
    background: #7a949e;
    border-radius: 2rem;
    width: 70vw;
    margin: 100vh auto auto;
    position: relative;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
  }

  .evil-guy {
    width: 25%;
  }

  .cloudy-quote {
    text-align: right;
    line-height: .8;

    &-text {
      font-family: var(--serif-font);
      font-size: clamp(5rem, 8vw, 10rem);
      text-align: center;
    }

    &-author {
      font-size: clamp(1rem, 2vw, 2.5rem);
    }
  }
</style>