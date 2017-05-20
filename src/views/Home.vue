<template>
  <header-bar :showBack="false">
    首页
  </header-bar>
</template>

<script>
export default {

  name: 'Home',
  components: {HeaderBar: require('components/HeaderBar')},
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .main-content{
    bottom: 58px;
  }
</style>