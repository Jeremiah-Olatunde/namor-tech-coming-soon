<script lang="ts">

  export default {
    mounted: function() {
      const elements = document.querySelectorAll("[data-fit]");
      const map = new Map(Array.from(elements).map(elt => [elt.textContent, 0]));

      for(const elt of elements) map.set(elt.textContent, findFitRatio(elt as HTMLElement));

      function findFitRatio(elt: HTMLElement) {
        elt.style.fontSize = "0px";
        elt.style.wordBreak = "break-all";

        const ε: number = .5;
        let δ = 20;

        let fontSize = 0;
        let prev = "inc";

        for(let i = 0; i < 25; i++) {
          const { height } = elt.getBoundingClientRect();


          if(Math.round(height) == Math.round(fontSize)){
            if(δ < ε) break;
            δ = prev == "inc" ? δ : δ / 2;
            elt.style.fontSize = `${fontSize += δ}px`;
            prev = "inc";
          } else if(height > fontSize) {
            δ = prev == "dec" ? δ : δ / 2;
            elt.style.fontSize = `${fontSize -= δ}px`;
            prev = "dec";
          }

          console.log(prev, δ, fontSize, height);
        }

        return fontSize / parseFloat(getComputedStyle(elt).width);        
      }

      const observer = new ResizeObserver((entries) => {
        for(const { target, contentBoxSize: [ { inlineSize: w, blockSize: h } ] } of entries){
          const elt = target as HTMLElement;
          const { textContent: text } = elt;

          if(!map.get(text)) map.set(text, findFitRatio(elt));
          let fontSize = map.get(text)! * w;

          elt.style.fontSize = `${fontSize}px`;

          if(Math.round(fontSize) == Math.round(h)) continue;
          else map.set(text, findFitRatio(elt));
        }
      });

      for(const elt of elements) observer.observe(elt);
    
    }
  }
</script>

<template>
  <section class="main-content" style="grid-area: main-content;">
    <header class="header">
      <p class="sub-header ">
        <slot name="sub-header"></slot>
      </p>
      <h1 class="main-header">
        <slot name="main-header"></slot>
        <slot name="main-header-1"></slot>
      </h1>
    </header>
    <p class="main-text">
      <slot name="main-text">
      </slot>

      <span class="highlighted-text" data-fit>
        <slot name="highlighted-text"></slot>
      </span>
    </p>

    <button class="button">
      <slot name="button"></slot>
    </button>
  </section>
</template>

<style lang="scss" scoped>
  .main-content { width: 100%; margin: 0 auto; max-width: 45rem;}

  .header {
    text-align: center;

    .sub-header {
      font-weight: 600; 
      font-size: 1.3rem;
      color: var(--accent);
      letter-spacing: .5rem;
      text-transform: uppercase;
    }

    .main-header {
      padding: .5rem 0; 
      display: block;
      font-weight: 700;
      font-variant: small-caps;
      letter-spacing: .1rem;

      .second { display: none; }
    }
  }


  .main-text {
    line-height: 2;
    font-size: 1.25rem;
    text-align: justify;
    letter-spacing: .1rem;    
    
    .highlighted-text {
      line-height: 1;
      display: block;
      font-weight: 800;
      color: var(--accent);
      text-transform: uppercase;
      text-align: center;
      margin-top: .75rem;
    }
  }

  .button {
    width: 100%;
    margin: 2rem 0 0;
    aspect-ratio: 6 / 1;

    font-size: 2rem;
    font-weight: 900;
    letter-spacing: .1rem;
    text-transform: uppercase;
    
    cursor: pointer;
    color: black;
    transition: all .5s ease;
    background: var(--accent);
  }

  @media screen
  and (min-width: 600px)
  {
    .text { width: 100%; span { text-align: left; } }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  {
    .main-content {  margin: auto; margin-left: 0; }
    .header { 
      text-align: left; 
      .main-header { text-transform: capitalize; } 
    }
    .main-text { 
      margin-top: .5rem; 
      span { max-width: 35rem; }
    }
    .button { margin-bottom: 0; max-width: 30rem; }
  }
</style>
