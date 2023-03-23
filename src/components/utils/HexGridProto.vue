<script lang="ts">
   import PlusIcon from '@/components/icons/PlusIcon.vue';

   export default {
    data: function() {
      return {
        src: [
          "src/assets/images/dawn.jpg", "src/assets/images/voyage.jpg",
          "src/assets/images/burj.jpg", "src/assets/images/crane.jpg",
          "src/assets/images/up.jpg", "src/assets/images/rocket.jpg",
          "src/assets/images/sunset.png",
        ]
      }
    },
    methods: {
      coor: function(n: number, hexW: number): number[][] {
        hexW = document.documentElement.clientWidth * hexW;
        const coorArr: number[][] = [];
        let h = 0;
        for(let i = 0; i < n; i++) {
          let w: number;

          if(i % 3 == 0) w =  0;
          else if(i % 3 == 1) w =  hexW;
          else w =  hexW / 2;

          coorArr.push([w, h * hexW * (1 / 0.8660254037844387), i]);
          if(i % 3 !== 0) h += 0.75;
        }

        return coorArr;
      }
    },
    components: { PlusIcon },
    mounted: function(){
      console.log(document.documentElement.clientWidth * .13)
    }
   }
</script>
<template>
  <div class="hex-grid" style="grid-area: hex-grid">
    <template v-for="[left, top, idx] in coor(5, .13)">
      <div 
        v-bind:class="`hex clip-hex`"
        v-bind:style="`left: ${left}px; top: ${top}px;`"
      >
        <PlusIcon class="plus-icon"/>
        <div class="mask clip-hex"></div>
        <img v-bind:src="src[Math.floor(Math.random() * src.length)]" alt="" class="image clip-hex">
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .clip-hex {
    clip-path: polygon(
      0% 25%,                  
      50% 0%,                  
      100% 25%,                 
      100% 75%,                  
      50% 100%,                  
      0% 75%
    );
  }

  .hex-grid {
    width: calc(2 * 13vw);
    aspect-ratio: 0.6928203230275509;
    margin: auto 0 auto auto;
  }

  .hex {
    width: 13vw;
    aspect-ratio: .8660;
    display: grid;
    place-items: center;
    background: var(--accent);
    position: absolute;
    overflow: hidden;
    z-index: 3;
    cursor: pointer;

    &:hover .mask { background: rgba(0, 0, 0, 0); }
    &:hover .plus-icon { display: none; }
  }

  .image {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
  }

  .mask {
    content: "";
    z-index: 1;
    height: calc(100% - 6px);
    width: calc(100% - 6px);
    background: rgba(0, 0, 0, .5);

    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    transition: background .5s ease;
  }

  .plus-icon {
    z-index: 2;
    aspect-ratio: 1;
    position: absolute;

    width: 20%;
    padding: .25rem;
    aspect-ratio: 1;

    fill: var(--accent);
    border-radius: 100%;
    border: 2px solid var(--accent);

    cursor: pointer;
  }
</style>