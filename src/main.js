import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/index.css'

Vue.config.productionTip = false
require('dotenv').config()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
