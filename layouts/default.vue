<template>
  <v-app>
    <div class="octa-social">
      <div class="octa-social-item">
        <a href="https://www.facebook.com/octavues.official">
          <fa :icon="['fab', 'facebook']"/>
        </a>
      </div>
      <div class="octa-social-item">
        <a href="https://www.instagram.com/octavues.official">
          <fa :icon="['fab', 'instagram']"/>
        </a>
      </div>
      <div class="octa-social-item">
        <a href="#">
          <fa :icon="['fab', 'twitter']"/>
        </a>
      </div>
    </div>
    <Nav/>
    <nuxt/>
  </v-app>
</template>

<script>
import Nav from '~/components/navigation.vue';
export default {
  data() {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  },
  components:{
    Nav
  }
}
</script>
<style>
.intro-enter-active, .intro-leave-active {
  transition-duration: 1600ms;
}
.intro-enter-active::before, .intro-leave-active::before, .intro-enter-active::after, .intro-leave-active::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 50%;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
}
.intro-enter-active::before, .intro-leave-active::before {
  background-color: #2e2e2e;
}
.intro-enter-active::after, .intro-leave-active::after {
  top: 50%;
  background-color: #2e2e2e;
}
.intro-leave::before, .intro-leave::after {
  transform: scaleX(0);
}
.intro-leave-active::before {
  transition-duration: 800ms;
}
.intro-leave-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}
.intro-leave-to::before, .intro-leave-to::after {
  transform: scale(1);
  transform-origin: left;
}
.intro-enter::before, .intro-enter::after {
  transform: scaleX(1);
}
.intro-enter-active::before {
  transition-duration: 800ms;
}
.intro-enter-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}
.intro-enter-to::before, .intro-enter-to::after {
  transform: scaleX(0);
  transform-origin: right;
}

a{
  color: #222222;
  text-decoration: none;
}
  body, html{
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p{
    font-family: 'Montserrat', sans-serif;
  }
  h1{
    font-size: 64px;
  }
  h2{
    font-size: 48px;
    line-height: 48px;
  }
  h3{
    font-size: 32px;
  }
  h4{
    font-size: 24px;
  }
  h5{
    font-size: 16px;
    text-transform: uppercase;
  }
  h6{
    font-size: 12px;
    text-transform: uppercase;
  }
  a{
    text-decoration: none;
  }
  .octa-social{
    position: fixed;
    display: grid;
    grid-auto-rows: 50px;
    grid-template-columns: 50px;
    left: 0;
    z-index: 1;
    grid-gap: 10px;
  }
  @media only screen and (min-width: 961px){
    .octa-social{
      top: calc(calc(100vh/2) - 85px);
      grid-auto-rows: 50px;
      grid-template-columns: 50px;
    }
  }
  @media only screen and (max-width: 960px){
    .octa-social{
      grid-auto-rows: 40px;
      grid-template-columns: 40px;
      top: 10px;
    }
  }
  .octa-social-item{
    background: white;
    padding: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  }
  .octa-social-item:first-child:hover{
    color: #3b5998 !important;
    transition: all 0.3s ease;
  }
  .octa-social-item:last-child:hover{
    color: #00acee !important;
    transition: all 0.3s ease;
  }
  .octa-social-item:nth-child(2):hover{
    color: #e4405f !important;
    transition: all 0.3s ease;
  }
</style>
