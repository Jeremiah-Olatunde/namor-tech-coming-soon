<script lang="ts">
  import DesktopHex from "./DesktopHex.vue";
  import emailjs from '@emailjs/browser';

  export default {
    mounted: function(){
      const elements = document.querySelectorAll("[data-fit]");
      const map = new Map(Array.from(elements).map(elt => [elt.textContent, 0]));

      for(const elt of elements) map.set(elt.textContent, findFitRatio(elt as HTMLElement));

      function findFitRatio(elt: HTMLElement) {
        elt.style.fontSize = "0px";
        elt.style.wordBreak = "break-all";

        const ε: number = .5;
        let δ = 20;

        let fontSize = 0;
        let prev = "inc";

        for(let i = 0; i < 20; i++) {
          const styleObj = getComputedStyle(elt);
          const height = parseFloat(styleObj.height);

          if(Math.round(height) == Math.round(fontSize)){
            if(δ < ε) break;
            δ = prev == "inc" ? δ : δ / 2;
            elt.style.fontSize = `${fontSize += δ}px`;
            prev = "inc";
          } else if(height > fontSize) {
            δ = prev == "dec" ? δ : δ / 2;
            elt.style.fontSize = `${fontSize -= δ}px`;
            prev = "dec";
          }
        }

        return fontSize / parseFloat(getComputedStyle(elt).width);        
      }

      const observer = new ResizeObserver((entries) => {
        for(const { target, contentBoxSize: [ { inlineSize: w, blockSize: h } ] } of entries){
          const elt = target as HTMLElement;
          const { textContent: text } = elt;

          if(!map.get(text)) map.set(text, findFitRatio(elt));
          let fontSize = map.get(text)! * w;

          elt.style.fontSize = `${fontSize}px`;

          if(Math.round(fontSize) == Math.round(h)) continue;
          else map.set(text, findFitRatio(elt));
        }
      });

      for(const elt of elements) observer.observe(elt);
    },

    components: { DesktopHex },
    methods: {
      sendEmail() {
        emailjs.sendForm('contact_service', 'contact_form_namor', this.$refs.form as HTMLFormElement, 'AZZHVmu8BUnFltQfO')
          .then((result) => {
            alert('Success! Your message has been received by Namor Technologies');
            console.log('SUCCESS!', result.text); 
          }, (error) => {
            alert('FAILED...');
            console.log('FAILED...', error.text)
          })
      }
    }
  }
</script>

<template>
  <section class="contact-form">
    <header class="header">
      <h1 class="main-header">
        <span data-fit>get in touch</span>
      </h1>
      <div class="sub-header" data-fit>we would love to hear from you</div>
    </header>
    <DesktopHex/>
    <form ref="form" @submit.prevent="sendEmail" action="" class="form">
      <input type="text" class="form-input" name="user_name" placeholder="NAME"/>
      <input type="text" class="form-input" name="user_email" placeholder="EMAIL"/>
      <textarea class="form-input" name="message" placeholder="YOUR MESSAGE HERE"></textarea>
      <input type="submit" class="submit" value="submit!"/>
    </form>
  </section>
</template>

<style lang="scss" scoped>
  .contact-form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sub-header {
    text-align: center;
    font-weight: 600; 
    color: var(--accent);
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .main-header {
    padding: .5rem 0; 
    display: none;

    span {
      display: block;
      font-weight: 700;
      font-variant: small-caps;
      letter-spacing: .1rem;
      text-align: center;
    }
  }

  .form {
    .form-input {
      height: 4rem;
      width: 100%;
      margin-bottom: 2rem;
      border-bottom: .1rem solid white;

      font-weight: 300;
      font-size: 1.4rem;
      letter-spacing: .2rem;

      transition: all .5s ease;

      &:focus {
        color: var(--accent);
        border-bottom: .1rem solid var(--accent);
      }
    }

    .submit {
      width: 100%;
      margin: 2rem 0 0;
      aspect-ratio: 6 / 1;

      font-size: 2rem;
      font-weight: 900;
      letter-spacing: .1rem;
      text-transform: uppercase;
      
      cursor: pointer;
      color: black;
      transition: all .5s ease;
      background: var(--accent);
    }
  }

  @media screen and (min-width: 600px){
    .form .message { 
      height: 8rem; 
    }
    .main-header { display: block ;}
  }

  @media screen and ((min-width: 1100px) or (orientation: landscape)){
    .form .message { 
      height: 8rem; 
    }
    .main-header { display: block ;}
  }
</style>