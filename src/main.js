// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import cache from 'store'
import './assets/scss/style.scss'
import './assets/scss/animate.scss'
import loading from './components/loading/directive'
Vue.use(loading)
router.beforeEach((to, from, next) => {
  if (cache.get('studentId') && to.path === '/login') {
    next('/index')
  } else if (!cache.get('studentId') && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
import dialog from 'components/Dialog.js'
Vue.$dialog = Vue.prototype.$dialog = dialog
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
