<template>
  <v-layout>
    <v-flex class="fixer">
      <div class="octa-footer" :class="{'nobackground': img == false}">
        <div class="octa-footer-content">
          <div class="octa-footer-link">
            <div class="octa-footer-linker">
              <h1>{{data.home.title}}</h1>
              <nuxt-link class="octa-footer-nav-link" :to="item.to" v-for="(item, index) in data.home.links" :key="index">{{item.link}}</nuxt-link>
            </div>
            <div class="octa-footer-linker">
              <h1>{{data.sub.title}}</h1>
              <!-- <v-flex> -->
              <span class="octa-footer-motto">
                <octainput :dark="true" :white="true"/>
              </span>
              <!-- </v-flex> -->
              <!-- subscription component-->
            </div>
            <div class="octa-footer-linker">
              <h1>{{data.pro.title}}</h1>
              <nuxt-link class="octa-footer-nav-link" :to="item.to" v-for="(item, index) in data.pro.links" :key="index">{{item.link}}</nuxt-link>
            </div>
            <div class="octa-footer-linker">
              <span class="octa-footer-motto">{{data.motto}}</span>
            </div>
          </div>
        </div>
        <div class="octa-footer-desc">
          <span class="octa-footer-copyright">
            Powered by Octavues
            <span>|</span> Copyright &copy 2019
          </span>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import octainput from '~/components/input.vue';
export default {
  props: ["data", "img"],
  components:{
    octainput
  }
};
</script>

<style scoped>
.nobackground{
  background-image: none !important;
}
.fixer {
  z-index: 0;
}
.octa-footer-motto {
  height: 100%;
  margin: 20px;
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.octa-footer-linker .octa-footer-nav-link {
  color: #ffffff;
  margin: 0 0 5px 40px;
}
.octa-footer-linker h1 {
  margin: 40px 0px 20px 40px;
}
.octa-footer-linker {
  width: 100%;
  height: 100%;
  background-color: #353535;
  color: #ffffff;
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
  display: flex;
  flex-direction: column;
}
.octa-footer-link {
  max-width: 960px;
  margin: auto;
  display: grid;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
}

.octa-footer-copyright span {
  font-weight: 700;
  padding: 0 4px;
}
.octa-footer-copyright {
  color: #ffffff;
  font-family: "Montserrat", "sans-serif";
}
.octa-footer {
  background-image: url("../assets/footer/cover5.png");
  background-size: cover;
  background-position: center;
  display: grid;
}
.octa-footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-footer-desc {
  height: 50px;
  background-color: #353535;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 961px) {
  .octa-footer{
    height: 100vh;
    grid-template-rows: auto 50px;
  }
  .octa-footer-link {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .octa-footer-copyright {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  }
  .octa-footer-motto {
    font-size: 16px;
    line-height: 16px;
  }
  .octa-footer-linker .octa-footer-nav-link {
    font-size: 16px;
    line-height: 16px;
  }
  .octa-footer-linker h1 {
    font-size: 24px;
    line-height: 24px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  .octa-footer{
    padding: 20px;
    grid-template-rows: auto 50px;
  }
  .octa-footer-copyright {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
  }
  .octa-footer-motto {
    font-size: 16px;
    line-height: 16px;
  }
  .octa-footer-linker .octa-footer-nav-link {
    font-size: 16px;
    line-height: 16px;
  }
  .octa-footer-linker h1 {
    font-size: 20px;
    line-height: 20px;
  }
}
@media only screen and (max-width: 600px) {
  .octa-footer{
    grid-template-rows: auto 50px;
  }
  .octa-footer-copyright {
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
  }
  .octa-footer-motto {
    font-size: 14px;
    line-height: 14px;
  }
  .octa-footer-linker .octa-footer-nav-link {
    font-size: 14px;
    line-height: 14px;
  }
  .octa-footer-linker h1 {
    font-size: 16px;
    line-height: 16px;
  }
}
</style>
