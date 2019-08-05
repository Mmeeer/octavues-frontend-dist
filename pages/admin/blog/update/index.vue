<template lang="html">
  <v-flex xs12>
    <v-card>
      <v-card-text>
        <v-card flat v-if="blogs" v-for="(blog, index) in blogs" :key="index">
          <v-img :src="blog.header">
            <v-container fill-height pa-2 row justify-center align-content-center>
              <span class="headline white--text" v-text="blog.title"></span>
            </v-container>
          </v-img>
          <v-btn color="primary" @click="updateThis(blog._id)">Update</v-btn>
          <v-btn color="error" @click="deleteThis(blog._id)">Delete</v-btn>
          {{blog.date}}
          <br>
        </v-card>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({$axios}){
    let res = await $axios.$get(process.env.apiUrl+"/blogs")
    if(res.success){
      let data = {
        blogs: res.data.blogs
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else return {}
  },
  methods: {
    async deleteThis(val){
      let res = await this.$axios.$get(process.env.apiUrl+"/blog/delete/" + val);
      let ress = await this.$axios.$get(process.env.apiUrl+"/blogs")
      if(ress.success){
          this.blogs= ress.data.blogs
      }
    },
    updateThis(val){
      this.$router.push("/admin/blog/update/" + val);
    },

  }
}
</script>

<style lang="css" scoped>
</style>
