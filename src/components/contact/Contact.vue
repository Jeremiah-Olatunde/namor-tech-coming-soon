<script async src="" lang="ts">
  import Form from "./Form.vue";
  import Image from "@/components/utils/Image.vue";

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

    components: { Form, Map, Image, EmailIcon, PhoneIcon, MagnifyIcon, LocationIcon } 
  }
</script>

<template>
  <div class="contact" scoped>
    <Image>
      <div id="map"></div>
      <ul class="icon-list">
        <li class="item">
          <a class="item-link">
            <div class="icon"><PhoneIcon/></div>
            <div class="label">08023039899</div>
          </a>
        </li>

        <li class="item">
          <a class="item-link">
            <div class="icon"><EmailIcon/></div>
            <div class="label">namortech@yahoo.com</div>
          </a>
        </li>

        <li class="item">
          <a class="item-link">
            <div class="icon"><LocationIcon/></div>
            <div class="label">30, Off Chevron Drive, Lekki, Lagos</div>
          </a>
        </li>
      </ul>

      <!-- <MagnifyIcon class="corner-icon"/> -->
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

  // .corner-icon {
  //   top: 0;
  //   right: 0;
  //   height: 3rem;
  //   position: absolute;
  //   aspect-ratio: 1;
  //   fill: var(--accent-opacity-75);
  //   margin: 2rem;
  // }

  .icon-list {
    position: absolute; 
    bottom: 0;
    margin: 2rem; 

    .item {
      color: rgba(255, 191, 0);
      margin-top: 1rem;  
      &:first-child { margin-top: 0; }

      .item-link {
        display: flex;
        text-decoration: none;
      }
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

  #map {
    width: 100%;
    height: 100%;
  }
</style>