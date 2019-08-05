<template>
    <v-layout>
        <v-flex>
            <v-card class="main">
            <v-card-text>
                <v-data-table :headers="headers" :items="cv" class="elevation-1">
                <template v-slot:items="props">
                    <td>{{ props.item.email }}</td>
                    <td class="text-xs-left">{{ props.item.firstname }}</td>
                    <td class="text-xs-left">{{ props.item.lastname }}</td>
                    <td class="text-xs-left">{{ props.item.datestring }}</td>
                    <td class="text-xs-left"><v-btn flat small @click="goTo(props.item._id)">Read</v-btn></td>
                </template>

                </v-data-table>
            </v-card-text>
            </v-card>
</v-flex>
    </v-layout>
</template>

<script>
    export default {
        layout: "admin",
        async asyncData({$axios}){
            let response = await $axios.$get(process.env.apiUrl+"/cv");
            if(response.success == true){
                let data = {
                    cv: response.data.cv,
                }

                return new Promise((resolve) => {
                  setTimeout(function () {
                    resolve(data);
                  }, 4000)
                })
            } else {
            throw err;
            }
        },
        data () {
        return {
            headers: [
            {
                text: 'Email',
                align: 'left',
                sortable: false,
                value: 'email'
            },
            { text: 'Firstname', value: 'firstname' },
            { text: 'Lastname', value: 'lastname' },
            { text: 'Date', value: 'date' },
            { text: 'CV', value: 'content'}
            ],
        }
        },
        methods: {
            goTo(val){
                this.$router.push("/admin/contact/cv/" + val);
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
