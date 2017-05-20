import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/*
meta决定转场效果，转场效果在APP.vue中判断实现
*/
export default new Router({
  routes: [{
    path: '/index',
    component: require('views/Index.vue'),
    meta: 10,
    children: [
      {
        path: '',
        component: require('views/Home.vue'),
        meta: 11
      },
      {
        path: 'home',
        component: require('views/Home.vue'),
        meta: 11
      }
    ]
  }, {
    path: '/login',
    component: require('views/Login.vue'),
    meta: 1
  }, {
    path: '*',
    redirect: '/login'
  }]
})
