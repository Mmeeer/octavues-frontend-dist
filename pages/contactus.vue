<template lang="html">
  <v-layout wrap style="z-index: 0;">
    <v-flex xs12>
      <ToSection v-if="header" :data="header"/>
    </v-flex>
    <v-flex xs12 style="background: white; text-align: center;">
      <v-container>
        <h1>Tа манай багт нэгдхийг хүсвэл доорх холбоосоор орно уу</h1>
      </v-container>
      <v-container style="display: grid; grid-template-columns: 1fr auto 1fr; grid-gap: 20px;">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span style="height: 5px; width: 100%; border-radius: 5px; background: #222222"></span>
          </div>
          <Octabtn word="Бидэнтэй нэгдэх" to="/cv" :dark="true"/>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span style="height: 5px; width: 100%; border-radius: 5px; background: #222222"></span>
          </div>
        </v-container>
    </v-flex>
    <v-flex xs12>
      <ContactUs/>
    </v-flex>
    <v-flex xs12>
      <Subscription/>
    </v-flex>
    <v-flex xs12>
      <Footer v-if="footer" :data="footer"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Subscription from '~/components/subscription.vue';
import ContactUs from '~/components/contact us.vue';
import ToSection from '~/components/toSection.vue';
import Footer from '~/components/footer.vue';
import Octabtn from '~/components/octa-btn.vue';
export default {
  transition: "intro",
  async asyncData(){
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 4000)
    })
  },
  data(){
    return{
      header: {
        title: "Contact Us",
        img: process.env.apiUrl + "/assets/static/contact.png",
      },
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
                  {link: "Medremj", to: "#"},
                  {link: "TOEFL", to:"#"}
              ]
          },
          motto: "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"
      }
    }
  },
  components:{
    ToSection,
    ContactUs,
    Subscription,
    Footer,
    Octabtn
  },
}
</script>

<style lang="css" scoped>
</style>
