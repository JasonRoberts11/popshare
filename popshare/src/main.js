import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockprojects from './mockprojects.js'
import mockusers from './mockusers.js'





Vue.config.productionTip = false

let data = {
  projects: mockprojects,
  users: mockusers
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
