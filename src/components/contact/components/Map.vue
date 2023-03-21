<script lang="ts">
  import Image from "@/components/utils/Image.vue";

  import XIcon from "@/components/icons/XIcon.vue";
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

      const open = document.getElementById("open-map");
      const close = document.getElementById("close-map");
      const mask = document.getElementById("map-mask");
      const overlay = document.getElementById("map-overlay");

      if(
        !(open instanceof SVGElement) 
        || !(close instanceof SVGElement) 
        || !(mask instanceof HTMLElement)
        || !(overlay instanceof HTMLElement)
      ) return;

      open.addEventListener("click", (event) => {
        overlay.style.display = "none";
        close.style.display= "block";
      });

      close.addEventListener("click", (event) => {
        close.style.display= "none";
        overlay.style.display = "block";
      })

    },

    components: { Map, Image, EmailIcon, PhoneIcon, MagnifyIcon, LocationIcon, XIcon } 
  }
</script>

<template>
  <Image style="grid-area: map;">
    <div id="map"></div>

    <div class="overlay" id="map-overlay">
      <div class="mask" id="map-mask"></div>

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
            <div class="label">30, off chevron drive</div>
          </a>
        </li>
      </ul>

      <MagnifyIcon class="corner-icon open-map" id="open-map"/>
    </div>

    <XIcon class="corner-icon close-map" id="close-map"/>
  </Image>
</template>

<style lang="scss" scoped>
  .underlay, .overlay {
    width: 100%;
    height: 100%;
    top: 0; left: 0;
    position: absolute;
  }

  .mask { 
    z-index: 0; 
    background: linear-gradient(
      rgba(0, 0, 0, .6) 50%, 
      rgba(0, 0, 0, .75))
    ;
  }
  .overlay { z-index: 1; }

  .corner-icon {
    top: 0;
    right: 0;
    height: 2rem;
    position: absolute;
    aspect-ratio: 1;
    fill: var(--accent);
    margin: 2rem;
    cursor: pointer;
  }

  .close-map { display: none; }
  .open-map { display: block; }

  .icon-list {
    position: absolute; 
    bottom: 0;
    margin: 2rem; 

    .item {
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

  #map { width: 100%; height: 100%; }

  @media screen
  and (min-width: 600px)
  {
    .overlay { display: none; }
  }

  @media screen
  and (min-width: 1100px)
  {
    .hex-grid { display: none; }
  }
</style>