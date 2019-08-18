<template lang="html">
  <div>
    <Blogid v-if="blog" :data="blog"/>
  </div>
</template>

<script>
import Blogid from '~/components/blogid.vue';
export default {
transition: "intro",
  components:{
    Blogid,
  },
  async asyncData({$axios, redirect}){
    let response = await $axios.$get(process.env.apiUrl + "/blog")
    if(response.success == false) {
      error({ statusCode: 404, message: err.message })
    }
    if(response.success == true && response.data.blog){
      console.log(response.data)
      let data = {
        blog: response.data,
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else if(!response.data.blog){
      redirect("/404")
    }
  },
  head () {
    return {
      title: this.blog.blog.title,
      meta: [
        { name: "og:title", property: 'og:title', content: this.blog.blog.title },
        { name: "og:type", property: "og:type", content: "article"},
        { name: "og:description", property: 'og:description', content: this.blog.blog.description},
        { name: "og:site_name", property:"og:site_name", content:"Octavues" },
        { name: "og:image", property:"og:image", content: this.blog.blog.image },
        { hid: 'description', name: 'description', content: this.blog.blog.description },
        { hid: 'author', name: "author", content: this.blog.blog.author.name}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
