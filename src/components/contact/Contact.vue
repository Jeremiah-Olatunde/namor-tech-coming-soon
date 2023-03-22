<script async src="" lang="ts">
  import Form from "./components/Form.vue";
  import Hex from "./components/Hex.vue";
  import Map from "./components/Map.vue";

  import Image from "@/components/utils/Image.vue";
  import Demacation from "@/components/utils/Demacation.vue";

  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import LocationIcon from "@/components/icons/LocationIcon.vue";
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import MagnifyIcon from "@/components/icons/MagnifyIcon.vue";

  import {} from '@/components/contact/scripts/index';


  export default {
    mounted() {
      let google_maps = document.createElement('script');
      google_maps.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIctU1VCEym7oVeFaFVOk-0v14dgrZAdk&callback=initMap&v=weekly');
      document.body.appendChild(google_maps);
    },

    components: { Form, Map, Image, EmailIcon, PhoneIcon, MagnifyIcon, LocationIcon, Hex, Demacation } 
  }
</script>

<template>
  <div class="contact">
    <Map></Map>
    <Demacation/>
    <Form style="grid-area: form;"></Form>
    <Hex style="grid-area: hex-grid"></Hex>
  </div>
</template>

<style lang="scss" scoped>
  .contact {
    display: grid;
    padding: 2rem;
    height: 100%;
    grid-template-rows: auto min-content;
    row-gap: 2rem;
    grid-template-areas: "map" "form";
    .demacation { display: none; }

  }

  @media screen
  and (min-width: 600px)
  {
    .contact {
      padding: 3rem;
      grid-template-columns: 50% 50%;
      grid-template-areas: "map map" "form hex-grid" ;
    }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  { 

    .contact {
      padding: 5rem;
      --gap: 5rem;
      grid-template-rows: 100%;
      column-gap: var(--gap);
      grid-template-columns: calc(35% - .5px - var(--gap)) 1px calc(65% - .5px - var(--gap));
      grid-template-areas: "form demacation map" ;
      .demacation { display: block; }
    }

  }
</style>