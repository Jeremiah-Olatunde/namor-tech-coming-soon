<script lang="ts">
  import LocationIcon from '@/components/icons/LocationIcon.vue';
  import EmailIcon from '@/components/icons/EmailIcon.vue';
  import PhoneIcon from '@/components/icons/PhoneIcon.vue';

  export default {
    components: { LocationIcon, EmailIcon, PhoneIcon }
  }
</script>
<template>
  <div class="desktop-hex-grid">
    <div class="hex hex-0 clip-hex">
      <div class="hex-content clip-hex">
        <a class="link" target="_blank" href="https://goo.gl/maps/hA7QGBr8J75FF3jR6">
          <LocationIcon class="icon"/>
        </a>
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/sunset.png" alt="" class="image clip-hex">
      </div>
    </div>

    <div class="hex hex-1 clip-hex">
      <div class="hex-content clip-hex">
        <a class="link" href="tel:+2348034056935">
          <PhoneIcon class="icon"/>
        </a>
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/rocket.jpg" alt="" class="image clip-hex">
      </div>
    </div>

    <div class="hex hex-2 clip-hex">
      <div class="hex-content clip-hex">
        <a class="link" target="_blank" href="mailto:namortech@yahoo.com">
          <EmailIcon class="icon"/>
        </a>
        <div class="mask clip-hex"></div>
        <img src="@/assets/images/up.jpg" alt="" class="image clip-hex">
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
    );
  }

  .desktop-hex-grid {
    --hex-w: 7.5vw;
    // width: 100%;
    width: calc(3 * var(--hex-w));
    height: calc(var(--hex-w) * 1.155);
    margin: 1rem auto;
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
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .mask {
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);

    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    transition: background .5s ease;
  }

  .hex-0 { top: 0; left: 0 }
  .hex-1 { top: 0; left: 33.333% }
  .hex-2 { top: 0; left: 66.666%  }

  .hex-content {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    display: grid;
    place-items: center;
  }

  .link { 
    position: absolute; 
    width: 25%; 
    aspect-ratio: 1;
  
    .icon {
      z-index: 2;
      width: 100%;

      fill: var(--accent);
      cursor: pointer;
    }
  }

  @media screen and ((min-width: 1100px) or (orientation: landscape)){
    .desktop-hex-grid { display: block; }
  }
</style>