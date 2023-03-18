<script lang="ts">
  import Form from "./Form.vue";
  import Image from "@/components/utils/Image.vue";

  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import LocationIcon from "@/components/icons/LocationIcon.vue";
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import MagnifyIcon from "@/components/icons/MagnifyIcon.vue";



  export default {
    components: { Form, Map, Image, EmailIcon, PhoneIcon, MagnifyIcon, LocationIcon } 
  }
</script>

<template>
  <div class="contact" scoped>
    <Image>
      <ul class="icon-list">
        <li class="item">
          <div class="icon"><PhoneIcon/></div>
          <div class="label">08023039899</div>
        </li>
        <li class="item">
          <div class="icon"><EmailIcon/></div>
          <div class="label">namortech@gmail.com</div>
        </li>
        <li class="item">
          <div class="icon"><LocationIcon/></div>
          <div class="label">no 3 ihechukw madubuike st</div>
        </li>
      </ul>

      <MagnifyIcon class="corner-icon"/>
    </Image>
    <Form style="grid-area: form;"></Form>
  </div>
</template>

<style lang="scss" scoped>
  .contact {
    display: grid;
    height: 100%;
    padding: 2rem;
    grid-template-rows: auto min-content;
    grid-template-areas: "map" "form";
  }

  .corner-icon {
    right: 0;
    height: 3rem;
    position: absolute;
    aspect-ratio: 1;
    fill: var(--accent-opacity-75);
    margin: 2rem;
  }

  .icon-list {
    position: absolute; 
    bottom: 0;
    margin: 2rem; 

    .item {
      display: flex;
      margin-top: 1rem;  
      &:first-child { margin-top: 0; }
    }
    
    .icon {
      aspect-ratio: 1;
      fill: var(--accent);
      vertical-align: bottom;
      cursor: pointer;  
      height: 1.5rem;
      margin-right: .5rem;
    }

    .label {
      font-variant: small-caps;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing:  .1rem;
    }
  }
</style>