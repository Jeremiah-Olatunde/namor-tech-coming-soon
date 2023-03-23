
<script lang="ts">
  import HomeIcon from "@/components/icons/HomeIcon.vue";
  import InfoCircleIcon from "@/components/icons/InfoCircleIcon.vue";
  import ContactIcon from "@/components/icons/ContactIcon.vue";
  
  export default {
    components: { HomeIcon, InfoCircleIcon, ContactIcon },
    emits: ["click"],
    data: function(){
      return { page: "home" }
    },
    methods: {
      click(page: "home" | "about" | "contact"){
        this.$emit('click', this.page = page);
      }
    },
    mounted: function() {
      const container = document.getElementsByClassName("app-container")[0];
      const navbar = document.getElementsByClassName("navbar")[0];

      if(!(navbar instanceof HTMLElement)) return;


      new ResizeObserver((entries) => {
        for(const { target } of entries){
          const { top, left, width } = container.getBoundingClientRect();
          navbar.style.top = `${top}px`;
          navbar.style.left = `${left}px`;
          navbar.style.width = `${width}px`;
        }
      }).observe(document.documentElement);
    }
  }
</script>

<template>
  <div class="navbar">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" @click="click('home')" :class="{ active: page == 'home' }">
          <HomeIcon class="icon"/>
        </li>
        <li class="nav-item" @click="click('about')" :class="{ active: page == 'about' }">
          <InfoCircleIcon class="icon"/>
        </li>
        <li class="nav-item" @click="click('contact')" :class="{ active: page == 'contact' }">
          <ContactIcon class="icon"/>
        </li>    
      </ul>
    </nav>

    <div class="nav-logo">
      <span class="namor">namor</span>
      <span class="technologies">technologies</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    --navbar-height: 4.5rem;
    --border-width: .5rem;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transform: translateY(calc(-100% + var(--border-width)));
    z-index: 1000;
  }

  .nav {
    aspect-ratio: 3;
    height: var(--navbar-height);

    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, .5);    
    border: var(--border-width) solid var(--accent-opacity-75);

    .nav-list {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-item {
      cursor: pointer; 
      text-align: center;
      &:hover svg { fill: var(--accent); }
    }

    .active svg { fill: var(--accent); }

    .icon {
      width: 40%;
      aspect-ratio: 1;

      fill: white;
      vertical-align: bottom;
      transition: fill .3s ease;  
    }
  }

  .nav-logo {
    display: flex;
    span {
      font-weight: 900;
      font-size: 1.75rem;
      color: var(--accent);
      letter-spacing: .5rem;;
      text-transform: uppercase;
    }

    .technologies { display: none; margin-left: 1rem; }
  }

  @media screen
  and (min-width: 1100px) {
    .nav-logo .technologies { display: block; }
  }
</style>