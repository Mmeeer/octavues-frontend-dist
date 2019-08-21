<template>
  <v-layout wrap class="fixer">
    <v-flex xs12>
      <Slider v-if="slider" :slider="slider"/>
    </v-flex>
    <v-flex xs12>
      <InCountdown v-if="count" :data="count" />
    </v-flex>
    <v-flex xs12>
      <ToSection v-if="speaker" :data="speaker"/>
    </v-flex>
    <v-flex xs12>
      <Speakers v-if="speakers" :data="speakers"/>
    </v-flex>
    <v-flex xs12>
      <EventProcess v-if="event" :event="event"/>
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
import Slider from '~/components/slider.vue';
import InCountdown from '~/components/insidecountdown.vue';
import ToSection from '~/components/toSection.vue';
import Speakers from '~/components/speakers.vue';
import EventProcess from '~/components/eventprocess.vue';
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
  async asyncData({$axios, redirecct, params}){
    let response = await $axios.$get(process.env.apiUrl+"/events/" + params.id);
    if(response.success == true){
      if(response.data == null) redirect('404');
      else if(response.data.event == null) redirect('404');
      response.data.event.maindata.date = new Date(response.data.event.maindata.date);
      response.data.event.maindata.date = response.data.event.maindata.date.getTime();
      response.data.event.maindata.enddate = new Date(response.data.event.maindata.enddate);
      response.data.event.maindata.enddate = response.data.event.maindata.enddate.getTime();
      let data = {
        slider: response.data.event.slider,
        count: response.data.event.maindata,
        speaker: response.data.event.speaker,
        speakers: response.data.event.speakers,
        event: response.data.event.events,
      }
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(data);
        }, 4000)
      })
    } else redirect('/404');
  },
  components:{
    Slider,
    InCountdown,
    ToSection,
    Speakers,
    EventProcess,
    Subscription,
    Footer
  },
  mounted(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 4000)
    })
  },
  head () {
    return {
      title: "Event: " + this.count.title,
      meta: [
        { name: "og:title", property: 'og:title', content: this.count.title },
        { name: "og:type", property: "og:type", content: "event"},
        { name: "og:event", property: "og:event:start_time", content: this.count.date},
        { name: "og:event", property: "og:event:end_time", content: this.count.enddate},
        { name: "og:description", property: 'og:description', content: this.slider[0].description},
        { name: "og:site_name", property:"og:site_name", content:"Octavues" },
        { name: "og:image", property:"og:image", content: this.count.img },
        { hid: 'description', name: 'description', content: this.slider[0].description },
        { hid: 'author', name: "author", content: "Octavues"}
      ]
    }
  }
}
</script>
<style media="screen">
  .fixer{
    z-index: 0;
  }
  .black{
    background: black;
  }
</style>
