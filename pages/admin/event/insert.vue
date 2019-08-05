<template>
    <v-layout wrap>
            <!-- silder iin input -->
            <v-flex xs6 class="divider">
                <v-card v-for="(item, index) in slider" :key="index">
                    <v-card-text>
                        <v-text-field v-model="item.title" :disabled="loading" label="Slider Title" hint="Гарчиг оруулна. Том жижиг бичгийн хэлбэрээр бичнэ(Capitalization)."></v-text-field>
                        <v-text-field v-model="item.description" :disabled="loading" label="Slider Description" hint="Гарчигний доод хэсэгт байрлана. 1-2 өгүүлбэр байвал зүгээр."></v-text-field>
                        <v-text-field v-model="item.poster" :disabled="loading" label="Slider Poster Image" hint="Poster зурагны холбоосыг оруулна."></v-text-field>
                        <v-text-field v-model="item.video" :disabled="loading" label="Slider Video" hint="Video-ны холбоосыг оруулна."></v-text-field>
                    </v-card-text>
                </v-card>
                <v-btn color="success" :disabled="loading" @click="slider.push({ title: '', description: '', button:{ word: '', to: ''}, poster: '', video: '' })">
                    add slider
                </v-btn>
                <v-btn color="error" :disabled="loading" @click="slider.pop()">
                    remove slider
                </v-btn>
            </v-flex>

            <v-flex xs6 class="divider">
                <v-card>
                    <v-card-text>
                        <!-- date :reactive="reactive"-->
                        <v-date-picker v-model="maindata.date"  ></v-date-picker>
                        <v-date-picker v-model="maindata.enddate"  ></v-date-picker>

                        <v-text-field v-model="maindata.title" :disabled="loading" label="Title Of The Event"></v-text-field>
                        <v-text-field v-model="maindata.location" :disabled="loading" label="Event Location"></v-text-field>
                        <v-text-field v-model="maindata.img" :disabled="loading" label="Background Image" hint="Background зурагны холбоос оруулна."></v-text-field>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 class="divider">
                <v-card>
                    <v-card-text>
                        <v-text-field v-model="speaker.title" :disabled="loading" label="Header Title" hint="Дэд гарчиг"></v-text-field>
                        <v-text-field v-model="speaker.img" :disabled="loading" label="Header Image" hint="Background хэсгийн зураг"></v-text-field>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 class="divider">
                <!-- speakers -->
                <v-card v-for="(item, index) in speakers" :key="index">
                    <v-card-text>
                        <v-text-field v-model="item.name" :disabled="loading" label="Speaker Name" hint="Нэрээ бүтнээр үнэн зөв бичнэ.Овог урд талд өөрийн нэр хойд талд байна. Хоч бичиж болохгүй."></v-text-field>
                        <v-text-field v-model="item.pro" :disabled="loading" label="Speaker Profession" hint=" Илтгэгчийн мэргэжил"></v-text-field>
                        <v-text-field v-model="item.img" :disabled="loading" label="Speaker Image" hint="Илтгэгчийн зураг"></v-text-field>
                        <v-text-field v-model="item.to" :disabled="loading" label="Social" hint="Цахим хуудасны холбоосыг оруулах"></v-text-field>
                    </v-card-text>
                </v-card>
                <v-btn color="success" :disabled="loading" @click="speakers.push({ img: '', name: '', pro: '', to: ''})">
                    add speaker
                </v-btn>
                <v-btn color="error" :disabled="loading" @click="speakers.pop()">
                    remove speaker
                </v-btn>
            </v-flex>
            <v-flex xs6 class="divider">
                <!-- event schedule -->
                <v-card v-for="(item, index) in events" style="margin-bottom: 20px" :key="index">
                    <v-card-text>
                        <v-text-field v-model="item.title" :disabled="loading" label="Nth Day"></v-text-field>
                        <span v-for="(el, indexx) in item.action" :key="indexx">
                            <v-text-field v-model="el.left" :disabled="loading" label="time"></v-text-field>
                            <v-text-field v-model="el.right.title" :disabled="loading" label="title"></v-text-field>
                            <v-text-field v-model="el.right.caption" :disabled="loading" label="caption"></v-text-field>
                            <div v-for="(theavatar, index) in el.right.avatar" :key="index">
                              <v-text-field v-model="el.right.avatar[index]" :disabled="loading" label="avatar"></v-text-field>
                            </div>
                            <v-btn color="success" flat small :disabled="loading" @click="el.right.avatar.push('')">Add avatar</v-btn>
                            <v-btn color="error" flat small :disabled="loading" @click="el.right.avatar.pop()">Remove avatar</v-btn>
                        </span>
                        <br>
                        <v-btn color="success" flat small :disabled="loading" @click="item.action.push({ left: '', right: { title: '', caption: '', avatar: ['']} })" >
                            add action
                        </v-btn>
                        <v-btn color="error" flat small :disabled="loading" @click="item.action.pop()">
                            remove action
                        </v-btn>
                    </v-card-text>
                </v-card>
                <v-btn color="success" :disabled="loading" @click="events.push({ title: '', action: [{ left: '', right: { title: '', caption: '', avatar: ''} }] })">
                    add day
                </v-btn>
                <v-btn color="error" :disabled="loading" @click="events.pop()">
                    remove day
                </v-btn>
            </v-flex>
            <v-flex xs12>
                <v-btn color="success"  :disabled="loading" @click="submit()">submit</v-btn>
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
        data(){
            return{
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
                ],
                maindata:{
                    title: "",
                    location: "",
                    img: "",
                    date: "",
                    enddate: ""
                },
                speaker:{
                    img: "",
                    title: "",
                },
                speakers:[
                    {
                        img: "",
                        name: "",
                        pro:  "",
                        to: "",
                    },
                ],
                events: [
                    {
                        title: "",
                        action: [
                            {
                                left: "",
                                right: {
                                    title: "",
                                    caption: "",
                                    avatar: [""]
                                }
                            }
                        ]
                    }
                ],
                loading: false,
            }
        },
        methods: {
            async submit() {
              this.loading = true;
                let data = {
                    slider: this.slider,
                    maindata:this.maindata,
                    speaker: this.speaker,
                    speakers: this.speakers,
                    events: this.events
                }
                let res = await this.$axios.$post(process.env.apiUrl+"/event",data);
                if(res.success){
                  this.$router.push("/admin/event/update")
                  this.loading = false;
                }
            },
        }
    }
</script>

<style scoped>
.main{
    width: 100%;
}
</style>
