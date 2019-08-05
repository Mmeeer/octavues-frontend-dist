<template>
    <v-layout wrap>
      <v-flex xs12>
        <ToSection :data="header"/>
      </v-flex>
      <v-flex v-for="item in events" :key="item._id">
        <Countdown v-if="item.maindata" :data="item.maindata" :id="item._id"/>
      </v-flex>
      <v-flex xs12>
        <Subscription/>
      </v-flex>
      <v-flex>
        <Foot :data="footer"/>
      </v-flex>
    </v-layout>
</template>

<script>
    import Countdown from '~/components/countdown.vue';
    import Foot from '~/components/footer.vue';
    import Subscription from '~/components/subscription.vue';
    import ToSection from '~/components/toSection.vue';
    export default {
      transition: "intro",
      data(){
        return{
          header: {
            title: "Events",
            img: process.env.apiUrl + "/assets/static/event.png",
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
                    {link: "Octavues", to:"#"},
                    {link: "Medremj", to:"#"},
                    {link: "TOEFL", to: "#"}
                ]
            },
            motto: "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"
          }
        }
      },
        components:{
            Countdown,
            Foot,
            Subscription,
            ToSection
        },
        async asyncData({$axios, redirect}){
          let response = await $axios.$get(process.env.apiUrl+"/events");
          if(response.success == true){
            for(let i = 0; i < response.data.events.length; i++){
              response.data.events[i].maindata.date = new Date(response.data.events[i].maindata.date);
              response.data.events[i].maindata.date = response.data.events[i].maindata.date.getTime();
              response.data.events[i].maindata.enddate = new Date(response.data.events[i].maindata.enddate);
              response.data.events[i].maindata.enddate = response.data.events[i].maindata.enddate.getTime();
            }
            let data = {
                events: response.data.events,
                resp: response.data.events,
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
