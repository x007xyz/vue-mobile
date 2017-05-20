<template>
  <div class="main-content" :style="{top: top, bottom: bottom, position: 'absolute'}">
    <slot>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'MainContent',
  data () {
    return {
    }
  },
  props: {
    top: {
      type: String,
      default: '56px'
    },
    bottom: {
      type: String,
      default: '58px'
    }
  }
}
</script>
<style lang="css" scoped>
.main-content{
  position: absolute;
  top: 56px;
  bottom: 58px;
  right: 0;
  left: 0;
}
</style>
