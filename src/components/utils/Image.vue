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
    border: var(--border-width) solid var(--accent-opacity-75);
    // box-shadow: 0 2rem 2rem .5rem rgba(0, 0, 0, .7);

    // for some god damn reason using an image element messes with the grid sizing
    // on iPhone 6/7/8 screens...
    // but you'll have to use an image element for the slider 
    // may god and anime be with you, 
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-image: 
    //   linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),
    //   url("@/assets/images/map.webp") 
    // ;
  }
</style>