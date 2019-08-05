<template lang="html">
  <div class="">
    <nuxt-link :to="to" class="btn" :class="{'btn-dark': dark}">
      {{word}}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['word', 'to', 'dark']
}
</script>

<style lang="css" scoped>
.btn{
  color: white;
  border-radius: 48px;
  font-size: 20px;
  font-weight: 700;
  border: 4px solid white;
  margin: 5px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
}
.btn:hover{
  background: white;
  color: #222222;
  transition: all 0.3s ease;
}
.btn-dark{
  color: #222222;
  border: 4px solid #222222;
}
.btn-dark:hover{
  background: #222222;
  color: white;
}
</style>
