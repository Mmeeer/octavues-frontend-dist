<template>
  <v-flex xs12>
    <v-tabs color="#222222" dark show-arrows>
      <v-tabs-slider color="#cccccc"></v-tabs-slider>

      <v-tab>profile</v-tab>
      <v-tab>name</v-tab>
      <v-tab>social</v-tab>
      <v-tab>password</v-tab>

      <v-tabs-items>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-text-field :disable="loading" v-model="data.img1" label="Insert Your Image"></v-text-field>
              <v-text-field :disable="loading" v-model="data.img2" label="Insert Your Image"></v-text-field>
              <v-text-field :disable="loading" v-model="data.avatar" label="Admin Avataaar"></v-text-field>

            </v-card-text>
            <v-card-actions>
                <v-btn flat small color="success" :disable="loading" @click="imgUpdate()">
                    send
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-text-field :disable="loading" v-model="data.firstname" label="Firstname"></v-text-field>
              <v-text-field :disable="loading" v-model="data.lastname" label="Lastname"></v-text-field>
              <v-text-field :disable="loading" v-model="data.role" label="Title, Team Role"></v-text-field>
              <v-text-field :disable="loading" v-model="data.email" label="Email"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn flat small color="success" :disable="loading" @click="mainUpdate()">
                    send
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-text-field :disable="loading" v-model="data.facebook" label="Facebook"></v-text-field>
              <v-text-field :disable="loading" v-model="data.instagram" label="Instagram"></v-text-field>
              <v-text-field :disable="loading" v-model="data.twitter" label="Twitter"></v-text-field>
              <v-text-field :disable="loading" v-model="data.bio" label="Bio"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn flat small color="success" :disable="loading" @click="socialUpdate()">
                    send
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-text-field :disable="loading" v-model="oldpassword" type="password" label="Old Password"></v-text-field>
              <v-text-field :disable="loading" v-model="password" type="password" label="New Password"></v-text-field>
              <v-text-field :disable="loading" v-model="confirmation" type="password" label="Confirm Password"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn flat small color="success" :disable="loading" @click="passwordUpdate()">
                    send
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
        oldpassword: "",
      password: "",
      confirmation: "",
      loading: false,
    };
  },
  async asyncData({ $axios }) {
    let res = await $axios.$get(process.env.apiUrl + "/admin");
    let data = {
      data: res.data.user
    };
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(data);
      }, 4000)
    })
  },
  layout: "admin",

  methods: {
    async imgUpdate() {
      this.loading = true;
        let datum = {
            img1: this.data.img1,
            img2: this.data.img2,
            tmp: this.data.img1,
            avatar: this.data.avatar
        }
        let res = await this.$axios.$post(process.env.apiUrl+"/admin/" + this.data._id, datum);
        if(res.success){
            let ress = await this.$axios.$get(process.env.apiUrl+"/admin");
            await this.$store.dispatch('profile', ress.data.user);
            this.$router.push("/admin")
        }
        this.loading = false;
    },
    async mainUpdate() {
        this.loading = true;
        let datum = {
            firstname: this.data.firstname,
            lastname: this.data.lastname,
            role: this.data.role,
            email: this.data.email,
            name: this.data.firstname + " " + this.data.lastname[0] + "."
        }
        let res = await this.$axios.$post(process.env.apiUrl+"/admin/" + this.data._id, datum);
        if(res.success){
            let ress = await this.$axios.$get(process.env.apiUrl+"/admin");
            await this.$store.dispatch('profile', ress.data.user);
            this.$router.push("/admin")
        }
        this.loading = false;
    },
    async socialUpdate() {
        this.loading = true;
        let datum = {
            facebook: this.data.facebook,
            instagram: this.data.instagram,
            twitter: this.data.twitter,
            bio: this.data.bio
        }
        let res = await this.$axios.$post(process.env.apiUrl+"/admin/" + this.data._id, datum);
        if(res.success){
            let ress = await this.$axios.$get(process.env.apiUrl+"/admin");
            await this.$store.dispatch('profile', ress.data.user);
            this.$router.push("/admin")
        }
        this.loading = false;
    },
    async passwordUpdate() {
      this.loading = true
        let datum = {
            oldpassword: this.oldpassword,
            password: this.password,
            confirmation: this.confirmation
        }
        let res = await this.$axios.$post(process.env.apiUrl+"/admin/password/" + this.data._id, datum);
        if(res.success){
            this.$cookies.removeAll();
            this.$store.dispatch('logout');
            this.$router.push("/login")
        }
        this.loading = false;
    }
  }
};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
