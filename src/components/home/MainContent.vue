<script lang="ts">
  export default {}
</script>

<template>
  <section class="main-content center" style="grid-area: main-content;">
    <header class="header">
      <div class="header-logo">
        <h1 class="main-header">namor tech</h1>
        <div class="vertical"></div>
        <img class="logo" src="@/assets/images/logo.png">
      </div>

      <p class="sub-header">Lorem ipsum dolor sit amet die.</p>
    </header>

    <p class="text">
      The quick brown fox jumped over the lazy dogs. 
      The quick brown fox jumped over the lazy dogs.
      The quick brown fox jumped over the lazy dogs. 
      The quick brown fox jumped over the lazy dogs.
    </p>
    <button class="contact-button">contact us</button>
  </section>
</template>

<style lang="scss" scoped>
  .main-content { 
    width: min(87.5%, 350px);
    margin: auto;
  }

  .header {
    font-size: clamp(12px, 3vw, 13.5px);
    color: white;
    text-align: center;

    .header-logo {
      gap: .3em;
      display: flex;
      align-items: center;
      justify-content: center;

      .logo { height: 2.5em; }
      .vertical { 
        width: .2em; 
        height: 3em;
        background: var(--accent); 
      }
    }

    .main-header {
      font-size: 2.65em;
      font-weight: 700;

      line-height: 1.5;
      letter-spacing: .1rem;
      text-transform: uppercase;
    }

    .sub-header {
      font-size: 1.14em;
      font-weight: 600;
      font-variant: small-caps;

      color: var(--accent);
      letter-spacing: .125rem;
      text-transform: uppercase;
    }
  }

  .text {
    line-height: 1.9;
    padding-top: 1rem;
    font-size: 1.25rem;
    text-align: justify;
    letter-spacing: .1rem;    
  }

  .contact-button {
    width: 100%;
    margin-top: 2rem;
    aspect-ratio: 5.75 / 1;

    font-size: 2rem;
    font-weight: 800;
    letter-spacing: .2rem;
    text-transform: uppercase;
    
    
    cursor: pointer;
    transition: all .05s ease;

    background: var(--accent-opacity-50);
    border-bottom: 5px solid var(--accent);

    &:hover { background: var(--accent); }
  }

  @media screen
  and (min-width: 500px)
  and (min-aspect-ratio: 2 / 3)
  {
    .header {
      font-size: min(2.25vw, 13.95px);
    }
  }

  @media screen
  and (min-width: 650px)
  and (min-aspect-ratio: 2 / 3)
  {
    .header {
      font-size: min(1.85vw, 13.95px);
    }
  }
</style>
