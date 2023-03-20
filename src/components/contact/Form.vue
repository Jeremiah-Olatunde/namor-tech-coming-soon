<script lang="ts">
  import emailjs from '@emailjs/browser';

  export default {
    mounted: function(){
      const elements = document.getElementsByClassName("fit-to-container");

      const observer = new ResizeObserver((entries) => {
        for(const { target, contentBoxSize: [ { inlineSize, blockSize } ] } of entries) {
          if(!(target instanceof HTMLElement)) return;
          target.style.fontSize = `${inlineSize * parseFloat(target.dataset.fitRatio ?? "")}px`
        }
      });

      for(const elt of elements) observer.observe(elt);
    },

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
      <div class="sub-header fit-to-container" data-fit-ratio="0.0445">we would love to hear from you</div>
    </header>
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
      font-weight: 600; 
      color: var(--accent);
      letter-spacing: .1rem;
      text-transform: uppercase;
      margin: 2rem 0;
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
</style>