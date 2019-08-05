<template lang="html">
  <transition name="moveing">
    <div class="loading-page" v-if="loading">
      <div class="rel">
        <div class="abs">
          <img class="img circle" src="~/assets/loading/circle.png" alt="">
        </div>
        <div class="abs">
          <img class="img line" src="~/assets/loading/line.png" alt="">
        </div>
        <div class="abs">
          <img class="img filled" src="~/assets/loading/filled.png" alt="">
        </div>
        <div class="abs">
          <img class="img logo" src="~/assets/logo.png" alt="">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
}
</script>

<style scoped>
.moveing-enter-active, .moveing-leave-active {
  /* transition: z-index .5s step-end, opacity .5s linear; */
  transition: transform .3s ease;
}
.moveing-leave-active{
  transform: perspective(300px) rotateX(-90deg) translateY(50vh) translateZ(-200vh);
  transform-origin: bottom;
  transition-property: all;
}
.moveing-enter{
  transform: perspective(300px) rotateX(90deg) translateY(50vh) translateZ(-200vh);
  transform-origin: bottom;
  transition-property: all;
}
 /* {
  transform: rotateX(90deg) translateY(-100vh);

} */
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-image: url('~assets/nav/cover.png');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rel{
  position: relative;
  width: 100%;
  height: 100%;
}
.abs{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@keyframes CIRCLE {
  0% {
    transform: rotate(0);
  }
  66%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(90deg);
  }
}
@keyframes ELCRIC {
  0% {
    transform: rotate(0);
  }
  66%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(-90deg);
  }
}

.circle{
  animation: CIRCLE;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.line{
  animation: ELCRIC;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.filled{
  animation: BOUNCE;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.logo{
  margin-top: 40px;
}
</style>
