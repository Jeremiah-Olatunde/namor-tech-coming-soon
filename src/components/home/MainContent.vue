<script lang="ts">
  export default {
    mounted: function(){
      const elements = document.getElementsByClassName("fit-to-container");

      // function fit(elt: HTMLElement) {
      //   let prev = "";

      //   while(true) {
      //     const styleObj = getComputedStyle(elt);
      //     const fontSize = parseFloat(styleObj.fontSize);
      //     const height = parseFloat(styleObj.height);

      //     if(fontSize == height) {
      //       elt.style.fontSize = `${fontSize + .1}px`;
      //     } else if(fontSize < height) {
      //       elt.style.fontSize = `${fontSize - .1}px`;
      //       break;
      //     }
      //   }
      // }

      const observer = new ResizeObserver((entries) => {
        for(const { target, contentBoxSize: [ { inlineSize, blockSize } ] } of entries) {
          if(!(target instanceof HTMLElement)) return;
          target.style.fontSize = `${inlineSize * parseFloat(target.dataset.fitRatio ?? "")}px`
        }
      });

      for(const elt of elements) observer.observe(elt);
    }
  }

</script>

<template>
  <section class="main-content" style="grid-area: main-content;">
    <header class="header">
      <p class="sub-header">lorem ipsum dolor &mdash; sit</p>
      <h1 class="main-header">
        <span class="fit-to-container" data-fit-ratio="0.139">you dream it</span>
        <span class="fit-to-container second" data-fit-ratio="0.14">we build it</span>
      </h1>
    </header>
    <p class="text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae odit min  Quaerat quae odit minima obcaecati dolorum, pariatur dicta ad illo incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi labore eaque d
      <span ref="baz" class="fit-to-container" data-fit-ratio="0.0422">choose us, you will not regret it!</span>
    </p>
    <button class="contact-button">get in touch!</button>
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


  .text {
    line-height: 2;
    font-size: 1.25rem;
    text-align: justify;
    letter-spacing: .1rem;    

    span {
      line-height: 1;
      display: block;
      font-weight: 800;
      color: var(--accent);
      text-transform: uppercase;
      text-align: center;
      margin-top: .75rem;
    }
  }

  .contact-button {
    width: 100%;
    margin: 2rem 0 1rem;
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
    .contact-button { margin-bottom: 0; max-width: 35rem; }
  }
</style>
