import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-stock-trader-58144-default-rtdb.firebaseio.com'
//axios.defaults.headers.common['Autorization'] = 'bruh'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInt = axios.interceptors.request.use(config => {
  console.log('Request', config)
  return config
})

const resInt = axios.interceptors.response.use(res => {
  console.log('Response', res)
  return res
})

axios.interceptors.request.eject(reqInt)
axios.interceptors.response.eject(resInt)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
