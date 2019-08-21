<template lang="html">
  <div class="octa-main">
    <div class="octa-left">
    </div>
      <div class="octa-container">
        <h2>{{title}}</h2>
        <div class="octa-content">
          {{description}}
        </div>
        <div class="octa-grid">
          <div class="">
            <p class="octa-special">{{powered}}</p>
            <p v-for="(item,index) in poweredby" :key="index">{{poweredby[index]}}</p>
          </div>
          <div class="octa-button">
            <octabutton :word="button.word" :to="button.to"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import octabutton from '~/components/octa-btn.vue'
export default {
  components:{
    octabutton,
  },
  data(){
    return{
      title:"About The Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      powered:"Powered by",
      poweredby:["Octavues","Mevento"],
      button:{
        word:"All event",
        to: "/events",
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .octa-main{
    width: 100%;
    background-color: #222222;
    color: #ffffff;
    height: inherit;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  }
  .octa-content{
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }
  .octa-grid{
    display: grid;
    grid-template: "first second";
    height: inherit;
    font-size: 18px;
    margin-top: 10px;
  }
  .octa-special{
    font-weight: 700;
  }

  .octa-button{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p{
    margin-bottom: 5px;
  }
@media only screen and (min-width:961px){
  .octa-main{
    display:grid;
    grid-template-columns: 200px auto;
  }
  .octa-left{
    background-image: url('~assets/home/polygon.png');
    background-position: left;
    background-size: contain;

  }
  .octa-container{
    margin: 30px;
  }
}
@media only screen and (max-width: 960px){
  .octa-container{
    max-width: 780px;
    margin: auto;
  }
  .octa-main{
    padding: 1em;
  }
  h1{
    font-size:48px;
  }
  .octa-left{
    display: none;
  }
}
</style>
