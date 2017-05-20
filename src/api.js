// import fetch from 'isomorphic-fetch'
import store from 'store'
var env = process.env.NODE_ENV
var rootUrl
if (env === 'development') {
  rootUrl = '' // 开发接口
}
if (env === 'production') {
  rootUrl = '' // 产品接口
}
// const post = function (url, params = {}) {
//   return fetch(rootUrl + url, {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8',
//       'Authorization': store.get('token')
//     },
//     body: JSON.stringify(params)
//   }).then(function (res) {
//     return res.json()
//   }).then((data) => {
//     if (data.msg) {
//       return data.result
//     } else {
//       return Promise.reject(data.result)
//     }
//   })
// }
const info = {
  getId () {
    return store.get('id')
  }
}
/* 登录接口 */
/* 获取studentId与token，并保存到本地 */
export function login (params) {
  store.set('id', 1)
  store.set('token', 2)
  console.log('id', info.getId(), rootUrl)
  return new Promise({})
}
