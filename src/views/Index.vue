<template>
  <div class="content">
    <!--<transition name="fade" mode="out-in">-->
      <router-view></router-view>
    <!--</transition>-->
    <div class="tabbar is-fixed">
      <router-link class="tabbar-item" to="/index/home">
        <div class="tabbar-item-icon">
          <span class="iconfont icon-home"></span>
        </div>
        <div class="tabbar-item-label">
          首页
        </div>
      </router-link>
      <router-link class="tabbar-item" to="/index/1">
        <div class="tabbar-item-icon">
          <span class="iconfont icon-home"></span>
        </div>
        <div class="tabbar-item-label">
          首页
        </div>
      </router-link>
      <router-link class="tabbar-item" to="/index/2">
        <div class="tabbar-item-icon">
          <span class="iconfont icon-home"></span>
        </div>
        <div class="tabbar-item-label">
          首页
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Index',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>  
@import "../assets/scss/variables.scss";
@import "../assets/scss/_flex.scss";
$bar-tab-height: 56px;
.content{
  background-color: #eee;
}
.tabbar.is-fixed{
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.tabbar{
  @include flexbox;
  text-align: center;
  background-color: #f7f7f7;
  border-top: 1px solid #eee;
}
.tabbar-item{
  display: block;
  padding: 7px 0;
  @include flex(1);
}
.tabbar-item.router-link-active{
  // background-color: #eaeaea;
  color: #00bb99;
}
.tabbar-item-icon{
  width: 24px;
  height: 24px;
  margin: 0 auto 5px;
}
.tabbar-item-label{
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
// .tabbar {
//     display: table;
//     background-color: #f7f7f7;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     border-top: 1px solid #eee;
//     box-sizing: border-box;
//     height: $bar-tab-height;
//     padding: 0;
//     table-layout: fixed;
//     border-top: $border-default;
//     position: absolute;
//     -webkit-touch-callout: none; //选项卡上禁止长按弹出菜单；
//     // Navigational tab (Nested to be more specific for the icons in tab-items)
//     .tabbar-item {
//         display: table-cell;
//         width: 1%;
//         height: $bar-tab-height;
//         color: #929292;
//         text-align: center;
//         vertical-align: middle;
//         text-decoration: none;
//         //自动处理超出部分的文字；
//         overflow: hidden;
//         text-overflow: ellipsis;
//         white-space: nowrap;
//         // Tab icon
//         .tabbar-item-icon {
//             display: inline-block;
//             position: relative;
//             top: 6px;
//             width: 24px;
//             height: 24px;
//             padding-top: 0;
//             padding-bottom: 0;
//             background-size: cover;
//             // Make the text smaller if it's used with an icon
//             ~ .tabbar-item-label {
//                 display: block;
//                 font-size: 11px;
//                 //处理超出部分文字；
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//             }
//             &:active {
//                 background: none;
//             }
//         }
//     }
// }
</style>