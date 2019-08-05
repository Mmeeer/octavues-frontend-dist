<template lang="html">
  <div>
    <v-layout wrap>
      <v-flex xs12>
        <label>File
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept="video/mp4"/>
        </label>
          <v-btn v-on:click="submitFile()" :disabled="loading">Submit</v-btn>
          <span v-if="loading">Loading Please Wait!!!</span>
      </v-flex>
      <v-flex xs6 v-for="(video, index) in videos" :key="index">
        <v-card flat>
          <v-card-text>
            <vue-plyr>
              <video :src="video.filename"></video>
            </vue-plyr>
          </v-card-text>
          <v-card-actions>
            <v-btn flat small color="primary" :disabled="loading" @click="copyLink(video.filename)">Copy</v-btn>
            <v-btn flat small color="error" :disabled="loading" @click="deleteVideo(video._id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout wrap row>
      <v-flex text-xs-center>
        <v-pagination
          v-model="page"
          :length="pages"
          :total-visible="5"
          circle
        ></v-pagination>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
    let res = await $axios.$get(process.env.apiUrl + "/videos/" + '1');
    if(res.success){
      let data = res.data;
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    }
  },
  layout: "admin",
  data(){
    return {
      file: '',
      page: 1,
      loading: false
    }
  },
  watch:{
    page: function(val){
      this.sync(val);
    }
  },
  methods: {
    copyLink(val){
      this.$copyText(val);
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    async submitFile(){
      this.loading = true;
      let formData = new FormData();
      formData.append('file', this.file);
      let res = await this.$axios.$post(process.env.apiUrl + '/videos', formData, { headers: { 'Content-Type': 'multipart/form-data' } } );
      if(res.success){
        this.sync(1);
        this.loading = false;
      }
    },
    async sync(val){
      this.loading = true;
      let res = await this.$axios.$get(process.env.apiUrl + "/videos/" + val);
      this.videos = res.data.videos;
      this.pages = res.data.pages;
      this.loading =false;
    },
    async deleteVideo(val){
      this.loading = true;
      let res = await this.$axios.$get(process.env.apiUrl + '/videos/delete/' + val);
      this.sync(1);
      this.loading = false;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
