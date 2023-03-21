<script lang="ts">
  import PlusIcon from "@/components/icons/PlusIcon.vue";
  import HexGrid from "@/components/utils/HexGrid.vue";
  
  export default {
    components: { PlusIcon, HexGrid }
  } 
</script>

<template>
  <HexGrid>
    <template #hex-0>
      <PlusIcon class="plus-icon"/>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/headshot.jpg" alt="" class="image clip-hex">
    </template>

    <template #hex-1>
      <PlusIcon class="plus-icon"/>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/sunset.png" alt="" class="image clip-hex">
    </template>

    <template #hex-2>
      <PlusIcon class="plus-icon"/>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/dawn.jpg" alt="" class="image clip-hex">
    </template>

    <template #hex-3>
      <PlusIcon class="plus-icon"/>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/voyage.jpg" alt="" class="image clip-hex">
    </template>

    <template #hex-4>
      <PlusIcon class="plus-icon"/>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/rocket.jpg" alt="" class="image clip-hex">
    </template>
  </HexGrid>
</template>

<style lang="scss">
  .hex-grid { display: none; }
  .image {
    width: 100%;
    height: 100%;
  }

  .mask {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);

    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    transition: background .5s ease;
  }

  .plus-icon {
    z-index: 2;
    aspect-ratio: 1;
    position: absolute;

    width: 25%;
    padding: .25rem;
    aspect-ratio: 1;

    fill: var(--accent);
    cursor: pointer;
  }


  @media screen
  and (min-width: 600px)
  {
    .hex-grid { display: block; }
  }

  @media screen
  and (min-width: 1100px)
  {
    .hex-grid { display: none; }
  }
</style>