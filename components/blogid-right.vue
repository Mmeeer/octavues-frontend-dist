<template lang="html">
  <!-- <v-flex> -->
  <div class="right" id="right-scrollbar">
    <div class="octa-rightside-container">
      <div class="" v-for="(item, index) in data" :key="index">
        <nuxt-link :to="'/blog/'+item._id" class="octa-link" :class="{'octa-link-active': item.active}">
        <p>
          {{item.title}}
        </p>
        <p class="octa-link-date">
        {{item.date}}
        </p>
      </nuxt-link>
      </div>
    </div>
  </div>
<!-- </v-flex> -->
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="css" scoped>
.octa-rightside-container{
  margin:30px;
}
.right{
  width: 100%;
  background-color: #222222;
  min-height: 100vh;
}
.octa-link{
  color: #cccccc;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: 0.5s ease;

}
.octa-link-date{
  text-align: right;
  font-size: 14px ;
  text-transform: uppercase;
}
.octa-link p:first-child{
  margin: 0;
}

#right-scrollbar::-webkit-scrollbar {
	width: 14px;
}
#right-scrollbar::-webkit-scrollbar-thumb {
	background-clip: content-box;
	border: 4px solid transparent;
	border-radius: 7px;
	box-shadow: inset 0 0 0 10px;
}
#right-scrollbar::-webkit-scrollbar-button {
	width: 0;
	height: 0;
	display: none;
}
#right-scrollbar::-webkit-scrollbar-corner {
	background-color: transparent;
}
#right-scrollbar::-webkit-scrollbar-track
{
  background-color: rgba(0, 0, 0, 0);
}

.right{
  overflow: auto;
  overflow-x: hidden!important;
  overflow-y: scroll!important;
  font-size: 40px;
}

.octa-link:hover{
  color: white;
}
.octa-link-active{
  color: white;
}
</style>
