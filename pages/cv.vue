<template>
    <v-layout wrap style="z-index: 0;">
        <v-container>
            <v-flex xs12>
                <v-text-field v-model="email" :disabled="loading" label="EMAIL"></v-text-field>
                <v-text-field v-model="firstname" :disabled="loading" label="Нэр"></v-text-field>
                <v-text-field v-model="lastname" :disabled="loading" label="Овог"></v-text-field>
                <vue-editor v-model="content" :editorOptions="para"></vue-editor>
            </v-flex>
            <v-flex xs12>
                <v-btn color="success" flat small block :disabled="loading" @click="submit()">илгээх</v-btn>
            </v-flex>
        </v-container>
    </v-layout>
</template>

<script>
    export default {

      transition: "intro",
        async asyncData(){
          return new Promise((resolve) => {
            setTimeout(function () {
              resolve({});
            }, 4000)
          })
        },
        data(){
            return {
                email: "",
                firstname: "",
                lastname: "",
                content: "Hello world, Энэ хэсэгт та өөрийгөө илэрхийлэх CV-гээ бичнэ үү. Бичих явцдаа та манай editor-ийн функцүүдтэй танилцана уу? Таны идэвхжүүлсэн хэсэгт цэс гарч ирэх болно.",
                para: {
                    theme: 'bubble',
                    modules: {
                        toolbar: [
                            ["bold", "italic", "underline", "strike"],
                            ['blockquote', 'code-block'],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'color': []}, {'background': []}],
                            [{'align': []}],
                            ['clean']
                        ]
                    }
                },
            }
        },
        methods:{
            async submit(){
            this.loading = true;
            let data = {
                content: this.content,
                email: this.email,
                firstname: this.firstname,
                lastname: this.lastname,
            };
            let res = await this.$axios.$post(process.env.apiUrl+"/cv", data)
            this.content = "Таны илгээсэн CV-г хүлээн авлаа.";
            this.email = "";
            this.firstname = "";
            this.lastname = "";
            this.loading = false;
            }
        },
    }
</script>

<style scoped>

</style>
