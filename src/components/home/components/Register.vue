<script lang="ts">
  import PenPaperIcon from "@/components/icons/PenPaperIcon.vue";
  import emailjs from '@emailjs/browser';

  export default {
    components: { PenPaperIcon },
    methods: {
      sendEmail() {
        emailjs.sendForm('contact_service', 'contact_form_namor_reply', this.$refs.form as HTMLFormElement, 'AZZHVmu8BUnFltQfO')
          .then((result) => {
            alert('Success! You have successfully subscribed!');
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
  <section class="register" style="grid-area: register;">
    <header class="header">
      <h2 class="main-header">register</h2>
      <PenPaperIcon class="icon"/>
    </header>
    <div class="special-text">
      <span style="letter-spacing: 0;">&mdash;&mdash;</span> be notified when we launch
    </div>
    <p class="text">Type your email below to recieve updates from Namor Technologies. We don't spam ;)</p>
    <form ref="form" @submit.prevent="sendEmail" action="" class="form">
      <input type="text" placeholder="example@email.com" name="user_email" class="email">
      <input type="submit" value="ok" class="submit">
    </form>
  </section>
</template>

<style lang="scss" scoped>
  .register { 
    width: 100%; 
    margin: 0 auto 2rem; 
  }

  .header {
    display: none;
    grid-template-rows: auto;
    grid-template-columns: auto min-content;

    margin-bottom: .5rem;
    padding-bottom: .5rem;
    border-bottom: .5rem solid var(--accent-opacity-50);

    .main-header {
      font-size: 3rem;
      font-weight: 700;
      font-variant: small-caps;
      letter-spacing: .1rem;
    }

    .icon { 
      height: 3rem; 
      aspect-ratio: 1;
      fill: var(--accent);
      padding-left: 1rem;
    }
  }

  .text {
    display: none;
    line-height: 1.2;
    font-size: 1.25rem;
    text-align: justify;
    letter-spacing: .1rem;    
    margin-bottom: 1rem;
  }

  .special-text {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: .1rem;
    color: var(--accent);
    text-transform: uppercase;
    margin: 1rem auto;
  }

  .form {
    display: grid;
    grid-template-columns: 85% auto;
    .email {
      padding: 1rem;
      font-size: 1.25rem;
      letter-spacing: .4rem;
      background: rgba(255, 191, 0, .15);
      border-bottom: 2px solid var(--accent);
    }

    .submit {
      background: var(--accent);
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: .1rem;
      color: black;
      text-transform: uppercase;
    }
  }

  @media screen and (max-height: 700px){
    .register { margin-bottom: 1rem; }
    .form { display: none; }
  }

  @media screen
  and (min-width: 600px) {
    .register { width: 90%; margin: auto; margin-left: 0; }
    .header { display: inline-grid; }
    .text { display: block; }
  }

  @media screen
  and ((min-width: 1100px) or (orientation: landscape))
  {
    .register { margin: auto 0 auto auto; }
  }
</style>