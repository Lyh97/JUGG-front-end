// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from "vee-validate"
import VCharts from 'v-charts'

/* Ensure use css-loader */
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://jugg.w3ibm.mybluemix.net/api'

Vue.use(Vuetify, {
 iconfont: 'fa4'
})
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
