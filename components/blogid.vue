<template lang="html">
  <v-layout>
    <div class="octa-grid" v-if="window.width > 960">
      <octaLeft :data="data"/>
      <octaRight :data="data.blogs"/>
    </div>
    <v-flex :class="{'ffixer': !$ua.isFromPc()}">
      <v-tabs centered dark style="min-height: 100vh;" grow v-if="window.width <= 960">
        <v-tab
          key="first"
          v-if="$ua.isFromPc()"
          >
        Article
        </v-tab>
        <v-tab
          key="second"
          v-if="$ua.isFromPc()"
        >
        Title
        </v-tab>
        <v-tabs-items v-model="tabs" >
          <v-tab-item>
            <v-card flat tile>
              <octaLeft :data="data"/>
            </v-card>
          </v-tab-item>
          <v-tab-item style="min-height: 100vh!important;">
            <v-card flat tile>
              <octaRight :data="data.blogs"/>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import octaLeft from '~/components/blogid-left.vue'
import octaRight from '~/components/blogid-right.vue'
export default {
  components:{
    octaLeft,
    octaRight,
  },
  props: ['data'],
  data(){
    return{
      tabs: null,
      window:{
        width: null,
        height: null
      },
      seed: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  methods:{
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  }
}
</script>

<style lang="css" scoped>
.ffixer{
  margin-top: -48px;
}
@media only screen and (min-width: 961px) {

  .octa-grid{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    z-index: 0;
    overflow: hidden;
  }

}
@media only screen and (max-width: 960px){
  .octa-left, .right{
    height: 100%;
  }
  .v-tabs__bar{
    display: none!important;
  }
  .active{
    transform: translateX(0);
  }
}
  .octa-left{
    overflow-x: hidden;
    overflow-y:auto;
    direction: rtl;
    font-size: 40px;
    overflow: auto;
  	transition: color 0.3s;
  }
  .right{
    overflow: scroll;
    overflow-x: hidden;
    overflow-y:scroll;
    font-size: 40px;
  }
</style>
