
<script lang="ts">
  import HomeIcon from "./icons/HomeIcon.vue";
  import InfoIcon from "./icons/InfoIcon.vue";
  import ContactIcon from "./icons/ContactIcon.vue";
  
  export default {
    components: { HomeIcon, InfoIcon, ContactIcon }
  }
</script>

<template>
  <div class="navbar">
    <nav class="nav">
      <ul class="nav-list">
        <li class="active nav-item">
          <HomeIcon class="icon"/>
        </li>
        <li class="nav-item">
          <InfoIcon class="icon"/>
        </li>
        <li class="nav-item">
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
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100% + 2 * var(--border-width));
    top: calc(-1 * var(--navbar-height));
    left: calc(-1 * var(--border-width));
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
    span {
      font-weight: 900;
      font-size: 1.75rem;
      color: var(--accent);
      letter-spacing: 1rem;;
      text-transform: uppercase;
    }

    .technologies { display: none; }
  }
</style>