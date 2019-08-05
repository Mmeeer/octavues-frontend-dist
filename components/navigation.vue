<template>
  <div class="">
    <div class="octa-full" :class="{'octa-active': active}">
      <transition name="fade">
        <div class="octa-background" v-if="active">
          <div class="octa-floating">

              <Octagon :size="400" class="dafuqsmt" :now="now" v-on:checked="checkedDData($event)" v-on:clicked="clickTo($event)"/>
          </div>
          <div class="octa-floating">
            <div class="octa-nav-grid">
              <div class="octa-n-line">
                <transition>
                  <div :class="{'octaout': !active, 'octa-nav-line': active}"></div>
                </transition>
              </div>
              <div class="octa-nav-word">
                  <transition name="fade" mode="out-in">
                    <nuxt-link v-if="showing == 0" key="smt0" to="/">
                      <h3 @click="closeNav()">Home</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 1" key="smt1" to="/events">
                      <h3 @click="closeNav()">Events</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 2" key="smt2" to="/blog">
                      <h3 @click="closeNav()">Blog</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 3" key="smt3" to="/projects">
                      <h3 @click="closeNav()">Projects</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 4" key="smt4" to="/aboutus">
                      <h3 @click="closeNav()">About Us</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 5" key="smt5" to="/timeline">
                      <h3 @click="closeNav()">Timeline</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 6" key="smt6" to="/contactus">
                      <h3 @click="closeNav()">Contact Us</h3>
                    </nuxt-link>
                    <nuxt-link v-if="showing == 7" key="smt7" to="/login">
                      <h3 @click="closeNav()">Login</h3>
                    </nuxt-link>
                  </transition>
              </div>
              <div class="octa-n-line">
                <div class="octa-nav-line octa-right" :class="{'octaout': !active}"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="octa-nav" @click="active = !active; showing = now">
      <div class="octa-btn-item octa-center">
        <transition name="fade" mode="out-in">
          <fa v-if="active" key="smt" :icon="['fas', 'times']" class="octa-icon"/>
          <fa v-if="!active" key="smtmt" :icon="['fas', 'bars']" class="octa-icon"/>
        </transition>
      </div>
      <div class="octa-btn-item octa-error-special octa-circle">
        <svg height="85" width="85">
            <circle cx="42.5" cy="5" r="3" style="fill:white;stroke:none;"/>
            <circle cx="42.5" cy="80" r="3" style="fill:white;stroke:none;"/>
            <circle cx="5" cy="42.5" r="3" style="fill:white;stroke:none;"/>
            <circle cx="80" cy="42.5" r="3" style="fill:white;stroke:none;"/>
        </svg>
      </div>
      <div class="octa-btn-item octa-line">
        <svg height="80" width="80">
          <polyline points="37.5,0 64,11 75,37.5 64,64 37.5,75 11,64 0,37.5 11,11 37.5,0"
          style="fill:none;stroke:white;stroke-width:1.5"/>
        </svg>
      </div>
      <div class="octa-btn-item octa-btn-special octa-filled">
        <svg height="60" width="60">
          <polyline points="30,0 51.2132,8.7868 60,30 51.2132,51.2132 30,60 8.7868,51.2132 0,30 8.7868,8.7868 30,0"
          style="fill:white;stroke:none;"/>
        </svg>
      </div>
      <div class="octa-btn-item octa-btn-special">
        <svg height="60" width="60">
          <polyline points="30,0 51.2132,8.7868 60,30 51.2132,51.2132 30,60 8.7868,51.2132 0,30 8.7868,8.7868 30,0"
          style="fill:white;stroke:none;opacity: 0.5"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import Octagon from '~/components/octa.vue';
export default{
  data(){
    return{
      active: false,
      now: 0,
      showing: 0
    }
  },
  components:{
    Octagon
  },
  methods:{
    checkedDData(val){
      if(this.showing != val){
        this.showing = val;
      }
    },
    clickTo(val){
      this.$router.push(val);
      this.closeNav();
    },
    closeNav(){
      this.now = this.showing;
      this.active = !this.active;
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: z-index .5s step-end, opacity .5s linear;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  z-index: 0;
}
.octa-full{
  height: 100vh;
  width: 100vw;
  position: fixed;
  transition: z-index .5s step-end;
  z-index: 0;
}
.octa-active{
  transition: z-index .5s step-start;
  z-index: 1;
}
.octa-background{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('~assets/nav/cover.png');
  background-position: center;
  background-size: cover;
}
.octa-nav{
  position: fixed;
  padding: 5px;
  z-index: 1;
  height: 85px;
  width: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
}
@media only screen and (min-width: 961px){
  .octa-nav{
    top: calc(50% - 37.5px);
    right: calc(25vw - 75px);
  }
}
@media only screen and (max-width: 960px){
  .octa-nav{
    bottom: 25px;
    right: 25px;
  }
}
@media only screen and (max-width: 600px){
  .dafuqsmt{
    transform: scale(0.8);
  }
}
.octa-btn-item{
  height: 75px;
  width: 75px;
  position: absolute;
}
.octa-btn-special{
  height: 60px;
  width: 60px;
}
@keyframes WIDTH {
  0%   { width: 0; }
  100% { width: 50%; }
}
.octa-error-special{
  margin-top: -5px;
  margin-left: -5px;
}
.octa-icon{
  height: 24px;
  width: 24px;
  z-index: 2;
}
.octa-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-line, .octa-circle, .octa-filled{
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.octa-nav:hover .octa-line{
  transform: rotate(90deg);
}

.octa-nav:hover .octa-circle{
  transform: rotate(-90deg);
  margin-top: 5px;
  margin-top: 5px;
}
.octa-nav:hover .octa-filled{
  transform: scale(0.8);
}
.octa-floating{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-nav-grid{
  z-index: 1;
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 10px 60px 10px;
}
.octa-nav-line{
  height: 100%;
  width: 50%;
  animation-name: WIDTH;
  animation-duration: 0.5s;
  background: #222222;
}
@keyframes MOVE {
  from{ transform: translateX(0); }
  to{ transform: translateX(50px); }
}
.octaout{
  height: 100%;
  width: 50%;
  animation-name: MOVE;
  animation-duration: 0.3s;
  animation-timing-function: linear;
}
.octa-right{
  float: right;
}
.octa-left{
  float: left;
  margin-top: 50%;
}
.octa-nav-word{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: cneter;
}
.octa-nav-word h3{
  text-align: center;
  color: #222222;
}
</style>
