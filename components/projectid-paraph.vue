<template lang="html">
  <div class="octa-container">
    <div class="octa-main">
        <div v-for="(item, index) in data.paragraphs" :key="index" :class="{'octa-left': index%2 == 0, 'octa-right': index%2 == 1}" v-html="item">
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
}
</script>

<style lang="css" scoped>
.fixer{
  z-index: 0;
}
  .octa-container{
    max-width: 960px;
    margin: auto;
  }
  .octa-left , .octa-right{
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    margin: 20px;
  }
@media only screen and (min-width:961px){
  .octa-main{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-top: 120px;
    padding-bottom: 20px;
  }
  .octa-right{
    margin-top:100px;
    height: 300px;
  }
  .octa-left{
    margin-top: -100px;
    height: 300px;
  }
}
@media only screen and (max-width:960px) {
  .octa-left , .octa-right{
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
