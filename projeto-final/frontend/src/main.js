import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import './config/bootstrap'
import './config/msgs'
import router from './config/router'
import axios from 'axios'


Vue.config.productionTip = false

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkc29uIEpvc2UiLCJlbWFpbCI6Impvc2VAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYzNTAwMDMyMywiZXhwIjoxNjM1MjU5NTIzfQ.eIjRU7JDNBTpXZkyZkvZ-kkH5dBLdJgVHCMw-944TAI'

// axios.defaults.headers.common['Authorization']  = 'bearer ' + token

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')