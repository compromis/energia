<template>
  <ElementsSection id="shed-light" class="shed-light" color="yellow">
    <template #title>
      Anem a posar llum sobre algunes cosetes <br class="optional" />
      que es diuen per ahí...
    </template>

    <div class="fake-items">
      <div class="col first" data-lag="0.5">
        <ElementsDrawer id="Fake1" title="Quan és de nit, no hi ha energia..."> 
          <p>Fals perque bla bla bla</p>
        </ElementsDrawer>

        <ElementsDrawer id="Fake2" title="Quan és de nit, no hi ha energia..."> 
          <p>Fals perque bla bla bla</p>
        </ElementsDrawer>
        <ElementsDrawer id="Fake3" title="Quan és de nit, no hi ha energia..."> 
          <p>Fals perque bla bla bla</p>
        </ElementsDrawer>
      </div>
      <div class="col second" data-lag="0.25">
        <ElementsDrawer id="Fake4" title="Quan és de nit, no hi ha energia..."> 
          <p>Fals perque bla bla bla</p>
        </ElementsDrawer>
        <ElementsDrawer id="Fake5" title="Quan és de nit, no hi ha energia..."> 
          <p>Fals perque bla bla bla</p>
        </ElementsDrawer>
      </div>
    </div>
  </ElementsSection>
</template>

<style lang="scss" scoped>
.fake-items {
  display: flex;
  gap: 2rem;

  .second {
    margin-top: 15vh;
  }
}
</style>