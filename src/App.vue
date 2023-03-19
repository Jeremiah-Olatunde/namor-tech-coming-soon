
<script lang="ts">
  import { defineComponent } from "vue";

  import Navbar from "@/components/Navbar.vue";
  import Home from "@/components/home/Home.vue";
  import About from "@/components/about/About.vue";
  import Contact from "@/components/contact/Contact.vue";

  export default defineComponent({
    components: { Navbar, Home, About, Contact },

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
      <Home/>
    </template>

    <template v-if="page == 'about'">
      <About/>
    </template>

    <template v-if="page == 'contact'">
      <Contact/>
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

    min-width: 350px;
    width: calc(90% - var(--border-width)); 
    height: calc(90% - var(--border-width));
    margin-top: var(--navbar-height);

    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, .5);
    border: var(--border-width) solid var(--accent-opacity-75);    
    box-shadow: 0 0 2rem rgba(0, 0, 0, .7);
  }
</style>
