<template>
    <v-layout wrap>
      <v-flex xs12 style="background: white;">
        <Timeline v-if="res" :data="res"/>
      </v-flex>
      <v-flex xs12>
        <Subscription/>
      </v-flex>
      <v-flex xs12>
        <Footer :data="footer" />
      </v-flex>
    </v-layout>
</template>

<script>
    import Timeline from '~/components/timeline.vue';
    import Footer from '~/components/footer.vue';
    import Subscription from '~/components/subscription.vue';
    export default {
      transition: "intro",
      data(){
        return{
          footer:{
          home:{
              title: "Quick Links",
              links:[
                  {link: "Home", to: "/"},
                  {link: "Events", to: "/event"},
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
            Timeline,
            Footer,
            Subscription
        },
        async asyncData({$axios}){
            let response = await $axios.$get(process.env.apiUrl+"/timeline");
            if(response.success == true){
                let data = {
                    res: response.data.timeline,
                };
                return new Promise((resolve) => {
                  setTimeout(function () {
                    resolve(data)
                  }, 4000)
                })
            } else redirect("/404");
        },
      }
</script>

<style scoped>

</style>
