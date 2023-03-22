<script lang="ts">
  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import LocationIcon from "@/components/icons/LocationIcon.vue";
  import HexGrid from "@/components/utils/HexGrid.vue";
  
  export default {
    components: { LocationIcon, PhoneIcon, EmailIcon, HexGrid }
  } 
</script>

<template>
  <HexGrid style="grid-area: hex-grid" v-bind:foo="5">
    <template #hex-0>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/rocket.jpg" alt="" class="image clip-hex">
      <div class="text">our</div>
    </template>

    <template #hex-2>
      <img src="@/assets/images/sunset.png" alt="" class="image clip-hex">
    </template>

    <template #hex-1>
      <img src="@/assets/images/dawn.jpg" alt="" class="image clip-hex">
    </template>

    <template #hex-3>
      <img src="@/assets/images/voyage.jpg" alt="" class="image clip-hex">
    </template>

    <template #hex-4>
      <div class="mask clip-hex"></div>
      <img src="@/assets/images/up.jpg" alt="" class="image clip-hex">
      <div class="text">works</div>
    </template>
  </HexGrid>
</template>

<style lang="scss" scoped>
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
    background: rgba(0, 0, 0, .75);

    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    transition: background .5s ease;
  }

  .link { 
    position: absolute; 
    width: 30%; 
    aspect-ratio: 1;
  
    .icon {
      z-index: 2;
      width: 100%;

      fill: var(--accent);
      cursor: pointer;
    }
  }


  .text {
    position: absolute;
    z-index: 1;
    font-size: 1.75rem;
    font-weight: 900;
    letter-spacing: .1rem;
    text-transform: uppercase;
  }

  @media screen
  and (min-width: 600px)
  {
    .hex-grid { display: block; }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  {
    .hex-grid { display: none; }
  }
</style>