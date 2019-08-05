<template lang="html">
  <v-layout wrap>
    <v-flex xs6>
        <vue-editor class="heighter" v-model="title" :editorOptions="smt" :disable="loading" />
        <vue-editor v-model="content" :editorOptions="description" :disable="loading" />
    </v-flex>
    <v-flex xs6>
      <v-date-picker v-model="date" :landscape="landscape" :reactive="reactive"></v-date-picker>
    </v-flex>
    <v-flex xs12>
      <v-btn color="success" :disable="loading" @click="uploadTimeline()">Send</v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({$axios, params}){
      let res = await $axios.$get(process.env.apiUrl+"/timeline/update/" + params.id);
      if(res.success){
          let data = {
              title: res.data.title,
              content: res.data.content,
              date: res.data.date
          }
          return new Promise((resolve) => {
            setTimeout(function () {
              resolve(data);
            }, 4000)
          })
      }
  },
  data () {
    return {
    //   maintitle: "<h2>Hello</h2>",
    //   content: '<p>I am Example</p>',
      loading: false,
      smt: {
        theme: 'bubble',
        modules: {
          toolbar: [
            []
          ]
        }
      },
      description: {
        theme: 'bubble',
        modules: {
          toolbar: [
            ['bold', 'italic']
          ]
        }
      },
    //   picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    }
  },
  methods:{
    async uploadTimeline(){
      this.loading = true;
      let data = {
        title: this.title,
        content: this.content,
        date: this.date
      }
      let res = await this.$axios.$post(process.env.apiUrl+"/timeline/update/" + this.$route.params.id, data);
      this.title = "";
      this.content = "";
      if(res.success) this.$router.push("/admin/timeline/update/");
      this.loading = false;
    }
  }
}
</script>

<style lang="css" scoped>
.heighter{
  height: inherit;
}
</style>
