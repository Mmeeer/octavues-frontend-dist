<template lang="html">
  <v-layout class="fixer">
    <v-flex>
      <Login/>
    </v-flex>
  </v-layout>
</template>

<script>
import Login from '~/components/login.vue';
export default {
  transition: "intro",
  components: {
    Login,
  },
  async asyncData(){
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 4000)
    })
  }
}
</script>

<style lang="css" scoped>
.fixer{
  z-index: 0;
}
</style>
