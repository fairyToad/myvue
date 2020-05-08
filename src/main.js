// 入口文件
// vue实列生成
// 组件引用   
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 国际化语言支持模组
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
// 导入语言包
const i18n = new VueI18n({
  // 当前默认语言
  locale:'zh',
  // 语言包声明
  messages:{
    'zh':require('./lang/zh'),
    'en':require('./lang/en')
  }
})



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
  i18n,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
