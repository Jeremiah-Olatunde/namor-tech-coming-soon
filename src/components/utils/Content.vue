<script lang="ts">
  export default {
    mounted: function(){
      const elements = document.getElementsByClassName("fit-to-container");
      const map = new Map(Array.from(elements).map(elt => [elt, 0]));

      // for(const elt of elements) map.set(elt, findFitRatio(elt as HTMLElement));

      // function findFitRatio(elt: HTMLElement) {
      //   let fontSize = 0;

      //   while(true) {
      //     const styleObj = getComputedStyle(elt);
      //     fontSize = parseFloat(styleObj.fontSize);
      //     const height = parseFloat(styleObj.height);

      //     if(fontSize == height) elt.style.fontSize = `${fontSize + .1}px`;
      //     else {
      //       elt.style.fontSize = `${fontSize -= .1}px`
      //       break;
      //     };
      //   }

      //   return fontSize / parseFloat(getComputedStyle(elt).width);        
      // }

      const observer = new ResizeObserver((entries) => {
        for(const { target, contentBoxSize: [ { inlineSize, blockSize } ] } of entries) {
          if(!(target instanceof HTMLElement)) return;
          // target.style.fontSize = `${inlineSize * (map.get(target) ?? 0)}px`;

          let fontSize;

          while(true) {
            const styleObj = getComputedStyle(target);
            fontSize = parseFloat(styleObj.fontSize);
            const height = parseFloat(styleObj.height);

            if(fontSize == height) target.style.fontSize = `${fontSize + .1}px`;
            else {
              target.style.fontSize = `${fontSize -= .1}px`
              break;
            };
          }
        }
      });

      for(const elt of elements) observer.observe(elt);
    }
  }

</script>

<template>
  <section class="main-content" style="grid-area: main-content;">
    <header class="header">
      <p class="sub-header fit-to-container">
        <slot name="sub-header"></slot>
      </p>
      <h1 class="main-header">
        <span class="fit-to-container"><slot name="main-header"></slot></span>
      </h1>
    </header>
    <p class="main-text">
      <slot name="main-text">
      </slot>

      <span class="fit-to-container highlighted-text">
        <slot name="highlighted-text"></slot>
      </span>
    </p>
    <button class="button">
      <slot name="button"></slot>
    </button>
  </section>
</template>

<style lang="scss" scoped>
  .main-content { width: 100%; margin: 0 auto; max-width: 40rem;}

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

      span {
        display: block;
        font-weight: 700;
        font-variant: small-caps;
        letter-spacing: .1rem;
      }

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
    .main-content { max-width: 100%; margin-bottom: 2rem; }
    .text { width: 100%; span { text-align: left; } }
  }

  @media screen
  and (min-width: 1100px)
  {
    .main-content {  margin: auto; padding-right: 10rem; }
    .header { 
      text-align: left; 
      .main-header { 
        text-transform: capitalize; 
        .second { display: block; }
      } 
    }
    .text { 
      width: 80%; 
      margin-top: .5rem; 
      span { max-width: 35rem; }
    }
    .button { margin-bottom: 0; max-width: 35rem; }
  }
</style>
