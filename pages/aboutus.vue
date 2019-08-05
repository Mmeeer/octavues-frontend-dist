<template>
  <v-layout wrap>
    <v-flex>
      <Aboutus v-if="res" :data="res" />
    </v-flex>
    <v-flex>
      <Contactus/>
    </v-flex>
    <v-flex style="background: #303030;">
      <Foot :data="footer" :img="false"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Aboutus from "~/components/aboutus.vue";
import Foot from '~/components/footer.vue';
import Contactus from '~/components/contact us.vue';
import Subscription from '~/components/subscription.vue';
export default {
  data(){
    return{
      footer:{
          home:{
              title: "Quick Links",
              links:[
                  {link: "Home", to: "/"},
                  {link: "Events", to: "/events"},
                  {link: "Blog", to: "/blog"},
                  {link: "Projects", to: "/projects"},
                  {link: "Timeline", to: "/timeline"},
                  {link: "About us", to: "/aboutus"},
                  {link: "Login & Signup", to: "/login"},
                  {link: "Contact us", to: "/contactus"}
              ]
          },
          sub:{
              title: "Recieve News From Us"
          },
          pro:{
              title: "Projects",
              links:[
                  {link: "Octavues", to: "#"},
                  {link: "Medremj", to:"#"},
                  {link: "TOEFL", to:"#"}
              ]
          },
          motto: "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"
      }
    }
  },
  transition: "intro",
  components: {
    Aboutus,
    Contactus,
    Subscription,
    Foot
  },
  async asyncData({$axios, redirect}){
    let response = await $axios.$get(process.env.apiUrl+"/aboutus");
    if(response.success == true){
      let data = {
        res: response.data.team,
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else redirect("/404");
  },
}
</script>

<style scoped>

</style>
