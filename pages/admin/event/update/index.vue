<template lang="html">
  <v-layout>
    <v-flex v-for="event in events" :key="event._id" xs12 sm6 md3>
      <v-card>
        <v-img :src="event.maindata.img"></v-img>
        <v-card-text>{{event.maindata.title}}</v-card-text>
        <v-card-actions>
          <v-btn flat small color="primary" :disabled="loading" @click="update(event._id)">Update</v-btn>
          <v-btn flat small color="error" :disabled="loading" @click="deleteThis(event._id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: "admin",
  data(){
    return{
      loading: false,
    }
  },
  async asyncData({$axios}){
    let res = await $axios.$get(process.env.apiUrl+'/allevents')
    if(res.success){
      let data = {
        events: res.data
      }

      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    }
  },
  methods: {
    update(val){
      this.$router.push("/admin/event/update/" + val);
    },
    async deleteThis(val){
      this.loading = true;
      let res = await this.$axios.get(process.env.apiUrl+"/event/delete/" + val);
      this.$router.push("/admin");
      this.loading = false;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
