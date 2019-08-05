<template>
  <v-layout class="fixer">
    <v-flex>
      <div class="octa-projects" v-for="(item, index) in data" :key="index">
        <div class="octa-image" :class="{'trueleft': index%2 == true, 'trueright': !(index%2 == true)}">
          <v-parallax height="300" :src="item.image"></v-parallax>
        </div>
        <div class="octa-content" :class="{'trueright': index%2 == true, 'trueleft': !(index%2 == true)}">
          <h1>{{item.title}}</h1>
          <p>{{item.description}}</p>
          <div class="octa-grid-button">
            <div class="octa-button-decoration">
              <span></span>
            </div>
            <div>
                <Button :word="'See More'" :to="'/projects/' + item._id" :dark="true"/>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Button from '~/components/octa-btn.vue';
export default {
    props:["data"],
    components:{
      Button,
    }
};
</script>

<style scoped>
.fixer {
  z-index: 0;
}
.octa-content h1 {
  color: #ff2d55;
  font-size: 32px;
  font-family: "Montserrat", "sans-serif";
  font-weight: 700;
  line-height: 32px;
}
.octa-content p {
  color: #222222;
  font-size: 16px;
  font-family: "Montserrat", "sans-serif";
  font-weight: 300;
  line-height: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.octa-content {
  padding: 25px;
  background: white;
}
.octa-grid-button {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 5px;
}
.octa-button-decoration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.octa-button-decoration span {
  height: 5px;
  border-radius: 5px;
  width: 100%;
  background-color: #222222;
}
@media only screen and (min-width: 961px) {
  .octa-projects {
    display: grid;
    grid-template: 'left right';

    grid-template-columns: 1fr 1fr;
  }
    .trueleft{
    grid-area: left;
}
.trueright{
    grid-area: right;
}
}

</style>
