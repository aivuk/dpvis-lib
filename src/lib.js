// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'fa' })

/* eslint-disable no-new */
export function treemap (el, config = {}) {
  Vue.prototype.$treemapconfig = config
  new Vue({
    el: el,
    router,
    components: { App },
    render: h => h(App)
  })
}
