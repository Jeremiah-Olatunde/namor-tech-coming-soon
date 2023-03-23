<script lang="ts">
  import { defineComponent } from "vue";

  import Content from "@/components/utils/Content.vue";
  import Image from "@/components/utils/Image.vue";

  import Hex from "./components/Hex.vue";

  import Demacation from "@/components/utils/Demacation.vue";
  import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import InfoIcon from "@/components/icons/InfoIcon.vue";

  import {} from '@/components/about/scripts/index';

  export default defineComponent({
    data() {
      return {
        index: 0,
      }
    },
    components: {
    Image,
    Content,
    Demacation,
    LinkedInIcon,
    PhoneIcon,
    InfoIcon,
    Hex,
    EmailIcon
},

    computed: {
      focusIndex() {
        return this.index;
      }
    },

    mounted() {
      setInterval(() => {
        this.index = [...document.body.querySelectorAll('.carousel .item')].findIndex(curr => curr.hasAttribute('data-focus'));
      })
    }
  });

</script>

<template>
  <div class="about">
    <Image style="grid-area: image;">
      <div data-slider="projects-slider" class="carousel-container">
        <ul data-wrapper class="carousel">
          <figure class="item" data-focus>
            <img src="@/assets/images/giant.jpg">
            <figcaption class="image-title"> 
                <div data-text="CEO" class="main-header">CEO</div>
                <div data-text="roman&nbsp;frederick" class="sub-header">roman frederick</div>
                <p class="image-info">
                  Engr. Frederick A. Roman is the CEO of Namor Tech. Ltd.
                  He retired from Pan Ocean Oil Corporation Limited to 
                  commence operations as Managing Director of Namor Tech. This experience allowed him put up a structure
                  that is willing and ever ready to deliver quality services.
                </p>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/pipes.jpg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;I" class="main-header">Project I</div>
                <div data-text="Engineering" class="sub-header">Engineering</div>
                <p class="image-info">
                  <ul>
                    <li class="list-item"><span class="fancy-title">Description <span class="dash">&mdash; </span></span> Completed Satellite Manifold</li>
                    <li class="list-item"><span class="fancy-title">Location <span class="dash">&mdash; </span></span> Obi Anyima, Delta State, Nigeria.</li>
                    <li class="list-item"><span class="fancy-title">Date <span class="dash">&mdash; </span></span> January, 2019</li>
                  </ul>
                </p>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/red_pipes.jpeg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;II" class="main-header">Project II</div>
                <div data-text="Procurement&nbsp;and&nbsp;construction" class="sub-header">Oilfield services</div>
                <p class="image-info">
                  <ul>
                    <li class="list-item"><span class="fancy-title">Description <span class="dash">&mdash;</span></span> Fabrication and Installation of Field Satellite Manifold</li>
                    <li class="list-item"><span class="fancy-title">Location <span class="dash">&mdash;</span></span> Obi Anyima, Delta State, Nigeria.</li>
                    <li class="list-item"><span class="fancy-title">Date <span class="dash">&mdash;</span></span> January, 2019</li>
                  </ul>
                </p>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/tanks.jpeg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;III" class="main-header">Project III</div>
                <div data-text="Engineering" class="sub-header">Engineering</div>
                <p class="image-info">
                  <ul>
                    <li class="list-item"><span class="fancy-title">Description <span class="dash">&mdash;</span></span> Installation and Commissioning of MCC skid</li>
                    <li class="list-item"><span class="fancy-title">Location <span class="dash">&mdash;</span></span> Owa Alidinma Flowstation OML 147, Delta State, Nigeria.</li>
                    <li class="list-item"><span class="fancy-title">Date <span class="dash">&mdash;</span></span> December 2018.</li>
                  </ul>
                </p>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/yellow_crane.jpeg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;IV" class="main-header">Project IV</div>
                <div data-text="Oilfield&nbsp;services" class="sub-header">Ancillary services</div>
                <p class="image-info">
                  <ul>
                    <li class="list-item"><span class="fancy-title">Description <span class="dash">&mdash;</span></span> Drilling Location Site</li>
                    <li class="list-item"><span class="fancy-title">Location <span class="dash">&mdash;</span></span> Utu erumu 2 drilling location, Delta State, Nigeria.</li>
                    <li class="list-item"><span class="fancy-title">Date <span class="dash">&mdash;</span></span> September, 2013.</li>
                  </ul>
                </p>
            </figcaption>
          </figure>
        </ul>
      </div>

      <ul class="icon-list">
        <div class="item-container">
          <a class="item-links" target="_blank" href="https://ng.linkedin.com/in/frederick-roman-65052122">
            <li class="item one">
              <div class="icon"><LinkedInIcon></LinkedInIcon></div>
              <div class="label">Linkedin</div>
            </li>
          </a>
        </div>

        <div class="item-container">
          <a class="item-links" target="_blank" href="mailto:namortech@yahoo.com">
            <li class="item two">
              <div class="icon"><EmailIcon></EmailIcon></div>
              <div class="label">email</div>
            </li>
          </a>
        </div>

        <div class="item-container">
          <a class="item-links" href="tel:+2348034056935">
            <li class="item three">
              <div class="icon"><PhoneIcon></PhoneIcon></div>
              <div class="label">Telephone</div>
            </li>
          </a>
        </div>
      </ul>

      <a id="info-icon"><InfoIcon class="corner-icon"/></a>

      <div class="pagination">
        <div class="circle" :class="{ active: !(focusIndex - 0) }"></div>
        <div class="circle" :class="{ active: !(focusIndex - 1) }"></div>
        <div class="circle" :class="{ active: !(focusIndex - 2) }"></div>
        <div class="circle" :class="{ active: !(focusIndex - 3) }"></div>
        <div class="circle" :class="{ active: !(focusIndex - 4) }"></div>
      </div>
    </Image>

    <Hex/>

    <Demacation/>
    <Content>
      <template #main-header>
        <span class="sm md" data-fit>who we are</span>
      </template>
      <template #main-text>
          Namor Technologies Limited is a private company incorporated in Nigeria on March 23, 2010.
          The company is led by a team of dedicated professionals with more than 34 years of industry
          experience in mainly Oilfield services, Engineering, Real Estate, Procurement and Construction.
      </template>
      <template #highlighted-text>choose us, you will not regret it!</template>
      <template #button>reach out!</template>
    </Content>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 2rem;

    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: 100%;
    grid-template-rows:  auto min-content;
    grid-template-areas: "image" "main-content" ;
  }

  @media screen
  and (min-width: 600px)
  {
    .about {
      padding: 3rem;

      grid-template-columns: 50% 50%;
      grid-template-rows: 55% 45%;
      row-gap: 2rem;
      place-items: center;
      grid-template-areas: "image image" "main-content hex-grid" ;
    }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  {
    .about {
      padding: 5rem;
      --gap: 5rem;
      grid-template-rows: auto min-content;
      grid-column-gap: var(--gap);
      grid-template-columns: calc(35% - .5px - var(--gap)) 1px calc(65% - .5px - var(--gap));
      grid-template-areas: 
        "hex-grid demacation image" 
        "main-content demacation image" 
      ;
      .demacation { display: block; }
    }
  }

  #info-icon {
    display: block;
    height: 2.5rem;
    position: absolute;
    fill: var(--accent-opacity-75);
    top: 0;
    right: 0;
    margin: 2rem 2rem;
  }
  .corner-icon {
    padding: .5rem;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100%;
    border: 2px solid var(--accent-opacity-75);
  }

  .image-title {
    position: absolute;
    z-index: 1;
    flex-basis: 100%;
    width: 100%;
    padding: 2rem;
    bottom: 0;

    .image-info {
      position: relative;
      font-size: 1.25rem;
      letter-spacing: .15rem;
      line-height: 1.3;
      text-align: justify;
      margin-top: 2rem;

      .list-item {
        font-weight: 500;
        text-align: left;

        span {
          display: inline-block;
        }
        .fancy-title {
          display: inline;
          font-weight: bold;

          .dash {
            color: var(--accent)
          }
        }
      }
    }
    .main-header {
      font-size: 4rem;
      text-transform: uppercase;
      line-height: .8;
      padding-bottom: .5rem;
      color: transparent;

      &::before {
        display: block;
        content: attr(data-text);
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        color: white;
        overflow: hidden;
        animation: animate 0.7s ease-in;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }
    }

    .sub-header {
      font-variant: small-caps;
      font-size: 1.5rem;
      color: transparent;
      font-weight: 600;
      letter-spacing:  .1rem; 
      
      &::before, &::after {
        display: block;
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        overflow: hidden;
      }

      &::before {
        color: var(--accent);
        animation: animate-one 0.7s ease-in;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }

      &::after {
        color: white;
        animation: animate-two 0.6s ease-out;
        z-index: -1;
        animation-fill-mode: forwards;
      }
    }
  }



  .pagination {
    display: flex;
    justify-content: end;
    align-items: center;

    position: absolute;
    bottom: 0;right: 0;

    margin: 2rem;
    height: 1.5rem;

    .circle {
      height: 50%;
      margin: 0 .135rem;
      aspect-ratio: 1;
      border-radius: 100%;
      border: 1px solid var(--accent-opacity-75);
      cursor: pointer;
    }

    .active { 
      aspect-ratio: 2;
      border-radius: 5px;
      background: var(--accent); 
      transition: all 1s;
    }
  }

  .icon-list {
    top: 0;
    position: absolute; 
    margin: 2rem;
    display: flex;
    height: 8rem;
    width: 11rem;
    flex-direction: column;
    justify-content: space-around;

    .item-container {
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      &:first-child { margin-top: 0; }

      .item-links {
        display: inline-block;
        width: 100%;
        height: 100%;
      }

      .item {
        cursor: pointer;
        display: flex;
        position: absolute;
        bottom: 0;
        padding: 2% 0;
        transform: translateY(100%);
        animation: animate-three 0.7s ease-in;
        animation-fill-mode: forwards;
      }

      .one {
        animation-delay: 0.3s;
      }

      .two {
        animation-delay: 0.4s;
      }

      .three{
        animation-delay: 0.5s;
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

  .carousel-container {
    height: 100%;
    overflow: hidden;

    .carousel {
      display: flex;
      width: 500%;
      height: 100%;

      .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-basis: 50%;

          // &[data-focus] .image-title{
          //   transition: transform 1s ease-out;
          // }

          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            transition: filter 0.6s;
          }
      }
    }
  }

  @media screen and (max-height: 734px) {
    .about {
      row-gap: 1rem;
    }

    img {
      aspect-ratio: 1.7;
    }
  }

  // Keyframes animations
  @keyframes animate {
    from {width: 0;}
    to {
      width: 100%;
    }
  }

  @keyframes animate-one {
    from {width: 0;}
    to {
      width: 100%;
    }
  }

  @keyframes animate-two {
    from {width: 0;}
    to {
      width: 100%;
    }
  }

  @keyframes animate-three {
    from {transform: translateY(100%);}
    to {
      transform: translateY(0%);
    }
  }

</style>