<script lang="ts">
  export default {
    props: {
      target: { type: Number, required: true },
    },

    data: function() {
      return {
        clockID: 0,
        diffTime: { days: "00", hours: "00", mins: "00", }
      }
    },

    computed: {
      cssSize: function(){ return this.size + "px"; },
      canvasSize: function(){ return this.size * .925 },
    },

    mounted: function() {
      const updateClock = () => {
        const fractional = (x: number) => x - Math.floor(x);
        const toDoubleDigitString = (x: number) => (x < 10 ? "0" : "") + x.toString();

        const ms = this.target - Date.now();
        const days = ms / 86400000;
        const hours = fractional(days) * 24;
        const mins = fractional(hours) * 60;

        this.diffTime = { 
          mins: toDoubleDigitString(Math.floor(mins)),
          days: toDoubleDigitString(Math.floor(days)), 
          hours: toDoubleDigitString(Math.floor(hours)), 
        };
      }

      updateClock();

      this.clockID = setTimeout(updateClock, 60000);
    },

    unmounted: function() { clearInterval(this.clockID); }
  }
</script>

<template>
 <div class="count-down center" style="grid-area: count-down;">
    <p class="title"><slot>clock</slot></p>

    <ul class="numbers layout center">
      <li class="number">{{ diffTime.hours }}</li>
      <li class="number focus-number">{{ diffTime.days }}</li>
      <li class="number">{{ diffTime.mins }}</li>
    </ul>

    <ul class="labels layout center">
      <li class="hours">hrs</li>
      <li class="days">days</li>
      <li class="minutes">min</li>
    </ul>      
 </div> 
</template>

<style lang="scss" scoped>
  .count-down {
    width: 85%;
    margin: auto;
    aspect-ratio: 1;
    font-size: 2.5vw;

    border-radius: 100%;
    background: rgba(255,255,255,0.15);
    box-shadow: 0 0 2rem rgba(0, 0, 0, .4);

    &::before {
      content: "";
      display: block;
      position: absolute;

      height: 92.5%;
      aspect-ratio: 1;  

      border-radius: 100%;
      border: 1px solid var(--accent);
    }

    .title {
      top: 17.5%;
      position: absolute;

      font-size: 1.5em;
      font-weight: 900;

      letter-spacing: .25em;
      text-transform: uppercase;  
    }    

    .layout {
      width: 90%;
      grid-template-rows: auto;
      grid-template-columns: 30% 40% 30%;
    }

    .number {
      font-size: 2.5em;
      font-weight: 300;
      transform: scaleX(.95);
    }

    .focus-number {
      font-size: 4em; 
      font-weight: 700;
      letter-spacing: -.0975em;  

      color: var(--accent);
    }

    .labels {
      top: 64%;
      position: absolute;

      font-size: 1em;
      font-weight: 100;
      text-transform: uppercase;
    }
  }
</style>