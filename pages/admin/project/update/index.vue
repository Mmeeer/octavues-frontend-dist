<template>
  <v-layout>
    <v-flex v-for="(item, index) in projects" :key="index" xs4>
      <v-card style="margin-bottom: 20px;">
        <v-img :src="item.image"></v-img>
        <v-card-title>
          <h4>{{item.title}}</h4>
        </v-card-title>
        <v-card-text>
          {{item.description}}
        </v-card-text>
        <v-card-actions>
          <v-btn :disable="loading" @click="updateThis(item._id)">update</v-btn>
          <v-btn :disable="loading" @click="deleteThis(item._id)">delete</v-btn>
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
      let res = await $axios.$get(process.env.apiUrl+"/getprojects")
      if(res.success){
        let data = {
          projects: res.data
        }
        return new Promise((resolve) => {
          setTimeout(function () {
            resolve(data);
          }, 4000)
        })
      }
    },
    methods: {
      async deleteThis(val){
        this.loading = true;
        let res = await this.$axios.$get(process.env.apiUrl+"/project/delete/" + val)
        if(res.success){
          this.$router.push("/admin")
        }
        this.loading = false;
      },
      updateThis(val){
        this.loading = true;
        this.$router.push("/admin/project/update/" + val);
        this.loading = false;
      }
    },
  }
</script>

<style scoped>

</style>
