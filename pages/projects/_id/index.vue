<template lang="html">
  <v-layout>
    <Projectid v-if="project" :data="project"/>
  </v-layout>
</template>

<script>
import Projectid from '~/components/projectid.vue'
export default {
  transition: "intro",
  components:{
    Projectid
  },
  async asyncData({$axios, params, redirect}){
    let response = await $axios.$get(process.env.apiUrl+"/projects/" + params.id)
    if(response.success == true){
      if(response.data == null){
        redirect("/404")
      } else if(response.data.project == null){
        redirect("/404")
      }
      let data = {
        project: response.data.project,
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else{
      redirect("/404")
    }
  },
  head () {
    return {
      title: this.project.title,
      meta: [
        { name: "og:title", property: 'og:title', content: this.project.title },
        { name: "og:type", property: "og:title", content: "article"},
        { name: "og:description", property: 'og:description', content: this.project.description},
        { name: "og:site_name", property:"og:site_name", content:"Octavues" },
        { name: "og:video", property:"og:video", content: this.project.project[1].video },
        { name: "og:image", property:"og:image", content: this.project.image },
        { hid: 'description', name: 'description', content: this.project.description },
        { hid: 'author', name: "author", content: "Octavues"}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
