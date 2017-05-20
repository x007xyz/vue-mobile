<template>
  <transition name="loading-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" class="loading-mask" :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="loading-spinner">
        <img src="./assets/loading-spin.svg" width="256" height="32" />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Loading',
  data () {
    return {
      text: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    }
  },
  methods: {
    handleAfterLeave () {
      this.$emit('after-leave')
    }
  }
}
</script>
<style lang="css" scoped>
.loading-mask {
  position: absolute;
  z-index: 10000;
  background-color: hsla(0,0%,100%,.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;
}
.loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
.loading-mask.is-fullscreen {
  position: fixed;
}
.loading-mask.is-fullscreen .loading-spinner {
  margin-top: -25px;
}
.loading-fade-enter-active, .loading-fade-leave-active {
  transition: opacity .5s
}
.loading-fade-enter, .loading-fade-leave-active {
  opacity: 0
}
</style>
