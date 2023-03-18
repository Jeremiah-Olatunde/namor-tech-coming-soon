<script lang="ts">
  function getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");
    if(context) return context;
    throw new Error("Canvas 2d context is null");
  }

  function resizeSpinner(spinner: HTMLCanvasElement){
    return new ResizeObserver(() => {
      ({width: spinner.width, height: spinner.height} = spinner.getBoundingClientRect());
    }).observe(spinner);    
  }

  function updateSpiner(spinner: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    const r = spinner.width / 2 ;
    const t = new Date();
    const theta = (t.getSeconds() + (t.getMilliseconds() / 1000)) * Math.PI / 30;

    context.lineWidth = 0.175 * r;
    context.strokeStyle = getComputedStyle(spinner)["color"];

    context.beginPath();
    context.arc(r, r,  r, - Math.PI / 2, theta - Math.PI / 2);
    context.stroke(); 
  }

  function animate(callback: () => void, fps: number): { halt: boolean } {
    let time = performance.now();
    const frameTime = 1000 / fps;
    const animCtrl = { halt: false };

    (function render(timeStamp: number): void {
      if(!animCtrl.halt) requestAnimationFrame(render);
      if(timeStamp - time < frameTime) return;
      time = timeStamp;
      callback();
    })(performance.now());

    return animCtrl;
  }

  export default {
    data: () => ({ angle: 0 }),

    mounted: function() {
      const spinner = this.$refs.spinner as HTMLCanvasElement;
      const context = getContext(spinner);

      resizeSpinner(spinner);

      animate(() => {
        context.clearRect(0, 0, spinner.width, spinner.height);
        updateSpiner(spinner, context)       
      }, 30)
    }
  }
</script>

<template>
  <canvas class="spinner" ref="spinner"></canvas>
</template>

<style lang="scss" scoped>
  .spinner {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    position: absolute;
    color: var(--accent);
  }
</style>