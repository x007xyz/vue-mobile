<template>
  <div class="content">
    <!--<transition name="fade" mode="out-in">-->
      <router-view></router-view>
    <!--</transition>-->
    <Tabbar 
      :routers="[
        {path: '/index/home', icon: 'icon-home', name: '首页'},
        {path: '/index/loading', icon: 'icon-course', name: '加载'},
        {path: '/index/message', icon: 'icon-info', name: '信息'}
      ]"
    >
    </Tabbar>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {Tabbar: require('components/Tabbar')},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>  
.content{
  background-color: #eee;
}
</style>
