<template>
    <v-layout wrap style="background: white;">
      <v-flex xs12>
        <v-card>
          <v-card-text v-html="content.cv.content">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
    export default {
        layout: "admin",
        async asyncData({$axios, params}){
            let res = await $axios.$get(process.env.apiUrl+"/cv/" + params.id);
            if(res.success){
                let data = {
                    content: res.data
                }

                return new Promise((resolve) => {
                  setTimeout(function () {
                    resolve(data);
                  }, 4000)
                })
            }
        },
        mounted(){
          this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 2000)
          })
        }
    }
</script>

<style scoped>

</style>
