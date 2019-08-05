<template>
  <v-layout>
    <v-flex>
      <v-card class="main">
        <v-card-text>
          <v-data-table :headers="headers" :items="subscribtion" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.email }}</td>
              <td class="text-xs-right">{{ props.item.date }}</td>
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
  async asyncData({ $axios }) {
    let response = await $axios.$get(process.env.apiUrl + "/subscribtion");
    if (response.success == true) {
      let data = {
          subscribtion: response.data.subscribtion
      };

      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else {
      throw err;
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Email",
          align: "left",
          sortable: false,
          value: "email"
        },
        { text: "Date", value: "date", align: "right" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
