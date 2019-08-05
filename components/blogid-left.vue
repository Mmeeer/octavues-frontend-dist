<template lang="html">
  <div class="octa-left" id="left-scrollbar">
    <div class="direction">
      <div class="octa-header-image" :style="{'background-image': 'url('+ data.blog.header + ')'}">
      </div>
      <div class="octa-header">
        <div class="octa-profile">
          <div class="octa-profile-image" :style="{'background-image': 'url('+ data.blog.author.img1 + ')'}">
          </div>
          <p class="octa-author">{{data.blog.author.name}}</p>
          <p class="octa-date">{{data.blog.date}}</p>
        </div>
        <div class="octa-title">
          <h1>{{data.blog.title}}</h1>
        </div>
      </div>
      <div class="octa-content ql-container">
        <p class="octa-para" v-for="(item, index) in data.blog.content" :key="index">
          <span v-if="item.type === 'img'">
            <img :src="item.context" class="octa-img"/>
          </span>
          <span class="" v-else-if="item.type === 'paragraph'">
            <div class="ql-editor" v-html="item.context">

            </div>
          </span>
          <span v-else>
            <h2 class="octa-subtitle">{{item.context}}</h2>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data']
}
</script>

<style lang="css" scoped>
@media only screen and (min-width: 961px){
  .octa-header{
    margin-top: -100px;
    display: grid;
    margin-left: 30px;
    margin-right: 30px;
    grid-template-columns: 200px auto;
    grid-gap: 30px;
  }
  .octa-title h1{
    margin-top: 130px;
  }
}
.octa-header-image{
  height: 300px ;
  width: 100%;
  background-position: center;
  background-size: cover;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
}
.direction{
  direction: ltr;
}
.octa-author{
  color: #ff2d55;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 10px;
}
.octa-date{
  color: #cccccc;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-top: 0;
}

.octa-profile{
  display: flex;
  flex-direction:column;
  align-items: center;
}
.octa-profile-image{
  height: 200px;
  width: 200px;
  border-radius: 200px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
}
.octa-title h1{
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  line-height: 48px;
}
.octa-para{
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
}
.octa-content{
  margin: 30px;
}
.octa-img{
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
  width: 100%;
}
.octa-subtitle{
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 32px;
  text-transform: uppercase;
}
  .octa-left{
    overflow-x: hidden;
    overflow-y:auto;
    direction: rtl;
    font-size: 40px;
    overflow: auto;
  	transition: color 0.3s;
  }

#left-scrollbar::-webkit-scrollbar {
	width: 14px;
}
#left-scrollbar::-webkit-scrollbar-thumb {
	background-clip: content-box;
	border: 4px solid transparent;
	border-radius: 7px;
	box-shadow: inset 0 0 0 10px;
}
#left-scrollbar::-webkit-scrollbar-button {
	width: 0;
	height: 0;
	display: none;
}
#left-scrollbar::-webkit-scrollbar-corner {
	background-color: transparent;
}
#left-scrollbar::-webkit-scrollbar-track
{
  background-color: rgba(0, 0, 0, 0);
}

@media only screen and (max-width:960px) and (min-width:601px){
  .octa-header{
    margin: 30px;
    margin-top: -100px;
  }
  .octa-header h1{
    font-size: 30px;
    text-align: center;
  }
}
@media only screen and (max-width:600px){
  .octa-header{
    margin: 30px;
    margin-top: -100px;
  }
  .octa-header h1{
    font-size: 20px;
    text-align: center;
    line-height: 20px;
  }
  .octa-subtitle{
    font-size: 18px;
    line-height: 18px;
  }
  .octa-header-image{
    height: 250px ;
  }
}
</style>
