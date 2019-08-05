<template lang="html">
  <div class="octa-subs">
    <div class="octa-container">
      <div class="octa-title">
        <h2>Биднийг дагаад урагш тэмүүл!</h2>
      </div>
      <octainput/>
    </div>
  </div>
</template>

<script>
import octainput from '~/components/input.vue'
export default {
  components:{
    octainput,
  }
}
</script>

<style lang="css" scoped>
  .octa-subs{
    width: 100%;
    background: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .octa-container{
    background: white;
    max-width: 960px;
    margin: auto;
    padding: 40px;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  }
@media only screen and (max-width:960px){
  h2{
    font-size: 24px;
  }
}
</style>
