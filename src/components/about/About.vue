<script lang="ts">
  import { defineComponent } from "vue";

  import Content from "@/components/utils/Content.vue";
  import Image from "@/components/utils/Image.vue";

  import TwitterIcon from "@/components/icons/TwitterIcon.vue";
  import InstagramIcon from "@/components/icons/InstagramIcon.vue";
  import FacebookIcon from "@/components/icons/FacebookIcon.vue";
  import InfoIcon from "@/components/icons/InfoIcon.vue";

  import {} from '@/components/about/scripts/index';

  export default defineComponent({
      components: {
        Image, Content,
        TwitterIcon, FacebookIcon, InstagramIcon, InfoIcon
      }
    });
</script>

<template>
  <div class="about">
    <Image style="grid-area: image;">
      <div data-slider="projects-slider" class="carousel-container">
        <ul data-wrapper class="carousel">
          <figure class="item" data-focus>
            <img src="@/assets/images/dawn.jpg">
            <figcaption class="image-title"> 
                <div data-text="CEO" class="main-header">CEO</div>
                <div data-text="roman&nbsp;frederick" class="sub-header">roman frederick</div>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/giant.jpg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;I" class="main-header">Project I</div>
                <div data-text="Real&nbsp;Estate" class="sub-header">Real Estate</div>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/rocket.jpg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;II" class="main-header">Project II</div>
                <div data-text="Oilfield&nbsp;services" class="sub-header">Oilfield services</div>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/up.jpg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;III" class="main-header">Project III</div>
                <div data-text="Engineering" class="sub-header">Engineering</div>
            </figcaption>
          </figure>

          <figure class="item">
            <img src="@/assets/images/headshot.jpg">
            <figcaption class="image-title"> 
                <div data-text="Project&nbsp;IV" class="main-header">Project IV</div>
                <div data-text="Ancillary&nbsp;services" class="sub-header">Ancillary services</div>
            </figcaption>
          </figure>
        </ul>
      </div>

      <ul class="icon-list">
        <li class="item">
          <div class="icon"><TwitterIcon></TwitterIcon></div>
          <div class="label">twitter</div>
        </li>
        <li class="item">
          <div class="icon"><FacebookIcon></FacebookIcon></div>
          <div class="label">facebook</div>
        </li>
        <li class="item">
          <div class="icon"><InstagramIcon></InstagramIcon></div>
          <div class="label">instagram</div>
        </li>
      </ul>

      <InfoIcon class="corner-icon"/>

      <div class="pagination">
        <div class="circle active"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </Image>

    <Content>
      <template #sub-header>dependable and reliable</template>
      <template #main-header>who we are</template>
      <template #main-text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae odit min  Quaerat quae odit minima obcaecati dolorum, pariatur dicta ad illo incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi labore eaque d
      </template>
      <template #highlighted-text>choose us, you will not regret it!</template>
      <template #button>book a call!</template>
    </Content>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100%;
    padding: 2rem;
    position: relative;

    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: 50% 50%;
    grid-template-rows:  auto min-content;
    grid-template-areas: "image image" "main-content main-content" ;
  }

  .corner-icon {
    height: 2.5rem;
    aspect-ratio: 1;
    border-radius: 100%;
    border: 2px solid var(--accent-opacity-75);
    fill: var(--accent-opacity-75);
    padding: .5rem;
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;
  }

  .image-title {
    display: none;
    position: absolute;
    z-index: 1;
    flex-basis: 100%;
    margin: 2rem;
    bottom: 0;
    // transition: display 1s;

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
    }

    .active { 
      aspect-ratio: 2;
      border-radius: 5px;
      background: var(--accent); 
    }
  }

  .icon-list {
    top: 0;
    position: absolute; 
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

  .carousel-container {
    height: 100%;
    overflow: hidden;
    // display: flex;

    .carousel {
      display: flex;
      width: 500%;
      height: 100%;

      .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-basis: 50%;

          &[data-focus] .image-title{
            display: block;
          }

          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
      }
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

</style>