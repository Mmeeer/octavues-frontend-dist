<template lang="html">
  <div class="octa-video" :class="{'octa-video-active': active}">
    <div class="octa-cancel" @click="$emit('notactive')">
      <fa class="font" :icon="['fas', 'times']"/>
    </div>
    <div class="octa-insider">
      <vue-plyr class="octa-videoplyr">
        <video controls>
          <source :src="video" type="video/mp4">
        </video>
      </vue-plyr>
    </div>
  </div>
</template>

<script>
export default {
  props: ['active', 'video']
}
</script>

<style lang="css" scoped>
.octa-video{
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, background 0.7s ease-out;
}
.octa-cancel{
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
.octa-cancel .font{
  width: 30px;
  height: 30px;
}
.octa-video-active{
  transform: translateY(0) !important;
  background: rgba(0, 0, 0, 0.7);
  transition: transform 0.7 ease-out, background 0.3s ease;
}
.octa-insider{
  margin: auto;
  max-height: 100%;
}
.octa-videoplyr{
  position: relative;
  max-height: 100%;
}
@media only screen and (min-width: 961px) {
  .octa-insider{
    width: 70%;
  }
}
@media only screen and (max-width: 960px) {
  .octa-insider{
    width: 100%;
  }
}
</style>
