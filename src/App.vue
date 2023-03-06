<script setup lang="ts">
  import Navbar from "@/components/Navbar.vue";
  import ComingSoon from "@/components/home/ComingSoon.vue";
  import SocialButtons from "@/components/home/SocialButtons.vue";
  import Demacation from "@/components/home/Demacation.vue";
  import AnalogueClock from "@/components/home/clocks/AnalogueClock.vue";
  import DigitalClock from "@/components/home/clocks/DigitalClock.vue";
  import LogoSlot from "@/components/home/LogoSlot.vue";
  import MainContent from "@/components/home/MainContent.vue";
</script>

<template>
  <img 
    class="bg-logo" 
    src="@/assets/images/logo.png" 
    alt="blurred background image of logo"
  >    

  <main class="app-container">
    <Navbar/>
    <ComingSoon/>
    <SocialButtons/>
    <Demacation/>
    <AnalogueClock :target="new Date(2023, 2, 15, 18, 30).getTime()"/>
    <DigitalClock/>
    <LogoSlot/>
    <MainContent/>
  </main>
</template>

<style lang="scss" scoped>
  .bg-logo {
    width: 60%;
    position: absolute;
  }

  .app-container {
    --navbar-height: 4.5rem;
    --border-width: 3px;

    min-width: 350px;
    width: calc(90% - var(--border-width)); 
    height: calc(90% - var(--border-width));
    margin-top: var(--navbar-height);
    padding-bottom: max(2rem, calc(20vw / 3.5));

    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, .5);
    border: var(--border-width) solid var(--accent-opacity-75);    
    box-shadow: 0 0 2rem rgba(0, 0, 0, .7);

    display: grid;
    grid-template-rows: min-content min-content auto min-content;
    grid-template-columns: calc(50% - .5px) 1px calc(50% - .5px);

    grid-template-areas: 
      "coming-soon coming-soon coming-soon"
      "social-buttons demacation clock"
      "logo-slot logo-slot logo-slot"
      "main-content main-content main-content"
    ;
  }

  @media screen
  and (min-width: 500px)
  and (min-aspect-ratio: 2 / 3)
  {
    .app-container {
      grid-template-rows: min-content auto min-content;
      grid-template-columns: calc(75% - .5px) 1px calc(25% - .5px);

      grid-template-areas: 
        "coming-soon coming-soon coming-soon"
        "logo-slot logo-slot logo-slot"
        "main-content demacation clock"
      ;    
    }
  }

  @media screen
  and (min-width: 650px) {
    .app-container {
      grid-template-columns: calc(60% - .5px) 1px calc(40% - .5px); 
    }
  }
</style>
