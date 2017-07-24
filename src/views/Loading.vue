<template>
  <div class="content">
    <header-bar :showBack="false">
      加载效果
    </header-bar>
    <div class="main-content" v-loading="loading">
      <template v-if="!loading">
       加载完成
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  components: {
    HeaderBar: require('components/HeaderBar')
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="css" scoped>
  .main-content{
    bottom: 56px;
  }
</style>
