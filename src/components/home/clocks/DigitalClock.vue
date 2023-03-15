<script lang="ts">
  export default {}
</script>

<template>
  <ul class="clock" style="grid-area: clock">
    <li class="box center">
      <div class="number">
        {{ Math.floor(Math.random() * 9) }}{{ Math.floor(Math.random() * 6) }}
      </div>
      <div class="label">days</div>
    </li>
    <li class="box center">
      <div class="number">
        {{ Math.floor(Math.random() * 9) }}{{ Math.floor(Math.random() * 6) }}
      </div>
      <div class="label">hrs</div>
    </li>
    <li class="box center">
      <div class="number">
        {{ Math.floor(Math.random() * 9) }}{{ Math.floor(Math.random() * 6) }}
      </div>
      <div class="label">mins</div>
    </li>
    <li class="box center">
      <div class="number">
        {{ Math.floor(Math.random() * 9) }}{{ Math.floor(Math.random() * 6) }}
      </div>
      <div class="label">secs</div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .clock {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: auto;
    font-size: 1.45vw;
    
  }

  .box {
    aspect-ratio: 1;
    padding: 1rem 0;
    margin: .25rem 0;

    border-radius: 100%;
    background: rgba( 255, 255, 255, 0.15);
    box-shadow: 0 0 1rem rgba(0, 0, 0, .4);
    border: 3px solid var(--accent-opacity-50);

    .number {
      font-size: 3em; 
      font-weight: 700;
      letter-spacing: -.0975em;  

      color: var(--accent);
    }

    .label {
      font-size: 1em;
      font-weight: 600;
      font-variant: small-caps;
      margin-top: .5rem;
    }
  }

  @media screen
  and (min-width: 500px)
  and (min-aspect-ratio: 2 / 3)
  {
    .clock { display: flex; }
  }


  // @media screen
  // and (min-width: 650px)
  // and (min-aspect-ratio: 2 / 3)
  // {
  //   .clock { display: none; }
  // }

</style>