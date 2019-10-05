import Vue from 'vue' // Vue itself
import App from './App.vue' // Main component
import router from './router' // Vue Router (router.js)
import store from './store' // VueX store (store.js)

/**
  * Plugin example: axios (http client)
  * More information: https://vuejs.org/v2/guide/plugins.html
 */
import Axios from 'axios' // install from npm first
import VueAxios from 'vue-axios' // ^
Vue.use(VueAxios, Axios)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
