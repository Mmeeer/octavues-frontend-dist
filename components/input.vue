<template lang="html">
    <div class="octa-input">
      <v-form>
        <v-layout wrap>
        <v-flex
        md8
        xs12
        >
          <v-text-field
          v-if="white == true"
          label="Email"
          color="white"
          required
          :dark="dark == true"
          v-model="email"
          >
          </v-text-field>
          <v-text-field
          v-else
          label="Email"
          color="purple"
          required
          :dark="dark == true"
          v-model="email"
          >
          </v-text-field>

        </v-flex>
        <v-flex
        md4
        xs12
        class="octa-center"
        >
          <v-btn round color="purple" dark @click="submit()">Subscribe</v-btn>
      </v-flex>
    </v-layout>
    </v-form>
  </div>

</template>

<script>
export default {
  props: ['dark','white'],
  data(){
    return{
      email: ''
    }
  },
  methods: {
    async submit(){
      let subscription = {
        email: this.email
      };
      let res = await this.$axios.$post(process.env.apiUrl + "/subscribe", subscription);
      if(res.success){
        this.email = '';
      }
    }
  }
}
</script>

<style lang="css" scoped>

.octa-center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
