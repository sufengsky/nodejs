import Vue from 'vue'
import img_preview from "./img_preview"

let vm = null
const getInstance = function () {

  if (!vm) {
    vm = new Vue({
      render: h => h(img_preview)
    }).$mount()
    document.body.appendChild(vm.$el)
  }

  return vm.$children[0]
}

const ImgPreviewer = {
  preview(options) {
    getInstance().imgClick(options)
  }
}
export {
  ImgPreviewer
}
export default {
  install(Vue, options) {
    Vue.prototype.$previewImg = ImgPreviewer.preview
  }
}
