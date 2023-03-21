<script lang="ts">
  import PlusIcon from '@/components/icons/PlusIcon.vue';

  export default {
    components: { PlusIcon }
  }
</script>
<template>
  <div class="hex-grid">
    <div class="hex hex-0 clip-hex">
      <div class="hex-content clip-hex">
        <slot name="hex-0"></slot>
      </div>
    </div>

    <div class="hex hex-1 clip-hex">
      <div class="hex-content clip-hex">
        <slot name="hex-1"></slot>
      </div>
    </div>

    <div class="hex hex-2 clip-hex">
      <div class="hex-content clip-hex">
        <slot name="hex-2"></slot>
      </div>
    </div>

    <div class="hex hex-3 clip-hex">
      <div class="hex-content clip-hex">
        <slot name="hex-3"></slot>
      </div>
    </div>

    <div class="hex hex-4 clip-hex">
      <div class="hex-content clip-hex">
        <slot name="hex-4"></slot>
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
    width: calc(2 * 13vw);
    aspect-ratio: 0.6928203230275509;
    margin: auto 0 auto auto;
  }

  .hex {
    width: 13vw;
    aspect-ratio: .8660;
    display: grid;
    place-items: center;
    background: var(--accent);
    position: absolute;
    overflow: hidden;
    z-index: 3;
  }

  .hex-0 { top: 0; left: 0 }
  .hex-1 { top: 0; left: 50% }
  .hex-2 { top: 30%; left: 25% }
  .hex-3 { top: 60%; left: 0 }
  .hex-4 { top: 60%; left: 50% }

  .hex-content {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    display: grid;
    place-items: center;
  }
</style>