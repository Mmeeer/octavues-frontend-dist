<template lang="html">
    <div class="main">
        <v-card>
          <v-card-text>
            <h4>
              Энэ хэсэг их чухал шүү. Title, Description бичнэ үү. Энэ хэсэг огт нүдэнд харагдахгүй ба Search Engine-д зориулж хийж байгаа юм.
            </h4>
            <v-text-field
            v-model="title"
            label="Title"
            hint="Гарчиг оруулна. Том жижиг бичгийн хэлбэрээр бичнэ(Capitalization)."
            :disable="loading" >
            </v-text-field>
            <v-text-field
            v-model="description"
            label="Description"
            hint="Тайлбар оруулна."
            :disable="loading">
            </v-text-field>
            <v-text-field
            v-model="image"
            label="Image small"
            hint="Зурагны холбоосыг оруулна."
            :disable="loading" >
            </v-text-field>
          </v-card-text>
        </v-card>
        <br>
        <v-card>
          <v-card-text>
            <h4>
              Үндсэн хэсэг
            </h4>
          </v-card-text>
          <v-card-text v-for="(item, index) in project" :key="index">
            <span v-if="item.type == 'h1' || item.type == 'h2'">
              <v-text-field
              v-model="item.img"
              label="Title Image"
              hint="Зурагны холбоосыг оруулна."
              :disable="loading" >
              </v-text-field>
              <v-text-field
              v-model="item.title"
              :label="item.type == 'h1' ? 'Title' : 'Subtitle'"
              hint="Үндсэн гарчиг.Том жижиг бичгийн хэлбэрээр бичнэ(Capitalization)."
              :disable="loading" >
              </v-text-field>
            </span>
            <span v-if="item.type == 'video'">
              <v-text-field
              v-model="item.video"
              label="Video URL"
              hint="Бичлэгны холбоосыг оруулж өгнө."
              :disable="loading" >
              </v-text-field>
              <v-text-field
              v-model="item.img"
              label="Video Image"
              hint="Бичлэгний харагдац зураг"
              :disable="loading" >
              </v-text-field>
              <v-text-field
              v-model="item.description"
              label="Video Description"
              hint="Хажуу талд байрлах тайлбар хэсэг бөгөөд 2-3 өгүүлбэр байвал тохиромжтой."
              :disable="loading"
              >
              </v-text-field>
            </span>
            <v-layout wrap v-if="item.type == 'paragraph'">
              <v-flex xs6 v-for="(elll, index) in item.paragraphs" :key="index">
                <span v-if="elll">
                  <vue-editor class="paragraph" v-model="item.paragraphs[index]" :editorOptions="para" />
                </span>
              </v-flex>
              <v-btn :disable="loading" @click="item.paragraphs.push('This is new Paragraph')">Add Paragraph</v-btn>
              <v-btn :disable="loading" @click="item.paragraphs.pop()">Delete Last One</v-btn>
            </v-layout>
            <span v-if="item.type == 'img'">
              <v-text-field
              v-model="item.img"
              label="Image"
              hint="Зурагны холбоос байрлана.">
              </v-text-field>
            </span>
          </v-card-text>
        </v-card>
        <v-btn color="primary" :disable="loading" @click="project.push({type: 'paragraph', paragraphs: ['This is paragraph']})">paragraph
        </v-btn>
        <v-btn color="primary" :disable="loading" @click="project.push({type: 'h2', img: '', title: ''})">sub-title
        </v-btn>
        <v-btn color="primary" :disable="loading" @click="project.push({type: 'img', img: ''})">img
        </v-btn>
        <v-btn color="success" :disable="loading" @click="submit">SUBMIT</v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  layout: "admin",
  data(){
    return {
      loading: false,
      para: {
        theme: 'bubble',
        modules: {
          toolbar: [
            ['bold', 'italic']
          ]
        }
      },
    }
  },
  async asyncData({$axios, params}){
    let res = await $axios.$get(process.env.apiUrl+"/project/edit/" + params.id);
    console.log(res);
    if(res.success){
      let data = {
        title: res.data.title,
        description: res.data.description,
        image: res.data.image,
        project: res.data.project
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    }
  },
  methods: {
    async submit(){
      this.loading = true;
      let data = {
        title: this.title,
        description: this.description,
        image: this.image,
        project: this.project,
      }
      let res = await this.$axios.$post(process.env.apiUrl+"/project/edit/" + this.$route.params.id, data);
      console.log(res);
      if(res.success){
        this.$router.push("/admin/project/update");
      }
      this.loading = false;
    }
  },
}
</script>

<style scoped>

</style>
