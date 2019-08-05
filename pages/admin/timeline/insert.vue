<template lang="html">
  <v-layout wrap>
    <v-flex xs6>
        <v-text-field
          v-model="maintitle"
          label="Title"
          :disabled="loading"
         ></v-text-field>
        <vue-editor v-model="content" :editorOptions="description" :disabled="loading"/>
    </v-flex>
    <v-flex xs6>
      <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive" :disable="loading"></v-date-picker>
    </v-flex>
    <v-flex xs12>
      <v-btn color="success" :disable="loading" @click="uploadTimeline()">Send</v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  layout: "admin",
  async asyncData(){
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 4000)
    })
  },
  data () {
    return {
      loading: false,
      maintitle: "",
      content: '<p>I am Example</p>',
      title: {
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
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    }
  },
  methods:{
    async uploadTimeline(){
      this.loading = true;
      let data = {
        title: this.maintitle,
        content: this.content,
        date: this.picker
      }
      let res = await this.$axios.$post(process.env.apiUrl+"/timeline", data);
      this.$router.push("/admin/timeline/update/")
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
