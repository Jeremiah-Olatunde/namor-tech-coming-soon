<script lang="ts">
  import Spinner from "@/components/utils/Spinner.vue"; 

  export default {
    props: {
      target: { type: Number, required: true },
    },

    components: { Spinner },

    data: function() {
      return {
        clockID: 0,
        diffTime: { days: "00", hours: "00", mins: "00", }
      }
    },

    computed: {
      // cssSize: function(){ return this.size + "px"; },
      // canvasSize: function(){ return this.size * .925 },
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
 <div class="clock center" style="grid-area: clock;">
    <Spinner/>
    <p class="title"><slot>launch</slot></p>

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
  .clock {
    width: 85%;
    margin: auto;
    margin-right: 0;
    aspect-ratio: 1;
    font-size: 2.25vw;

    background: white;

    border-radius: 100%;
    background:  rgba(0, 0, 0, 0.3);
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
      width: 80%;
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

  @media screen
  and (min-width: 600px) {
    .clock { display: none; }
  }
</style>