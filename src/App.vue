<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'fade'
    }
  },
  watch: {
    '$route' (to, from) {
      let toDepth = to.meta
      let fromDepth = from.meta
      if (fromDepth > toDepth) {
        this.transitionName = 'fade-left'
      } else if (fromDepth < toDepth) {
        this.transitionName = 'fade-right'
      } else {
        this.transitionName = 'fade'
      }
    }
  }
}
</script>

<style>
</style>
