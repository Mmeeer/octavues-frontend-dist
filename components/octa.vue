<template>
  <svg :height="size" :width="size" class="front">
    <svg x="22.5" y="22.5">
      <polyline :points="
      (half) + ',' + zero + ' ' + tp + ',' + tpp + ' ' + full + ',' + half + ' '
      + tp + ',' + tp + ' ' + half + ',' + full + ' ' +  tpp + ',' + tp
      + ' '+ zero + ',' + half + ' ' + tpp + ',' + tpp + ' ' + (half) + ',' + zero"
      style="fill:none;stroke:white;stroke-width:15"/>
    </svg>
    <svg :x="size/7" :y="size/7" :viewBox="'0 0 ' + size/4*5 + ' ' + size/4*5">
      <polyline :points="
      (half) + ',' + zero + ' ' + tp + ',' + tpp + ' ' + full + ',' + half + ' '
      + tp + ',' + tp + ' ' + half + ',' + full + ' ' +  tpp + ',' + tp
      + ' '+ zero + ',' + half + ' ' + tpp + ',' + tpp + ' ' + (half) + ',' + zero"
      style="fill:white;"/>
    </svg>
    <svg :x="half" :y="zero" @click="clicker(0)" @mouseover="checker(0)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'home']" transform="shrink-15 left-8.1 up-8.15"/>
    </svg>
    <svg :x="tp" :y="tpp" @click="clicker(1)" @mouseover="checker(1)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'calendar-alt']" transform="shrink-15 left-7.2 up-7.25;" :style="{ color: '#222222' }"/>
    </svg>
    <svg :x="full" :y="half" @click="clicker(2)" @mouseover="checker(2)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'blog']" transform="shrink-15 left-7.1 up-7.25"/>
    </svg>
    <svg :x="tp" :y="tp" @click="clicker(3)" @mouseover="checker(3)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'paste']" transform="shrink-15 left-7.2 up-7.25"/>
    </svg>
    <svg :x="half" :y="full" @click="clicker(4)" @mouseover="checker(4)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'users']" transform="shrink-15 left-9 up-9"/>
    </svg>
    <svg :x="tpp" :y="tp" @click="clicker(5)" @mouseover="checker(5)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'history']" transform="shrink-15 left-7.15 up-7.2"/>
    </svg>
    <svg :x="zero" :y="half" @click="clicker(6)" @mouseover="checker(6)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'user-plus']" transform="shrink-15 left-9 up-9"/>
    </svg>
    <svg :x="tpp" :y="tpp" @click="clicker(7)" @mouseover="checker(7)"  style="cursor: pointer;">
      <circle cx="20" cy="20" r="20" style="fill: white" />
      <fa :icon="['fas', 'sign-in-alt']" transform="shrink-15 left-7.2 up-7.25"/>
    </svg>
  </svg>
</template>
<script>
//@mouseleave="checker(now)"
export default{
  props: ['size', 'now'],
  data(){
    return{
      polsize: null,
      zero: 0,
      half: null,
      full: null,
      tp: null,
      tpp: null
    }
  },
  mounted(){
    this.polsize = this.size-60;
    this.zero = 15/2 + 0;
    this.half = 15/2 + this.polsize/2;
    this.full = 15/2 + this.polsize;
    this.tp = 15/2 + (2+Math.sqrt(2))/4 * this.polsize;
    this.tpp = 15/2 + (2-Math.sqrt(2))/4 * this.polsize
  },
  methods:{
    checker(val){
      this.$emit('checked', val)
    },
    clicker(val){
      let smt;
      if(val == 0) smt = "/";
      if(val == 1) smt = "/events";
      if(val == 2) smt = "/blog";
      if(val == 3) smt = "/projects";
      if(val == 4) smt = "/aboutus";
      if(val == 5) smt = "/timeline";
      if(val == 6) smt = "/contactus";
      if(val == 7) smt = "/login";
      this.$emit('clicked', smt);
    }
  }
}
</script>
<style>
.icon{
  height: 40px;
  width: 40px;
  font-size: 40px;
}
.front{
  z-index: 1;
}
</style>
