<template>
  <v-layout>
    <v-flex class="fixer">
      <!-- header -->
      <div class="octa-container">
        <div class="octa-header">
          <span class="octa-header-title">timeline</span>
          <span class="octa-header-underline">
            <!-- underline -->

          </span>
        </div>
      </div>
      <!-- timeline-->
      <v-timeline v-for="(smt, index) in bash" :key="index" :align-top="!$ua.isFromPc()" :dense="!$ua.isFromPc()">
        <v-timeline-item :right="index%2 == 0" :left="index%2 == 1" :small="!$ua.isFromPc()" v-for="item in smt" :key="item._id">
          <v-card class="elevation-2">
            <v-card-title class="headline" v-html="'<b>' + item.title + '</b>'"></v-card-title>
            <v-card-text v-html="item.content"></v-card-text>
            <v-card-text v-html="item.date"></v-card-text>
          </v-card>
        </v-timeline-item>
        <div class="octa-image" v-if="$ua.isFromPc()">
            <div>
                <img v-if="index%2 == 0 && lala" :src="url + '/assets/timeline/' + (index+1) + '.png'">
            </div>
            <div>
                <img v-if="index%2 == 1 && lala" :src="url + '/assets/timeline/' + (index+1) + '.png'">
            </div>
        </div>
      </v-timeline>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props:['data'],
    data() {
      return {
        url: null,
        lala: false,
        bash: [],
        basher: []
      }
    },
    mounted(){
      this.url = process.env.apiUrl;

      for(let i = 0; i < this.data.length; i++){
        if(i>0 && i%3 == 0){
          this.bash.push(this.basher);
          this.basher = [];
        }
        this.basher.push(this.data[i]);
      }
      this.bash.push(this.basher);
      this.lala = true;
    }
};
</script>

<style lang="css" scoped>
.fixer {
  z-index: 0;
  padding: 20px;
}
.octa-image{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: -1;
}
.octa-image div{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.octa-image img{
    max-height: 100%;
    max-width: 100%;
    margin: 0 auto;
}
.octa-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.octa-header {
  display: grid;
  grid-template-rows: auto auto;
}
.octa-header .octa-header-title {
  color: #222222;
  font-size: 64px;
  font-family: "Montserrat", "sans-serif";
  font-weight: 700;
  text-transform: uppercase;
  line-height: 64px;
  margin: 0;
  align-items: center;
}
.octa-header .octa-header-underline {
  height: 8px;
  border-radius: 8px;
  width: 100%;
  background-color: #222222;
}
</style>
