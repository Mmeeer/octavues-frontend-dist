<template lang="html">
  <v-form style="width: 100%; background: white;">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h3 style="text-align: center; max-width: 960px; margin: auto;">Бидэнтэй холбоо тогтоон хамтран ажиллах боломжтой.</h3>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md0 lg4 offset-lg1>
          <v-layout>
            <v-flex xs5>
              <v-text-field
              label="Нэр"
              required
              color="purple"
              v-model="firstname"
              ></v-text-field>
            </v-flex>
            <v-flex xs5 offset-xs1>
              <v-text-field
              label="Овог"
              required
              color="purple"
              v-model="lastname"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-text-field
          label="Имайл"
          required
          color="purple"
          v-model="email"
          ></v-text-field>
          <v-text-field
          label="Утас"
          required
          color="purple"
          v-model="phone"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md0 lg6>
          <v-textarea
          color="purple"
          label="Ямар зорилгоор бидэнтэй холбоо тогтоохыг хүссэнээ тодорхойлно уу"
          v-model="purpose"
          ></v-textarea>
          <v-btn color="purple" round dark @click="submit()">Send Message</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data(){
    return{
      firstname:"",
      lastname:"",
      email:"",
      phone:"",
      purpose:"",
    }
  },
  methods:{
     async submit(){
      let contact = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        purpose: this.purpose
      };
      let res = await this.$axios.$post(process.env.apiUrl + "/contactus",contact);
      if(res.success){
        this.firstname=""
        this.lastname=""
        this.email=""
        this.phone=""
        this.purpose=""
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
