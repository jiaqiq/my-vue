// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import mock from './mock/mock'
import axios from 'axios'
import vueDrag from 'vue-dragging'
import echarts from 'echarts'
import store from './store'
//主题
// import './assets/scss/element-variables.scss'
//导入字体图标
import './assets/iconfont/iconfont.css'
import './assets/scss/font-awesome.css'

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
  store,
  template: '<App/>',
  components: { App }
})
