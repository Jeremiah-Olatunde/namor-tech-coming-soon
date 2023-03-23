<script lang="ts">
  import LocationIcon from '@/components/icons/LocationIcon.vue';
  import EmailIcon from '@/components/icons/EmailIcon.vue';
  import PhoneIcon from '@/components/icons/PhoneIcon.vue';
  import PlusIcon from '@/components/icons/PlusIcon.vue';

  export default {
    components: { LocationIcon, EmailIcon, PhoneIcon, PlusIcon }
  }
</script>
<template>
  <div class="hex-grid">
    <div class="hex hex-0 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/up.jpg" alt="" class="image clip-hex">  
      </div>
    </div>

    <div class="hex hex-1 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/rocket.jpg" alt="" class="image clip-hex">
      </div>
    </div>

    <div class="hex hex-2 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/giant.jpg" alt="" class="image clip-hex">
        <div class="text">works</div>
      </div>
    </div>

    <div class="hex hex-3 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/voyage.jpg" alt="" class="image clip-hex">
      </div>
    </div>

    <div class="hex hex-4 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/headshot.jpg" alt="" class="image clip-hex">
        <!-- <div class="text">works</div> -->
      </div>
    </div>

    <div class="hex hex-5 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/worker.jpg" alt="" class="image clip-hex">
      </div>
    </div>

    <div class="hex hex-6 clip-hex">
      <div class="hex-content clip-hex">
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/sunset.png" alt="" class="image clip-hex">
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .clip-hex {
    clip-path: polygon(
      0% 25%,                  
      50% 0%,                  
      100% 25%,                 
      100% 75%,                  
      50% 100%,                  
      0% 75%
    ) fill-box;
  }

  .hex-grid {
    --hex-w: 13vw;
    width: calc(3 * var(--hex-w));
    aspect-ratio: 1.039;
    margin: auto 0 auto auto;
    display: none;

  }

  .hex {
    width: var(--hex-w);
    aspect-ratio: .8660;
    display: grid;
    place-items: center;
    background: var(--accent);
    position: absolute;
    overflow: hidden;
    z-index: 3;

    .image {
      width: 100%;
      height: 100%;
    }

    .mask {
      z-index: 1;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, .25);

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
  }

  .hex-2 .mask {
    background: rgba(0, 0, 0, .75);
  }

  .text {
    position: absolute;
    z-index: 1;
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: .1rem;
    text-transform: uppercase;
  }

  .hex-0 { top: 0; left: 16.666%; }
  .hex-1 { top: 0; left: 50%; }
  .hex-2 { top: 30%; left: 0; }
  .hex-3 { top: 30%; left: 33.333%; }
  .hex-4 { top: 30%; left: 66.666%; }
  .hex-5 { top: 60%; left: 16.666%; }
  .hex-6 { top: 60%; left: 50%; }


  .hex-content {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    display: grid;
    place-items: center;
  }

  @media screen and (min-width: 600px){
    .hex-grid { display: block; }
  }

  @media screen and ((min-width: 1100px) or (orientation: landscape)){
    .hex-grid { 
      display: block;
      --hex-w: 25%;
      width: 100%;
      aspect-ratio: 2;
      margin: auto;
    }


    .hex-0 { top: 0; left: 0; }
    .hex-1 { top: 0; left: 25%; }
    .hex-2 { top: 0; left: 50%; }
    .hex-3 { top: 0; left: 75%; }
    .hex-4 { top: 42.857%; left: 12.5%; }
    .hex-5 { top: 42.857%; left: 37.5%; }
    .hex-6 { top: 42.857%; left: 62.5%; }
  }
</style>