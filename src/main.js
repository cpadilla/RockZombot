// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueConfig from 'vue-config'

// TODO move configs to a file
const configs = {
    API: 'http://localhost:8888'
}

Vue.config.productionTip = false

Vue.use(VueConfig, configs)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
