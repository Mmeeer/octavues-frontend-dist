<template lang="html">
  <v-layout>
    <v-card class="main">
      <v-card-text>
        <v-text-field v-model="header" :disabled="loading" label="Header image" hint="Дээд хэсэгт байрлах зурагны холбоосыг оруулна."></v-text-field>
        <v-text-field v-model="title" :disabled="loading" label="Title" hint="Гарчиг оруулна. Том жижиг бичгийн хэлбэрээр бичнэ(Capitalization)."></v-text-field>
        <v-text-field v-model="description" :disabled="loading" label="description" hint="Meta Data for SEARCH ENGINE"></v-text-field>
        <v-text-field v-model="image" :disabled="loading" label="Image" hint="Meta Image for SEARCH ENGINE"></v-text-field>
        <div class="context">
          <span v-for="item in content" class="">
            <span v-if="item.type == 'paragraph'">
              <vue-editor :disabled="loading" class="heighter" v-model="item.context" :editorOptions="para" />
            </span>
            <span v-if="item.type == 'sub-title'">
              <v-text-field :disabled="loading" v-model="item.context" label="Subtitle" hint="Дэд гарчиг оруулна. Том жижиг бичгийн хэлбэрээр бичнэ(Capitalization)."></v-text-field>
            </span>
            <span v-if="item.type == 'img'">
              <v-text-field :disabled="loading" v-model="item.context" label="Image" hint="Зурагны холбоосыг оруулна."></v-text-field>
            </span>
          </span>
        </div>
        <v-btn color="primary" :disabled="loading" @click="content.push({type: 'paragraph', context: 'this is paragraph'})">
          paragraph
        </v-btn>
        <v-btn color="primary" :disabled="loading" @click="content.push({type: 'sub-title', context: ''})">
          sub-title
        </v-btn>
        <v-btn color="primary" :disabled="loading" @click="content.push({type: 'img', context: ''})">
          img
        </v-btn>
        <v-btn color="error" :disabled="loading" @click="content.pop()">
          Delete Last One
        </v-btn>
        <v-btn color="success" :disabled="loading" @click="submit()">
          Submit
        </v-btn>
      </v-card-text>
    </v-card>
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
  data(){
    return{
      header:"",
      title: "",
      content: [],
      para: {
          theme: 'bubble',
          modules: {
              toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  ['blockquote', 'code-block'],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{'color': []}, {'background': []}],
                  [{'align': []}],
                  ['clean']
              ]
          }
      },
      loading: false
    }
  },
  methods:{
    async submit(){
      this.loading = true;
      let data = {
        header: this.header,
        title: this.title,
        content: this.content,
        image: this.image,
        description: this.description
      }
      let res = await this.$axios.$post(process.env.apiUrl+"/blog", data)
      this.header = "";
      this.title = "";
      this.content = [];
      this.loading = false;
    }
  }
}
</script>

<style lang="css" scoped>
.main{
  width: 100%;
}
</style>
