<template>
    <v-layout class="fixer" wrap>
      <v-flex xs12>
        <Slider v-if="slider" :slider="slider"/>
      </v-flex>
      <v-flex xs12>
        <Contactus/>
      </v-flex>
      <v-flex xs12>
        <ToEvent v-if="toEvent" :data="toEvent"/>
      </v-flex>
      <v-flex xs12>
        <Countdown v-if="event && event.maindata && event.id" :data="event.maindata" :id="event.id"/>
      </v-flex>
      <v-flex xs12>
        <ToSection v-if="toBlog" :data="toBlog"/>
      </v-flex>
      <v-flex xs12 style="padding-top: 50px; padding-bottom: 50px; background: white;">
        <Recentblog v-if="recentblog && recentblog.length == 5" :data="recentblog"/>
      </v-flex>
      <v-flex xs12>
        <Motto/>
      </v-flex>
      <v-flex xs12 style="padding-top: 50px; padding-bottom: 50px; background: white;">
        <Timeline v-if="timeline" :data="timeline"/>
        <v-container style="display: grid; grid-template-columns: 1fr auto 1fr; grid-gap: 20px;">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span style="height: 5px; width: 100%; border-radius: 5px; background: #222222"></span>
          </div>
          <Octabtn word="See Full" to="/timeline" :dark="true"/>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span style="height: 5px; width: 100%; border-radius: 5px; background: #222222"></span>
          </div>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <ToSection v-if="toProject" :data="toProject"/>
      </v-flex>
      <v-flex xs12>
        <Projects v-if="recentProjects" :data="recentProjects"/>
      </v-flex>
      <v-flex xs12>
        <Subscription/>
      </v-flex>
      <v-flex xs12>
        <Foot v-if="footer" :data="footer"/>
      </v-flex>
    </v-layout>
</template>

<script>
import Slider from '~/components/slider.vue';
import Countdown from '~/components/countdown.vue';
import Foot from '~/components/footer.vue';
import ToEvent from '~/components/toevent.vue';
import Motto from '~/components/motto.vue';
import ToSection from '~/components/toSection.vue';
import Recentblog from '~/components/recentblog.vue';
import Projects from '~/components/projects.vue';
import Contactus from '~/components/contact us.vue';
import Subscription from '~/components/subscription.vue';
import Timeline from '~/components/timeline.vue';
import Octabtn from '~/components/octa-btn.vue';
export default {
  transition: "intro",
  async asyncData({$axios, redirect}){
    let response = await $axios.$get(process.env.apiUrl+"/");
    if(response.success == true){
      if(response.data.upcomingevent){
        response.data.upcomingevent.maindata.date = new Date(response.data.upcomingevent.maindata.date);
        response.data.upcomingevent.maindata.date = response.data.upcomingevent.maindata.date.getTime();
        response.data.upcomingevent.maindata.enddate = new Date(response.data.upcomingevent.maindata.enddate);
        response.data.upcomingevent.maindata.enddate = response.data.upcomingevent.maindata.enddate.getTime();
      }
      if(!response.data.theslide) {response.data.theslide = {}; response.data.theslide.slider = null};
      if(!response.data.upcomingevent){response.data.upcomingevent = {}, response.data.upcomingevent.maindata = null; response.data.upcomingevent._id = null;}
      if(!response.data.shortTimeline) response.data.shortTimeline = null;
      if(!response.data.projects) response.data.projects = null;
      if(!response.data.recentblog) response.data.recentblog = null;
      let data = {
        slider: response.data.theslide.slider,
        event: { maindata: response.data.upcomingevent.maindata, id: response.data.upcomingevent._id},
        timeline: response.data.shortTimeline,
        recentProjects: response.data.projects,
        recentblog : response.data.recentblog,
      };
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000);
      })
    } else redirect("/404");
  },
  data(){
    return{
      toBlog:{
          img: process.env.apiUrl + "/assets/static/blog.png",
          title: "Blog",
          button: {
              word: "See More",
              to: "/blog"
          }
      },
      toProject:{
          img: process.env.apiUrl + "/assets/static/project.png",
          title: "Project",
          button: {
              word: "See More",
              to: "/projects"
          }
      },
      toEvent: {
          title:"About The Event",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          powered:"Powered by",
          poweredby:["Octavues","Mevento"],
          button:{
            word:"All event",
            to: "/events",
          }
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
                  {link: "TOEFL", to: "#"}
              ]
          },
          motto: "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"
      }
    }
  },
  components:{
    Slider,
    Countdown,
    Foot,
    Motto,
    ToEvent,
    ToSection,
    Recentblog,
    Projects,
    Contactus,
    Subscription,
    Timeline,
    Octabtn
  },
}
</script>
<style media="screen">
  .fixer{
    z-index: 0;
    overflow: hidden;
  }
  .black{
    background: black;
  }
</style>
