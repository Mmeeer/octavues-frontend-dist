
<template lang="html">
  <div class="octa-fixer white">
    <span v-for="(item, index) in data.project" :key="index">
      <octatitle v-if="item.type == 'h1'" :data="item"/>
      <octatitle v-if="item.type == 'h2'" :data="item"/>
      <paragraph v-if="item.type == 'paragraph'" :data="item"/>
      <octavideo v-if="item.type == 'video'" :data="item"/>

    <div class="octa-container">
      <div class="octa-img" v-if="item.type=='img'" :style="{'background-image': 'url('+ item.img + ')'}">
      </div>
    </div>
  </span>
  </div>
</template>

<script>
import paragraph from '~/components/projectid-paraph.vue'
import octatitle from '~/components/projectid-title.vue'
import octavideo from '~/components/projectid-video.vue'
export default {
  props:["data"],
  components:{
    paragraph,
    octatitle,
    octavideo,
  }
}
</script>

<style lang="css" scoped>
  .white{
    background: white;
  }
  .v-parallax__content{
    padding: 0 !important;
  }
  .octa-fixer{
    width: 100%;
    z-index: 0;
  }
  .octa-img{
    height: 500px;
    width: 100%;
    background-position: center;
    background-size: cover;
    margin-bottom: 100px;
  }
  .octa-container{
    max-width: 960px;
    margin:auto;
  }
  .octa-title-content{
    font-size: 64px;
  }
  .octa-subtitle-content{
    font-size: 48px;
  }
  .octa-title-content, .octa-subtitle-content{
    color: #ffffff;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
  }
  .octa-subtitle ,.octa-title{
    width: 100vw;
    height: 300px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
@media only screen and (min-width:961px){
  .octa-desk{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: 300px;
  }
}
@media only screen and (max-width:960px) {
  .octa-container{
    max-width: 540px;
    margin: auto;
  }
  .octa-title-content{
    font-size: 56px;
  }
  .octa-subtitle-content{
    font-size: 40px ;
  }
  .octa-video{
    margin-bottom: 20px;
    height: 300px;
  }
}
</style>
