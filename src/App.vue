<script lang="ts">
  import { defineComponent } from "vue";

  import Navbar from "@/components/Navbar.vue";
  import ComingSoon from "@/components/home/ComingSoon.vue";
  import SocialButtons from "@/components/home/SocialButtons.vue";
  import Demacation from "@/components/home/Demacation.vue";
  import AnalogueClock from "@/components/home/clocks/AnalogueClock.vue";
  import DigitalClock from "@/components/home/clocks/DigitalClock.vue";
  import NumericClock from "@/components/home/clocks/NumericClock.vue";
  import LogoSlot from "@/components/home/LogoSlot.vue";
  import MainContent from "@/components/home/MainContent.vue";
  import Register from "@/components/home/Register.vue";

  export default defineComponent({
    components: {
      Navbar, ComingSoon, SocialButtons, Demacation, AnalogueClock, NumericClock,
      LogoSlot, MainContent, Register,
    },

    data: function() {
      return { page: "home" as "home" | "about" | "contact" }
    },
  });
</script>

<template>
  <img 
    class="bg-logo" 
    src="@/assets/images/logo.png" 
    alt="blurred background image of logo"
  >    

  <main class="app-container" v-bind:class="`container-${page}`">
    <Navbar @click="(clicked: 'home' | 'about' | 'contact') => page = clicked"/>

    <template v-if="page == 'home'">
      <ComingSoon/>
      <Register/>
      <SocialButtons/>
      <Demacation/>
      <AnalogueClock :target="new Date(2023, 2, 15, 18, 30).getTime()"/>
      <NumericClock/>
      <LogoSlot/>
      <MainContent/>
    </template>

    <template v-if="page == 'about'">
      <h1><i>todo: about page</i></h1>
    </template>

    <template v-if="page == 'contact'">
      <h1><i>todo: contact page</i></h1>
    </template>    
  </main>
</template>

<style lang="scss" scoped>
  .bg-logo {
    width: 45%;
    position: absolute;
  }

  .app-container {
    --navbar-height: 4.5rem;
    --border-width: 3px;
    --mobile-break-point: 600px;

    min-width: 350px;
    width: calc(90% - var(--border-width)); 
    height: calc(90% - var(--border-width));
    margin-top: var(--navbar-height);
    padding: 1rem 5%;

    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, .5);
    border: var(--border-width) solid var(--accent-opacity-75);    
    box-shadow: 0 0 2rem rgba(0, 0, 0, .7);

    display: grid;
    grid-template-rows: min-content min-content min-content auto min-content;
    grid-template-columns: calc(50% - .5px) 1px calc(50% - .5px);

    grid-template-areas: 
      "coming-soon coming-soon coming-soon"
      "register register register"
      "social-buttons demacation clock"
      "logo-slot logo-slot logo-slot"
      "main-content main-content main-content"
    ;
  }

  @media screen
  and (min-width: 600px)
  {
    .app-container {
      grid-template-rows: min-content min-content min-content auto min-content;
      grid-template-columns: calc(60% - .5px) 1px calc(40% - .5px);

      grid-template-areas: 
        "coming-soon coming-soon coming-soon"
        "register demacation clock"
        "register demacation social-buttons"
        "logo-slot logo-slot logo-slot"
        "main-content main-content ."
      ;    
    }
  }

  @media screen
  and (min-width: 1100px)
  {
    .bg-logo { display: none; }
    .app-container {
      padding-bottom: 5rem;
      grid-template-rows: min-content min-content min-content auto;
      grid-template-columns: calc(55% - .5px) 1px calc(45% - .5px);

      grid-template-areas: 
        "coming-soon coming-soon coming-soon"
        "main-content demacation clock"
        "main-content demacation social-buttons"
        "main-content demacation register"
      ;    
    }
  }
</style>
