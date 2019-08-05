<template>
    <v-flex xs12>
        <v-card>
            <v-card-text>
              <v-layout>
                <v-flex xs5>
                  <v-text-field v-model="data.firstname" :disabled="loading" label="Firstname" hint="Нэр"></v-text-field>
                  <v-text-field v-model="data.lastname" :disabled="loading" label="Lastname" hint="Овог"></v-text-field>
                  <v-text-field v-model="data.role" :disabled="loading" label="Title, Team Role" hint="Үүрэг"></v-text-field>
                  <v-text-field v-model="data.email" :disabled="loading" label="Email" hint="Цахим шуудан"></v-text-field>
                </v-flex>
                <v-flex xs5 offset-xs2>
                  <v-text-field v-model="data.facebook" :disabled="loading" label="Facebook" hint="facebook url"></v-text-field>
                  <v-text-field v-model="data.instagram" :disabled="loading" label="Instagram" hint="instagram url"></v-text-field>
                  <v-text-field v-model="data.twitter" :disabled="loading" label="Twitter" hint="twitter url"></v-text-field>
                  <v-text-field v-model="data.bio" :disabled="loading" label="Bio" hint="Намтар"></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text>
                <v-text-field v-model="data.img1" :disabled="loading" label="Insert Your Image" hint="Харагдац зураг"></v-text-field>
                <v-text-field v-model="data.img2" :disabled="loading" label="Insert Your Image" hint="Hover хийхэд өөрчлөгдөх дараагийн зураг"></v-text-field>
                <v-text-field v-model="data.avatar" :disabled="loading" label="Admin Avataaar" hint="Avatar url(Avatar generator)"></v-text-field>
                <v-btn color="success" :disabled="loading" @click="submit()">Send</v-btn>
            </v-card-text>
        </v-card>
    </v-flex>
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
        data() {
            return {
                data:{
                    firstname: "",
                    lastname: "",
                    role: "",
                    facebook : "",
                    instagram: "",
                    twitter: "",
                    bio: "",
                    img1: "",
                    img2: "",
                    tmp : "",
                    avatar: "",
                    email: ""
                },
                loading: false,
            }
        },
        methods: {
            async submit() {
              this.loading = true;
              this.data.tmp = this.data.img1;
                let res = await this.$axios.$post(process.env.apiUrl+"/team/insert", this.data);
                this.data = {
                    firstname: "",
                    lastname: "",
                    role: "",
                    facebook : "",
                    instagram: "",
                    twitter: "",
                    bio: "",
                    img1: "",
                    img2: "",
                    tmp : "",
                    avatar: "",
                    email: ""
                };
                this.loading = false;
            }
        },
    }
</script>

<style scoped>
.main{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
</style>
