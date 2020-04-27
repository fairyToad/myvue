// 入口文件
// vue实列生成
// 组件引用   
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// 导入样式 
require('!style-loader!css-loader!./assets/bootstrap/css/bootstrap.css');
require('!style-loader!css-loader!./assets/bootstrap/css/style.css');
require('!style-loader!css-loader!./assets/index.css');

/*引入axios*/
// 在此导入可以全局使用,提高复用性
import Axios from 'axios'
Vue.prototype.axios = Axios;

// 携带cookie请求,
// Axios.defaults.withCredentials = true;


// 方便反序列化操作,无需解析多个表单 
import QS from 'qs'
Vue.prototype.qs = QS;

// 美化组件
import HeyUI from 'heyui';
Vue.use(HeyUI);

// 生成vue实例 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
