<template lang="html">
  <v-flex>
    <v-tabs
      color="#222222"
      dark
      show-arrows
      >
      <v-tabs-slider color="#cccccc"></v-tabs-slider>
        <v-tab
        v-for="(item, index) in sometypes"
        :key="index"
        >
          {{item.title}}
        </v-tab>
        <v-tabs-items>
          <v-tab-item
          v-for="(item, index) in sometypes"
          :key="index"
          >
          <v-card>
            <br>

              <v-layout align-center justify-center column fill-height>

                <croppa v-model="item.myCroppa"
                  :width="item.width/2"
                  :height="item.height/2"
                  :show-remove-button="false"
                  :canvas-color="'#222222'"
                  :placeholder="'Choose an image'"
                  :placeholder-font-size="0"
                  :placeholder-color="'default'"
                  :accept="'image/*'"
                  :file-size-limit="0"
                  :quality="2"
                  :zoom-speed="3"
                  :disabled="false"
                  :disable-drag-and-drop="false"
                  :disable-click-to-choose="false"
                  :disable-drag-to-move="false"
                  :disable-scroll-to-zoom="false"
                  :disable-rotation="false"
                  :prevent-white-space="true"
                  :reverse-scroll-to-zoom="false"
                  @new-image-drawn="uploadable = true"
                  @image-remove="uploadable = false"
                  style="-webkit-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.3); -moz-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.3); box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.3);"
                  >
                </croppa>
                <v-flex dark>
                  <v-btn color="#3FB8AF" v-if="uploadable" dark @click="upload(index)">Upload</v-btn>
                  <v-btn color="error" dark @click="item.myCroppa.remove()">Remove</v-btn>
                  <v-btn color="primary" dark @click="item.demo = item.myCroppa.generateDataUrl()">See Demo</v-btn>
                  <v-btn v-if="item.demo" color="primary" dark @click="item.demo = ''">Hide Demo</v-btn>
                </v-flex>
                <v-flex>
                  <img :src="item.demo">
                </v-flex>
              </v-layout>
              <br>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <br>
    <v-layout wrap row v-if="loading == false">
      <v-flex xs12 md6 dark color="secondary">
        <v-card style="cursor: pointer; margin: 10px;" v-for="(image, index) in images" v-if="index%2 == 0" @click="copyLink(image.filename)" @dblclick="removeImage(image._id)" :key="index">
          <v-img :src="image.filename"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 dark color="secondary">
        <v-card style="cursor: pointer; margin: 10px;" v-for="(image, index) in images" v-if="index%2 == 1" @click="copyLink(image.filename)" @dblclick="removeImage(image._id)" :key="index">
          <v-img :src="image.filename"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
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
  </v-flex>

</template>

<script>
export default {
  layout: 'admin',
  async asyncData({$axios}){
    let res = await $axios.$get(process.env.apiUrl+"/images/1")
    if(res.success){
      let data = {
        images: res.data.images,
        pages: res.data.pages,
        page: 1,
        loading: false
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    }
  },
  data(){
    return{
      myCroppa: {},
      width: 400,
      height: 400,
      uploadable: false,
      sometypes: [
        {
          title: "Header Image Paralax",
          width: 1920,
          height: 600,
          myCroppa: {},
          demo: ""
        },{
          title: "Blog Header Image",
          width: 1920,
          height: 300,
          myCroppa: {},
          demo: ""
        },{
          title: "Blog image",
          width: 900,
          height: 550,
          myCroppa: {},
          demo: ""
        },{
          title: "Profile Picture",
          width: 400,
          height: 400,
          myCroppa: {},
          demo: ""
        },{
          title: "Event Paralax image",
          width: 1920,
          height: 1080,
          myCroppa: {},
          demo: ""
        },{
          title: "Narrow Header Image",
          width: 1920,
          height: 500,
          myCroppa: {},
          demo: ""
        },{
          title: "Narrowest Header Image",
          width: 1920,
          height: 350,
          myCroppa: {},
          demo: ""
        },{
          title: "Slider Image",
          width: 400,
          height: 550,
          myCroppa: {},
          demo: ""
        },{
          title: "Project small parallax",
          width: 910,
          height: 1080,
          myCroppa: {},
          demo: ""
        },{
          title: "Project video image",
          width: 470,
          height: 280,
          myCroppa: {},
          demo: ""
        }
      ],
    }
  },
  watch:{
    page: async function(val){
      this.loading = true;
      let ress = await this.$axios.$get(process.env.apiUrl+"/images/" + val);
      if(ress.success){
        this.images = ress.data.images;
        this.pages = ress.data.pages;
        this.loading = false;
      } else this.loading = false;
    }
  },
  methods:{
    helloworld: function(val1, val2){
      this.width = val1;
      this.height = val2;
    },
    async upload(val){
      await this.sometypes[val].myCroppa.generateBlob(async (blob) => {
        this.loading = true;
        var fd = new FormData()
        fd.append('file', blob, 'filename.jpg')
        fd.append('other', 'blahblahblah')
        let res = await this.$axios.$post(process.env.apiUrl+"/uploads", fd, {headers: { 'Content-Type': `multipart/form-data;`}});
        this.sometypes[val].myCroppa.remove();
        if(res.success){
          if(this.page == 1){
            let ress = await this.$axios.$get(process.env.apiUrl+"/images/" + 1);
            if(ress.success){
              this.images = ress.data.images;
              this.pages = ress.data.pages;
              this.loading = false;
            } else this.loading = false;
          } else {
            this.page = 1;
            this.loading = false;
          }
          this.loading = false;
        } else this.loading = false;
      })
    },
    copyLink(val){
      this.$copyText(val);
    },
    async removeImage(val){
      let res = await this.$axios.$get(process.env.apiUrl+"/uploads/" + val);
      if(res.success){
        if(this.page == 1){
          let ress = await this.$axios.$get(process.env.apiUrl+"/images/" + 1);
          if(ress.success){
            this.images = ress.data.images;
            this.pages = ress.data.pages;
            this.loading = false;
          } else this.loading = false;
        } else {
          this.page = 1;
          this.loading = false;
        }
        this.loading = false;
      } else this.loading = false;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
