import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

import Vuetify from 'vuetify'
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify : new Vuetify(),
  store,
  router,
  render: h => h(App),
}).$mount('#app')