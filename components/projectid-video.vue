<template lang="html">
  <div class="octa-container">
    <div class="octa-desk">
      <div class="octa-video">
        
        <vue-plyr>
          <video :src="data.video" :poster="data.img"></video>
        </vue-plyr>  
      </div>
      <div class="octa-description">
        {{data.description}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="css" scoped>
.octa-container{
  max-width: 960px;
  margin:auto;
  width: 100%;
}
.octa-desk{
  width: 100%;
  padding-top: 20px;
}
.octa-video{
  background-position: center;
  background-size:cover;
  border-radius: 10px;
}
.octa-description{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  height: auto;
}
@media only screen and (min-width:961px){
  .octa-desk{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: 300px;
  }
}
@media only screen and (max-width:960px) {
  .octa-container{
    max-width: 540px;
    margin: auto;
  }
  .octa-video{
    height: 300px;
    margin-bottom: 20px;
  }
  .octa-desk{
    padding: 20px;
    padding-bottom: 0px !important;
  }
}
</style>
