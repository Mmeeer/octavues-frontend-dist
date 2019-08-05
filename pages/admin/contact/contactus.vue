<template>
  <v-layout>
    <v-flex>
      <v-card class="main">
        <v-card-text>
          <v-data-table :headers="headers" :items="contacts" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.email }}</td>
              <td class="text-xs-left">{{ props.item.firstname }}</td>
              <td class="text-xs-left">{{ props.item.lastname }}</td>
              <td class="text-xs-left">{{ props.item.phone }}</td>
              <td class="text-xs-left">{{ props.item.purpose }}</td>
              <td class="text-xs-left">{{ props.item.datestring }}</td>
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
    let response = await $axios.$get(process.env.apiUrl+"/contacts");
    if(response.success == true){
        let data = {
            contacts: response.data.contacts,
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
          { text: 'Phone Number', value: 'phone' },
          { text: 'Purpose', value: 'purpose' },
          { text: 'Date', value: 'date' }
        ],
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
    }
};
</script>

<style scoped>
</style>
