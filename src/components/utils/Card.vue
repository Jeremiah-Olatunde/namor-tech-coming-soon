<script lang="ts">
export default {}
</script>

<template>
  <div class="card">
    <div class="underlay">
      <slot name="underlay">
      </slot>
    </div>
    <div class="mask"></div>
    <div class="overlay">
      <slot name="overlay">
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    border: var(--border-width) solid var(--accent-opacity-75);

    * {
      width: 100%;
      height: 100%;
      top: 0; left: 0;
      position: absolute;
    }
  }

  .mask {
    z-index: 0;
    background: rgba(0, 0, 0, .5);
  }

  .underlay { z-index: -1; }
  .overlay { z-index: 1; }

</style>