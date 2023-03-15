
<script lang="ts">
  import EmailIcon from "../icons/EmailIcon.vue";
  import PhoneIcon from "../icons/PhoneIcon.vue";
  import ContactIcon from "../icons/ContactIcon.vue";
  import InstagramIcon from "../icons/InstagramIcon.vue";
  import FacebookIcon from "../icons/FacebookIcon.vue";
  import WhatsAppIcon from "../icons/WhatsAppIcon.vue";

  export default {
    components: {
      WhatsAppIcon, InstagramIcon, FacebookIcon,
      PhoneIcon, EmailIcon, ContactIcon,
    }
  };
</script>

<template>
  <div class="social-buttons" style="grid-area: social-buttons;">
    <a href="#" class="link center"><WhatsAppIcon class="icon"/></a>
    <a href="#" class="link center"><InstagramIcon class="icon"/></a>
    <a href="#" class="link center"><FacebookIcon class="icon"/></a>
    <a href="#" class="link center"><PhoneIcon class="icon"/></a>
    <a href="#" class="link center hidden"><EmailIcon class="icon"/></a>
    <a href="#" class="link center hidden"><ContactIcon class="icon"/></a>
  </div>
</template>

<style lang="scss" scoped>
  .social-buttons {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;

    width: 80%;
    max-width: 16rem;
    margin: auto;

    .link {
      margin: .25rem;
      aspect-ratio: 1;
      border-radius: 100%;
      border: .2rem solid var(--accent);
    
      .icon {
        width: 50%;
        aspect-ratio: 1;
        fill: white;
      }
    }
  }

  @media screen
  and (min-width: 600px)
  {
    .social-buttons {
      grid-template-rows: auto;
      grid-template-columns: auto auto auto auto;  
      margin-bottom: 3rem;
      margin-top: .5rem;
    }

    .hidden { display: none; }
  }
</style>