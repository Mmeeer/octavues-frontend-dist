<template lang="html">
  <v-layout wrap style="z-index: 0;">
    <v-flex xs12>
      <ToSection :data="header"/>
    </v-flex>
    <v-flex xs12>
      <Projects v-if="projects" :data="projects"/>
    </v-flex>
    <v-flex xs12>
      <Footer :data="footer"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Projects from '~/components/projects.vue';
import ToSection from '~/components/toSection.vue';
import Footer from '~/components/footer.vue';
export default {
  transition: "intro",
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
                  {link: "Octavues", to:"#"},
                  {link: "Medremj", to:"#"},
                  {link: "TOEFL",to :"#"}
              ]
          },
          motto: "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"
      },
      header: {
        title: "Projects",
        img: process.env.apiUrl + "/assets/static/project.png",
      },
    }
  },
  components:{
    Projects,
    ToSection,
    Footer
  },
  async asyncData({$axios, redirect}){
    let response = await $axios.$get(process.env.apiUrl+"/projects");
    if(response.success == true){
      let data = {
        projects: response.data.projects,
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else redirect("/404")
  }
}
</script>

<style lang="css" scoped>
</style>
