<script lang="ts">
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import ContactIcon from "@/components/icons/ContactIcon.vue";
  import InstagramIcon from "@/components/icons/InstagramIcon.vue";
  import FacebookIcon from "@/components/icons/FacebookIcon.vue";
  import WhatsAppIcon from "@/components/icons/WhatsAppIcon.vue";
  import LocationIcon from "@/components/icons/LocationIcon.vue";
  import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";

  export default {
    components: {
      WhatsAppIcon, InstagramIcon, FacebookIcon, LinkedInIcon,
      PhoneIcon, EmailIcon, ContactIcon, LocationIcon,
    }
  };
</script>

<template>
  <div class="coming-soon" style="grid-area: coming-soon;">
    <div class="text">coming soon</div>
  </div>
</template>

<style lang="scss" scoped>
  .coming-soon {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 1rem auto;
    border-bottom: .3rem solid var(--accent-opacity-50);

    .text {
      font-weight: 700;
      font-variant: small-caps;
      font-size: clamp(2.5rem, 6vw, 4.5rem);

      opacity: .4;
      text-align: right;
      color: var(--accent);
      padding-bottom: .5rem;
    }
  }

  @media screen
  and (min-width: 600px) {
    .coming-soon { margin-bottom: 3rem; }
  }
</style>