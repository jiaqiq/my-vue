// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import mock from './mock/mock'
import axios from 'axios'
import vueDrag from 'vue-dragging'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueDrag)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
// axios.defaults.baseURL = '/api'

// 全局event bus ，方便事件传递
window.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
