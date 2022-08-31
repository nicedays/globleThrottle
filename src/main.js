import Vue from 'vue'
import App from './App.vue'
import "@/directive/throttle.js"
import "@/directive/copy.js"
import "@/directive/longpress.js"
import "@/directive/emoji.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
