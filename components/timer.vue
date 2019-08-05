<template>
  <v-layout>
    <v-flex>
      <div class="octa-container">

        <div class="octa-countdown" v-if="this.date/1000 > this.now">
          <div class="octa-block">
            <p class="text">days</p>
            <p class="digit">{{days}}</p>
          </div>
          <div class="octa-block">
            <p class="text">hours</p>
            <p class="digit">{{hours}}</p>
          </div>
          <div class="octa-block">
            <p class="text">minutes</p>
            <p class="digit">{{minutes}}</p>
          </div>
          <div class="octa-block">
            <p class="text">seconds</p>
            <p class="digit">{{seconds}}</p>
          </div>
        </div>
        <div v-else>
          <div v-if="this.end/1000 > this.now">
            <p class="text-message">It's happening today</p>
          </div>
          <div v-else>
            <p class="text-message">Finished</p>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["date", "end"],

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  methods: {},
  computed: {
    seconds() {
      return (this.date / 1000 - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.date / 1000 - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.date / 1000 - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.date / 1000 - this.now) / 60 / 60 / 24);
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 961px) {
  .octa-countdown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
  }
    .octa-container {
    max-width: 960px;
    margin: auto;
    }
}
@media only screen and (max-width: 960px) {
  .octa-countdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px;
    grid-gap: 25px;
  }
  .octa-container{
      margin: 25px;
  }
}
.octa-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ff2d55;
  border-radius: 5px;
}
.digit {
  color: #ffffff;
  font-size: 64px;
  font-family: "Montserrat", "sans-serif";
  font-weight: 700;
  line-height: 70px;
}
.text {
  color: #ffffff;
  font-size: 24px;
  font-family: "Montserrat", "sans-serif";
  text-transform: uppercase;
  font-weight: 700;
  line-height: 24px;
  margin: 10px;
}
.text-message{
  color: #ff2d55;
  font-size: 64px;
  font-family: "Montserrat", "sans-serif";
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  line-height: 64px;
  margin: auto;
}
</style>
