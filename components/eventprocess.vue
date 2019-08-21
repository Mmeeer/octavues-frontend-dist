<template lang="html">
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" :height="height">
    <v-container ref="infoBox" style="align-items: center;">
      <div>
        <v-tabs color="purple" dark grow slider-color="pink">
          <v-tab v-for="item in event" :key="item.title" ripple>{{item.title}}</v-tab>
          <v-tab-item v-for="item in event" :key="item.title">
            <v-card flat tile>
              <v-timeline align-top dense>
                <v-timeline-item color="pink" small v-for="el in item.action" :key="el.title">
                  <v-layout pt-3>
                    <v-flex xs3>
                      <strong v-if="el.left">{{el.left}}</strong>
                    </v-flex>
                    <v-flex>
                      <strong v-if="el.right.title">{{el.right.title}}</strong>
                      <div class="caption" v-if="el.right.caption">{{el.right.caption}}</div>
                      <v-avatar size="128" v-if="el.right.avatars" v-for="av in el.right.avatars" :key="av">
                        <v-img :src="av"></v-img>
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  props:['event'],
  data(){
    return{
      height: null,
    }
  },
  mounted(){
    setInterval(function(){
      this.height = this.$refs.infoBox.clientHeight;
    }.bind(this), 300)
  }
}
</script>

<style lang="css" scoped>
.img{
  height: 100%;
}
</style>
