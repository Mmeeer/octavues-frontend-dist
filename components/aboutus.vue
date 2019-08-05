<template>
  <v-layout>
    <v-flex class="fixer">
      <div class="octa-about-us-header">
        <span class="octa-about-us-bg"></span>
      </div>
      <div class="octa-about-us">
        <div class="octa-section">
          <span class="octa-wave-left"></span>
          <span class="octa-tosection-content">
            <span class="octa-tosection-title">OUR TEAM</span>
            <span class="octa-underline"></span>
          </span>
          <span class="octa-wave-right"></span>
        </div>
        <div class="octa-team">
          <span class="octa-members octa-member-pro-center" v-for="(item, index) in data" :key="index" @mouseover="item.tmp = item.img2" @mouseleave="item.tmp = item.img1">
            <transition name="fade" mode="out-in">
              <span class="octa-member-profile" key="1" v-if="item.tmp == item.img1" :style="{backgroundImage: 'url(' + item.img1 + ')'}"></span>
              <span class="octa-member-profile" key="2" v-if="item.tmp == item.img2" :style="{backgroundImage: 'url(' + item.img2 + ')'}"></span>
            </transition>
            <span class="octa-member-name">{{item.name}}</span>
            <span class="octa-member-role">{{item.role}}</span>
          </span>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.fixer {
  z-index: 0;
}
.octa-member1 {
  width: 250px;
  height: 250px;
}
.octa-underline {
  width: 100%;
  background-color: #ffffff;
}
.octa-tosection-title {
  color: #ffffff;
  font-family: "Montserrat", "sans-serif";
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
}
.octa-tosection-content {
  display: grid;
  grid-template-rows: auto auto;
}
.octa-section {
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 10px;
}
.octa-member-role {
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
}
.octa-member-name {
  color: #ff2d55;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
}
.octa-member-name, .octa-member-role {
  margin-top: 10px;
  font-family: "Montserrat", "sans-serif";
  text-align: center;
}
.octa-member-pro-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-member-profile {
  width: 250px;
  height: 250px;
  background-position: center;
  background-size: contain;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  border-radius: 100%;
}
.octa-team .octa-members {
  margin: 20px;
  display: grid;
  grid-auto-rows: auto auto auto;
}
.octa-team {
  /* padding: 40px 0 100px 0; */
  width: auto;
  margin: auto;
  display: grid;
}
.octa-about-us {
  margin: 0;
  padding: 0;

  background-image: url("../assets/aboutus/bg2@4x.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-about-us-header {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 0;

  background-image: url("../assets/aboutus/bg.png");
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-about-us-bg {
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/aboutus/main@4x.png");
  background-position: center;
  background-size: contain;
  position: absolute;
}
@media only screen and (min-width: 961px) {
  .octa-about-us-header {
    height: 400px;
  }
  .octa-about-us-bg {
    max-width: 960px;
  }
  .octa-team {
    padding: 40px 0 100px 0;
    max-width: 960px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .octa-tosection-title{
    font-size: 64px;
    line-height: 64px;
  }
  .octa-underline {
    height: 7px;
  }
  .octa-section {
    margin-top: 80px;
  }
}
@media only screen and (max-width: 960px) and (min-width: 601px) {
  .octa-about-us-header {
    height: 300px;
  }
  .octa-about-us-bg {
    max-width: 570px;
  }
  .octa-team {
    padding: 20px 0 70px 0;
    max-width: 770px;
    grid-template-columns: 1fr 1fr;
  }
  .octa-tosection-title{
    font-size: 48px;
    line-height: 48px;
  }
  .octa-underline {
    height: 5px;
  }
  .octa-section {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 600px) {
  .octa-about-us-header {
    height: 275px;
  }
  .octa-about-us-bg {
    width: 100%;
  }
  .octa-team {
    grid-template-columns: 1fr;
  }
  .octa-tosection-title{
    font-size: 24px;
    line-height: 24px;
  }
  .octa-underline {
    height: 3px;
  }
  .octa-section {
    margin-top: 30px;
  }
}
</style>
