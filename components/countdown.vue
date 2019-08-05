<template>
  <div class="fixer">
    <div class="octa-event">
      <v-parallax dark :height="height" :src="data.img">
        <div class="octa-coming-soon" ref="smt">
          <h1 v-html="data.title"></h1>
          <p>{{data.location}}</p>
          <div>
            <Timer :date="data.date" :end="data.enddate"/>
          </div>
          <br>
          <div class="line-smt">
            <div class="smt-line">
              <span></span>
            </div>
            <Octabtn word="See More" :to="'/events/' + id"/>
            <div class="smt-line">
              <span></span>
            </div>
          </div>
        </div>
      </v-parallax>
    </div>
  </div>
</template>

<script>
import Timer from '~/components/timer.vue';
import Octabtn from '~/components/octa-btn.vue'
export default {
    props: ['data', 'id'],
    components:{
        Timer,
        Octabtn
    },
    data(){
      return{
        height: null
      }
    },
    mounted(){
      this.height = this.$refs.smt.clientHeight;
    }
};
</script>

<style scoped>
.fixer{
    z-index: 0;
}
.octa-coming-soon{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-event {
  height: 100vh;
}
.octa-coming-soon h1 {
  color: #ffffff;
  font-family: "Montserrat", "sans-serif";
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.octa-red {
  color: #ff2d55 !important;
  padding: 0;
}
.octa-coming-soon p {
  color: #ffffff;

  font-family: "Montserrat", "sans-serif";
  text-align: center;
}
.octa-countdown {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-column-gap: 10px;
  height: 110px;
}

@media only screen and (min-width: 961px) {
    .octa-coming-soon h1{
  font-size: 64px;
  line-height: 64px;
    }
    .octa-coming-soon p{
        font-size: 16px;
    }
}
@media only screen and (max-width: 960px) {
    .octa-coming-soon h1{
        font-size: 48px;
        line-height: 48px;
    }
    .octa-coming-soon p{
        font-size: 12px;
    }
}
.line-smt{
  max-width: 960px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 20px;
}
.smt-line{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.smt-line span{
  height: 5px;
  width: 100%;
  background: white;
  border-radius: 5px;
}
</style>
