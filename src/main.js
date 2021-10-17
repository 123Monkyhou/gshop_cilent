import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//浏览器控制台不显示非生产打包环境
Vue.config.productionTip = true
Vue.use(ElementUI);

new Vue({
  router,//注册路由器组件=>任何组件都可以直接访问两个对象,$router,$route
  store,//注册vuex
  render: h => h(App)
}).$mount('#app')
