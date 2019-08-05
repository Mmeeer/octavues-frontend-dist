<template lang="html">
    <div class="octa-cont">
      <div class="left-line">
        <span class="octa-blog">Blog</span>
        <span class="octa-line"></span>
      </div>
      <div class="octa-blog-main">
          <nuxt-link :to="'/blog/'+item._id" v-if="data" v-for="(item, index) in data" class="octa-blog-card" :key="index">
          <div class="octa-card-img"  :style="{'background-image': 'url('+ item.header+ ')'}">
            <v-responsive :aspect-ratio="7/4">
            </v-responsive>
          </div>
          <div class="octa-card-cont">
            <div class="octa-card-title">
              {{item.title}}
            </div>
            <div class="octa-card-date">
              {{item.date}}
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="right-line">
        <span class="octa-line"></span>
        <span class="octa-blog">Blog</span>
      </div>
    </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="css" scoped>
.fixer{
  z-index: 0;
}
.octa-cont{
  background: white;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 80px auto 80px;
  padding-top: 20px;
}
@media only screen and (min-width: 961px){
  .octa-blog-main{
    display: grid;
    grid-template: 'first first first second second second' 'third third fourth fourth fifth fifth';
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .octa-card-title{
    font-size: 16px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px){
  .octa-blog-main{
    display: grid;
    grid-template: 'first first second second' 'third third fourth fourth';
    grid-gap: 20px;
  }
  .octa-blog-card:last-child{
    display: none;
  }
  .octa-card-title{
    font-size: 14px;
  }
}
@media only screen and (max-width: 600px){
  .octa-blog-main{
    display: grid;
    grid-template: 'first' 'second' 'third';
  }
  .octa-blog-card:last-child{
    display: none;
  }
  .octa-blog-card:nth-child(4){
    display: none;
  }
  .octa-card-title{
    font-size: 10px;
  }
}
.octa-card-cont{
  display: grid;
  grid-template-columns: auto auto;
  font-family: 'Montserrat', sans-serif;
  color: black !important;
}
.octa-card-img{
  min-width: 200px;
  background-position: center;
  background-size: cover;
}
.octa-card-date{
  text-align: right;
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: scale(0.9);
}
.octa-card-title{
  max-height: 80px;
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  margin-right: -1em;
  padding-right: 1em;
  font-weight: 500;
  margin-top: 10px;
}
.octa-card-title:before{
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}
.octa-card-title:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
}

.octa-blog-card{
  height: 100%;
  display: grid;
  grid-template-rows: 0.8fr 0.2fr;
}
.octa-blog-card:first-child{
  grid-area: first;
}
.octa-blog-card:nth-child(2){
  grid-area: second;
}
.octa-blog-card:nth-child(3){
  grid-area: third;
}
.octa-blog-card:nth-child(4){
  grid-area: fourth;
}
.octa-blog-card:nth-child(5){
  grid-area: fifth;
}
.right-line , .left-line{
  writing-mode: vertical-lr;
  text-orientation: upright;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}
.octa-line{
    height: 70%;
    border-radius: 20px;
    border-left: 6px solid #222222;
}
</style>
