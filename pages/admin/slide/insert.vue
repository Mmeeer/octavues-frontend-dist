<template>
    <v-layout wrap>
        <v-flex xs12 class="divider">
                <v-card v-for="(item, index) in slider" :key="index" style="margin-bottom: 20px;">
                    <v-card-text>
                        <v-text-field v-model="item.title" :disable="loading" label="Slider Title" hint="Home хэсгийн slide хэсэг рүү гарчиг нэмнэ. Том жижиг бичгийн хэлбэрээр бичнэ(Capitalization). Эхний үсэг томоор эхэлнэ. "></v-text-field>
                        <v-text-field v-model="item.description" :disable="loading" label="Slider Description" hint="Гарчигний доод хэсэгт байрлана. 1-2 өгүүлбэр байвал зүгээр. "></v-text-field>
                        <v-text-field v-model="item.button.word" :disable="loading" label="Slider Button" hint="Товчин дээр байрлах үгийг бичнэ."></v-text-field>
                        <v-text-field v-model="item.button.to" :disable="loading" label="Slider Button URL" hint="Шилжих линкийн тавиж өгнө."></v-text-field>
                        <v-text-field v-model="item.poster" :disable="loading" label="Slider Poster Image" hint="Poster зурагны холбоосыг оруулна."></v-text-field>
                        <v-text-field v-model="item.video" :disable="loading" label="Slider Video" hint="Video-ны холбоосыг оруулна."></v-text-field>
                    </v-card-text>
                </v-card>
                <v-btn color="success" :disable="loading" @click="slider.push({ title: '', description: '', button:{ word: '', to: ''}, poster: '', video: '' })">
                    add slider
                </v-btn>
                <v-btn color="error" :disable="loading" @click="slider.pop()">
                    remove slider
                </v-btn>
            </v-flex>
            <v-flex xs12>
                <v-btn color="success" :disable="loading" @click="submit()">submit</v-btn>
            </v-flex>
            <v-flex xs12>
              {{message}}
            </v-flex>
    </v-layout>
</template>

<script>
    export default {
        layout: "admin",
        data(){
            return{
                loading: false,
                message: "",
            }
        },
        async asyncData({$axios}){
            let res = await $axios.$get(process.env.apiUrl+"/slide/update");
            let data = null;
            if(res.success){
                if(res.data != null)
                    data = {
                      slider: res.data.slider
                    };
                else data = {
                    slider:[
                        {
                            title: "",
                            description: "",
                            button:{
                                word: "",
                                to: "",
                            },
                            poster: "",
                            video: "",
                        }
                    ]
                }
            } else data = {
                slider:[
                    {
                        title: "",
                        description: "",
                        button:{
                            word: "",
                            to: "",
                        },
                        poster: "",
                        video: "",
                    }
                ]
            }
            return new Promise((resolve) => {
              setTimeout(function () {
                resolve(data);
              }, 4000)
            })
        },
        methods: {
            async submit() {
                this.loading = true;
                let data = {
                    slider: this.slider,
                }
                let res = await this.$axios.$post(process.env.apiUrl+"/slide", data);
                this.message = "Amjilttai";
                this.loading = false;
            },
        }
    }
</script>

<style scoped>

</style>
