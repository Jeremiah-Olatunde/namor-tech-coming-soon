
<script lang="ts">
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import ContactIcon from "@/components/icons/ContactIcon.vue";
  import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
  import FacebookIcon from "@/components/icons/FacebookIcon.vue";
  import WhatsAppIcon from "@/components/icons/WhatsAppIcon.vue";

  export default {
    components: {
      WhatsAppIcon, LinkedInIcon, FacebookIcon,
      PhoneIcon, EmailIcon, ContactIcon,
    }
  };
</script>

<template>
  <div class="social-buttons" style="grid-area: social-buttons;">
    <a target="_blank" href="https://api.whatsapp.com/send?phone=+2348034056935&text=Hello%2C%20Namor!" class="link center"><WhatsAppIcon class="icon"/></a>
    <a target="_blank" href="https://ng.linkedin.com/in/frederick-roman-65052122" class="link center"><LinkedInIcon class="icon"/></a>
    <a href="#" class="link center"><FacebookIcon class="icon"/></a>
    <a href="tel:+2348034056935" class="link center"><PhoneIcon class="icon"/></a>
    <a target="_blank" href="mailto:namortech@yahoo.com" class="link center hidden"><EmailIcon class="icon"/></a>
    <a href="tel:+2348034056935" class="link center hidden"><ContactIcon class="icon"/></a>
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