<template>
  <div class="tabbar">
    <router-link v-for="router in routers" :key="router.path" class="tabbar-item" :to="router.path" exact replace>
      <span class="tabbar-item-icon iconfont" :class="router.icon"></span>
      <span class="tabbar-item-label">
        {{router.name}}
      </span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  props: {
    routers: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/_flex.scss";
$bar-tab-height: 56px;
.tabbar {
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    text-align: center;
    background-color: #f7f7f7;
    border-top: 1px solid #eee;
    @include flexbox;
    -webkit-touch-callout: none; //选项卡上禁止长按弹出菜单；
    // Navigational tab (Nested to be more specific for the icons in tab-items)
    .tabbar-item {
        display: block;
        padding: 7px 0;
        @include flex(1)
        &.router-link-exact-active, &.router-link-active {
          color: #00bb99;
        }
        // Tab icon
        .tabbar-item-icon {
            display: inline-block;
            position: relative;
            top: 6px;
            width: 24px;
            height: 24px;
            padding-top: 0;
            padding-bottom: 0;
            background-size: cover;
            // Make the text smaller if it's used with an icon
            ~ .tabbar-item-label {
                display: block;
                font-size: 11px;
                //处理超出部分文字；
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &:active {
                background: none;
            }
        }
    }
}
</style>
