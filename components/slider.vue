<template lang="html">
  <v-layout wrap class="fixer octa-slider">
    <v-flex xs12 class="slide">
      <transition name="component-fade" mode="out-in">
        <div class="octa-grid" v-for="(item, index) in slider" :key="index" v-if="selected == index">
          <div class="head">
          </div>
          <div class="octa-grid-left">
            <div class="center">
              <h2 class="octa-title">{{item.title}}</h2>
              <p class="octa-subtitle">{{item.description}}</p>
              <Octabtn v-if="item.button.word" :word="item.button.word" :to="item.button.to"/>
            </div>
          </div>
          <div class="octa-grid-right" v-if="item.video || item.poster">
            <!-- <div class="" > -->
              <v-responsive @click="playVideo(index)" class="complex" :aspect-ratio="1/1" :style="{'background-image': 'url('+ item.poster + ')'}" style="display: flex; flex-direction: row; justify-content: center; align-items: center; text-align: center; cursor: pointer;">
                <fa v-if="item.video" :icon="['far', 'play-circle']" style="height: 60px;"/>
              </v-responsive>
            <!-- </div> -->
          </div>
          <div class="whitespace">

          </div>
        </div>
      </transition>
      <div class="slider" :style="{'top': 'calc(calc(100% - ' + slider.length * 50 + 'px)/2)'}">
        <div class="slider-grid">
          <div v-for="(item, index) in slider.length" :key="'slider' + index" @click="checkThis(index)">
            <span class="slider-grid-item" :class="{'slider-grid-item-active': index == selected}">
              <span>{{binaryy(index)}}</span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <Video :active="active" v-if="slider[selected].video" :video="slider[selected].video" @notactive="playVideo(-1)"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Octabtn from '~/components/octa-btn.vue';
import Video from '~/components/video.vue';
let smt;
export default {
  props:["slider"],
  data(){
    return {
      active: false,
      selected:0,
    }
  },
  components: {
    Octabtn,
    Video
  },
  mounted(){
    smt = setInterval(function(){
      this.goNext();
    }.bind(this), 5000)
  },
  methods:{
    goNext(){
      this.selected = (this.selected + 1)%this.slider.length;
    },
    playVideo(val){
      if(val > 0){
        if(this.slider[val].video && this.slider[val].video.length){
          this.active = !this.active;
          if(this.active){
            clearInterval(smt);
          } else {
            smt = setInterval(function(){
              this.goNext();
            }.bind(this), 5000)
          }

        }
      } else if(this.active){
        this.active = !this.active;
        if(this.active){
          clearInterval(smt);
        } else {
          smt = setInterval(function(){
            this.goNext();
          }.bind(this), 5000)
        }
      }
    },
    checkThis(val){
      clearInterval(smt);
      this.selected = val;
      smt = setInterval(function(){
        this.goNext();
      }.bind(this), 5000)
    },
    binaryy(val){
      var s = "";
      while(val){
        s+=val%2;
        val= Math.floor(val/2);
      }
      if(s.length == 0){
        s = "000";
        return s;
      }
      s = s.split("");
      s = s.reverse();
      s = s.join("");
      if(s.length == 1) s = "00" + s;
      if(s.length == 2) s = "0" + s;
      return s;
    }
  },
}
</script>

<style lang="css" scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease, transform .3s ease;
}
.component-fade-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.component-fade-enter{
  opacity: 0;
  transform: translateX(100px);

}
.slider-grid{
  width: 100%;
  display: grid;
  grid-auto-rows: 50px;
}
.slider-grid-item{
  width: inherit;
  display: grid;
  grid-template-rows: auto 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
}
.slider-grid-item-active span:nth-child(2){
  background: white;
}
.slider-grid-item span:nth-child(2){
  transition: all 0.3s ease;
}
.slider-grid-item:hover span:nth-child(2){
  background: white;
}
.slider-grid div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 885px){
  .octa-grid{
    display: grid;
    grid-template: 'head head' 'left right' 'empty empty';
    grid-template-rows: 70px 1fr 70px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .octa-title{
    font-size: 3em;
  }
}
@media only screen and (max-width: 884px){
  .octa-grid{
    display: grid;
    grid-template: 'head' 'right' 'left' 'empty';
    grid-template-rows: 50px auto auto 0;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding-left: 15px;
    padding-right: 65px;
  }
  .octa-title{
    font-size: 1.5em;
  }
}
.slider{
  position: absolute;
  height: inherit;
  width: 50px;
  right: 0;
}
.octa-slider{
  position: relative;
  min-height: 100vh;
  background: url('~assets/3Dcube.png');
  background-size: cover;
  background-position: center;
}

.fixer{
  z-index: 0;
}
.octa-grid{
  min-height: 100%;
  max-width: 767px;
  width: auto;
  margin: auto;
}
.head{
  grid-area: head;
}
.octa-grid-right{
  grid-area: right;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-grid-left{
  grid-area: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-title{
  line-height: 1em;
}
.octa-subtitle{
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1em;
  line-height: 1em;
  font-weight: 500;
}
.complex{
  /* min-height: 400px; */
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
  margin: auto;
  /* background-image: url('~assets/video/video.png'); */
  background-size: cover;
  background-position: center;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
}
.video{
  position: fixed;
}
</style>
