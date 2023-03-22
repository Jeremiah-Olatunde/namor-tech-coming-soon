<script lang="ts">
  export default {
    mounted: function(){
      const logo = document.getElementsByClassName("bg-logo")[0];
      const slot = this.$refs.slot;

      if(!(logo instanceof HTMLImageElement)) return;
      if(!(slot instanceof HTMLElement)) return;

      const observer = new ResizeObserver((entries) => {
        const {
          x: slotX, y: slotY, 
          height: slotH, width: slotW
        } = slot.getBoundingClientRect();

        if(!slotW && !slotH) logo.style.display = "none";
        else logo.style.display = "block";

        logo.style.top = `${slotY + slotH / 2 - logo.height / 2}px`; 
        logo.style.left = `${slotX + slotW / 2 - logo.width / 2}px`; 
      });

      observer.observe(slot);
    }
  }
</script>

<template>
  <div class="logo-slot" style="grid-area: logo-slot" ref="slot"></div>
</template>

<style lang="scss" scoped>
  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  {
    .logo-slot { display: none; }
  }
</style>