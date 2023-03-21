<script lang="ts">
export default {}
</script>

<template>
  <div class="image-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

  .image-container {
    width: 100%;
    height: 100%;
    position: relative;
    border: var(--border-width) solid var(--accent);
  }
</style>