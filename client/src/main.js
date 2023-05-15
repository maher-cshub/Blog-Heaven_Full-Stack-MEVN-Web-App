import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './store/vuex'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store:vuex,
  vuetify,
  render: h => h(App)
}).$mount('#app')
