<template lang="html">
  <div class="fixer">
    <div class="octa-title" :style="'background-image: url(' + data.img + ');'">
      <div class="octa-overlay">
        <div class="octa-container">
          <h1 class="octa-title-content"  v-if="data.type== 'h1' ">
            {{data.title}}
          </h1>
          <h2 class="octa-title-content" style="font-size: 48px;" v-else>
            {{data.title}}
          </h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:['data'],
}
</script>

<style lang="css" scoped>
  .fixer{
    z-index: 0;
  }
  .octa-title-content{
    padding:20px;
  }
  .octa-title{
    height: 300px;
    background-position: center;
    background-size: cover;
  }
  .octa-overlay{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .octa-container{
    max-width: 960px;
    margin: auto;
  }
  h1,h2{
    color: #ffffff;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
  }
@media only screen and (max-width:960px) {
    .octa-container{
      max-width: 540px;
      margin: auto;
    }
    h1{
      font-size: 56px;
    }
    h2{
      font-size: 48px;
    }
  }
@media only screen and (max-width:600px) {
    h1{
      font-size: 36px;
    }
    h2{
      font-size: 28px;
    }
  }
</style>
