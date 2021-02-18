import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App.vue'
import router from './router'

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
