import fetch from 'isomorphic-fetch'
import store from 'store'
import router from './router'
var env = process.env.NODE_ENV
var rootUrl
if (env === 'development') {
  rootUrl = ''
}
if (env === 'production') {
  rootUrl = ''
}
const post = function (url, params = {}) {
  return fetch(rootUrl + url, {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': store.get('token')
    },
    body: JSON.stringify(params)
  }).then(function (res) {
    if (res.status === 401) {
      // 没有权限
      api.logout()
    } else {
      return res.json()
    }
  })
}

const urls = [
  'classAtCurDate' // 接口列表
]

var api = {}

for (var url of urls) {
  (function (url) {
    api[url] = (params) => {
      console.log(url)
      return post('course/' + url, params)
    }
  })(url)
}
api.logout = () => {
  store.clearAll()
  router.push('login')
}

api.login = (params) => {
  store.set('id', 1)
  store.set('token', 2)
  return Promise.resolve({params})
}
export default api
