<script lang="ts">
  import { defineComponent } from "vue";

  import ComingSoon from "./components/ComingSoon.vue";
  import SocialButtons from "./components/SocialButtons.vue";
  import Demacation from "./components/Demacation.vue";
  import LogoSlot from "./components/LogoSlot.vue";
  import Register from "./components/Register.vue";
  import Hex from "./components/Hex.vue";

  import Content from "@/components/utils/Content.vue";
  import AnalogueClock from "@/components/utils/AnalogueClock.vue";
  import NumericClock from "@/components/utils/NumericClock.vue";

  import PlusIcon from "@/components/icons/PlusIcon.vue";

  export default defineComponent({
    components: {
      LogoSlot, Register,
      ComingSoon, SocialButtons, Demacation,
      AnalogueClock, NumericClock, Content, Hex,
      PlusIcon
    },
  });
</script>

<template>
  <div class="home">
    <ComingSoon/>
    <Register/>
    <SocialButtons/>
    <Demacation/>
    <AnalogueClock :target="new Date(2023, 2, 28, 18, 30).getTime()"/>
    <NumericClock/>
    <LogoSlot/>
    <Content>
      <template #main-header>
        <span class="sm md" data-fit>solving problems</span>
        <span class="lg" data-fit>engineering</span>
      </template>
      <template #main-header-1>
        <span class="lg" data-fit>that excites</span>
      </template>
      <template #sub-header>
        <span class="sub-header sm" data-fit>dependaple &mdash; reliable</span>
        <span class="sub-header md lg" data-fit>dependaple, reliable, trusted</span>
      </template>
      <template #main-text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae odit min  Quaerat quae odit minima obcaecati dolorum, pariatur dicta ad illo incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi labore eaque d
      </template>
      <template #highlighted-text>choose us, you will not regret it!</template>
      <template #button>reach out!</template>
    </Content>
    <Hex></Hex>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    padding: 2rem;

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

      [class*="md"], [class*="lg"]{ display: none; }
      [class*="sm"]{ display: block; }
  }

  @media screen
  and (min-width: 600px)
  {
    .home {
      padding: 3rem;

      grid-template-rows: min-content min-content min-content auto min-content;
      grid-template-columns: calc(60% - .5px) 1px calc(40% - .5px);
      grid-template-areas: 
        "coming-soon coming-soon coming-soon"
        "register demacation clock"
        "register demacation social-buttons"
        "logo-slot logo-slot logo-slot"
        "main-content main-content hex-grid"
      ;  

      [class*="sm"], [class*="lg"]{ display: none; }
      [class*="md"]{ display: block; }
    }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  {
    .home {
      padding: 1rem 5rem 5rem 5rem;

      grid-template-rows: min-content min-content min-content auto;
      grid-template-columns: calc(55% - .5px) 1px calc(45% - .5px);
      grid-template-areas: 
        "coming-soon coming-soon coming-soon"
        "main-content demacation clock"
        "main-content demacation social-buttons"
        "main-content demacation register"
      ;  

      [class*="sm"], [class*="md"]{ display: none; }
      [class*="lg"]{ display: block; }
    }
  }
</style>