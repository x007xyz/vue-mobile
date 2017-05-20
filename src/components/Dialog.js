import Vue from 'vue'
import dialogVue from './Dialog.vue'
let DialogConstructor = Vue.extend(dialogVue)
let instance
let dialogQueue = []
let initInstance = function () {
  instance = new DialogConstructor({
    el: document.createElement('div')
  })
}
let showNextDialog = function () {
  if (!instance) {
    initInstance()
  }
  if (!instance.show) {
    if (dialogQueue.length > 0) {
      let options = dialogQueue.shift()
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      document.body.appendChild(instance.$el)

      Vue.nextTick(() => {
        instance.show = true
      })
    }
  }
}
var Dialog = function (options) {
  dialogQueue.push(options)
  showNextDialog()
}
Dialog.show = function (options) {
  return Dialog(options)
}
export default Dialog
