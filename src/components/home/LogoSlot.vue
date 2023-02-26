<script lang="ts">
  export default {
    mounted: function(){
      const logo = document.getElementsByClassName("bg-logo")[0] as HTMLImageElement;

      const observer = new ResizeObserver((entries) => {
        const rect = this.$refs.slot.getBoundingClientRect();
        logo.style.top = `${rect.y + rect.height / 2 - logo.height / 2}px`; 
      });

      observer.observe(this.$refs.slot);
    }
  }
</script>

<template>
  <div class="logo-slot" style="grid-area: logo-slot" ref="slot"></div>
</template>

<style lang="scss" scoped>
</style>