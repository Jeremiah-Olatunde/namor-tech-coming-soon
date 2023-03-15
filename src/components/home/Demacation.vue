<script lang="ts">
  export default {}
</script>


<template>
  <div class="demacation" style="grid-area: demacation;"></div>
</template>

<style lang="scss" scoped>
  .demacation {
    width: 1px; height: 110%;

    background-image: linear-gradient(
      180deg, 
      var(--accent-opacity-0),
      var(--accent-opacity-75),
      var(--accent-opacity-0)
    );
  }

  @media screen
  and (min-width: 1100px)
  {
    .demacation { height: 100%; }
  }
</style>