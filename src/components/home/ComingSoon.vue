<script lang="ts">
  import EmailIcon from "../icons/EmailIcon.vue";
  import PhoneIcon from "../icons/PhoneIcon.vue";
  import ContactIcon from "../icons/ContactIcon.vue";
  import InstagramIcon from "../icons/InstagramIcon.vue";
  import FacebookIcon from "../icons/FacebookIcon.vue";
  import WhatsAppIcon from "../icons/WhatsAppIcon.vue";
  import LocationIcon from "../icons/LocationIcon.vue";
  import LinkedInIcon from "../icons/LinkedInIcon.vue";

  export default {
    components: {
      WhatsAppIcon, InstagramIcon, FacebookIcon, LinkedInIcon,
      PhoneIcon, EmailIcon, ContactIcon, LocationIcon,
    }
  };
</script>

<template>
  <div class="coming-soon" style="grid-area: coming-soon;">
    <ul class="social-links">
      <li><a href="#" class="link center"><WhatsAppIcon class="icon"/></a></li>
      <li><a href="#" class="link center"><FacebookIcon class="icon"/></a></li>
      <li><a href="#" class="link center"><InstagramIcon class="icon"/></a></li>
      <li><a href="#" class="link center"><LinkedInIcon class="icon"/></a></li>
    </ul>
    <div class="text">coming soon</div>
  </div>
</template>

<style lang="scss" scoped>
  .coming-soon {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    margin: 2rem auto;
    border-bottom: .3rem solid var(--accent-opacity-50);

    .text {
      font-weight: 700;
      font-variant: small-caps;
      font-size: clamp(2.5rem, 6vw, 4.5rem);

      opacity: .4;
      text-align: right;
      color: var(--accent);
    }

    .social-links {
      display: none;

      .icon {
        height: 1.5em;
        aspect-ratio: 1;
        fill: var(--accent-opacity-50);
        margin: .5rem;
        transition: fill .2s ease;
      }

      li {
        &:hover .icon { fill: white; }
      }
    }
  }

  @media screen
  and (min-width: 500px)
  and (min-aspect-ratio: 2 / 3) {
    .coming-soon { 
      flex-direction: row;
      .social-links { display: flex; } 
    }
  }
</style>