<script lang="ts">
  import { defineComponent } from "vue";

  import Content from "@/components/utils/Content.vue";
  import Image from "@/components/utils/Image.vue";

  import TwitterIcon from "@/components/icons/TwitterIcon.vue";
  import InstagramIcon from "@/components/icons/InstagramIcon.vue";
  import FacebookIcon from "@/components/icons/FacebookIcon.vue";
  import InfoIcon from "@/components/icons/InfoIcon.vue";


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

      <div class="image-title">
        <div class="main-header">CEO</div>
        <div class="sub-header">roman fredrick</div>
      </div>

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
    right: 0;
    margin: 2rem;
  }

  .image-title {
    bottom: 0;
    position: absolute;
    margin: 2rem;

    .main-header {
      font-size: 4rem;
      text-transform: uppercase;
      line-height: .8;
      padding-bottom: .5rem;
    }

    .sub-header {
      font-variant: small-caps;
      font-size: 1.5rem;
      color: var(--accent);
      font-weight: 600;
      letter-spacing:  .1rem;     
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
</style>