<script lang="ts">
  import { defineComponent } from "vue";

  import ComingSoon from "./components/ComingSoon.vue";
  import SocialButtons from "./components/SocialButtons.vue";
  import Demacation from "./components/Demacation.vue";
  import LogoSlot from "./components/LogoSlot.vue";
  import Register from "./components/Register.vue";

  import Content from "@/components/utils/Content.vue";
  import AnalogueClock from "@/components/utils/AnalogueClock.vue";
  import NumericClock from "@/components/utils/NumericClock.vue";

  export default defineComponent({
    components: {
      LogoSlot, Register,
      ComingSoon, SocialButtons, Demacation,
      AnalogueClock, NumericClock, Content
    }
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
      <template #main-header>you dream it</template>
      <template #sub-header>lorem ipsum &mdash; idor</template>
      <template #main-text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae odit min  Quaerat quae odit minima obcaecati dolorum, pariatur dicta ad illo incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi labore eaque d
      </template>
      <template #highlighted-text>choose us, you will not regret it!</template>
      <template #button>reach out!</template>
    </Content>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    padding: 1rem 5%;

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
    .home {
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
    .home {
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