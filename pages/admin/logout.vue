<template lang="html">
  <div class="">

  </div>
</template>

<script>
export default {
  async asyncData(){
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 4000)
    })
  },
  mounted(){
    this.$store.dispatch("logout");
    this.$cookies.removeAll();
    this.$router.push("/login");
  }
}
</script>

<style lang="css" scoped>
</style>
