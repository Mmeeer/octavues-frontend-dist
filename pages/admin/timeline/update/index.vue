<template>
    <v-flex xs12>
        <v-card>
            <v-card-text>
                <v-card flat v-if="timelines" v-for="(timeline, index) in timelines" :key="index">
                    <v-card-text>
                        <span v-html="timeline.title"></span>
                        <span v-html="timeline.content"></span>
                        <span v-html="timeline.date"></span>
                    </v-card-text>
                    <v-btn color="primary" :disable="loading" @click="updateThis(timeline._id)">Update</v-btn>
                    <v-btn color="error" :disable="loading" @click="deleteThis(timeline._id)">Delete</v-btn>

                    <br>
                </v-card>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    layout: "admin",
    data(){
        return{
            loading: false,
        }
    },
    async asyncData({$axios}){
        let res = await $axios.$get(process.env.apiUrl+"/timelines")
        let data = null;
        if(res.success){
          data = {
              timelines: res.data.timelines
          }
        } else data = {};
        return new Promise((resolve) => {
          setTimeout(function () {
            resolve(data);
          }, 4000)
        })
    },
    methods: {
        async deleteThis(val){
            this.loading = true;
            let res = await this.$axios.$get(process.env.apiUrl+"/timeline/delete/" + val);
            let ress = await this.$axios.$get(process.env.apiUrl+"/timelines")
            if(ress.success){
                this.timelines = ress.data.timelines
            }
            this.loading = false;
        },
        updateThis(val){
            this.loading = true;
            this.$router.push("/admin/timeline/update/" + val);
            this.loading = false;
    },

  }

    }
</script>

<style scoped>

</style>
