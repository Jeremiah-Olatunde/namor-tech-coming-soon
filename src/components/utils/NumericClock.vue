<script lang="ts">
  export default {}
</script>

<template>
  <div class="clock" style="grid-area: clock;">
    <div class="main">
      <div class="digit">293</div>
      <div class="label">days</div>
    </div>
    <div class="sub">
      <div class="deco deco-0"></div>
      <div class="deco deco-1"></div>
      <div class="deco deco-2"></div>

      <div class="digit">06</div>
      <div class="label">h</div>
      <div class="digit">40</div>
      <div class="label">m</div>
      <div class="digit">49</div>
      <div class="label">s</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .clock {
    font-size: 1.2vw; 
    font-variant: small-caps;
    margin: auto;
    margin-top: 3rem;
    display: none;
  }

  .main {
    .digit {
      line-height: .7;
      font-size: 8em;
      font-weight: 600;
    }

    .label {
      position: absolute;
      top: 0; right: 0;
      transform: translateX(100%);

      font-size: 2em;
      font-weight: 700;
      line-height: .7;
      color: var(--accent);
    }
  }

  .sub {
    text-align: center;
    margin-top: 2em;
    * { font-size: 1.75em; display: inline-block; }

    .digit {
      font-weight: 800;
      margin-left: .25em;
      color: var(--accent);
      &:first-child { margin-left: 0; }
    }
  }

  .deco {
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;

    &::before, &::after {
      content: "";
      display: block;
      position: absolute;
      background: var(--accent);
    }

    &::before { left: calc(-0.7 * 2em); }
    &::after { right: calc(-0.7 * 2em); }
  }

  .deco-0::before, .deco-0::after {
    top: -250%;
    height: 1px;
    width: calc(.7 * 2em);
  }

  .deco-1::before, .deco-1::after {
    bottom: 0;
    width: 1px;
    height: 300%;
    transform: translateY(-15%);
  }    

  .deco-2::before, .deco-2::after {
    top: 50%;
    width: 2em;
    height: 1px;
    transform: translateY(-50%);
  }

  @media screen
  and (min-width: 600px) {
    .clock { display: block; }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape)) {
    .clock { margin-top: 5rem; font-size: 1.1vw;}
  }
</style>