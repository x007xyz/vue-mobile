// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
import './assets/scss/animate.scss'
// 导入api接口
import api from '../src/api'
Vue.$api = Vue.prototype.$api = api
// 导入全局指令loading
import loading from './components/loading/directive'
Vue.use(loading)
// 路由限制
import cache from 'store'
router.beforeEach((to, from, next) => {
  if (cache.get('id') && to.path === '/login') {
    next('/index')
  } else if (!cache.get('id') && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
