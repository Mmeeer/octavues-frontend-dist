<template lang="html">
  <div class="">
    {{this.$store.state.admin}}
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData(){
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 4000)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
