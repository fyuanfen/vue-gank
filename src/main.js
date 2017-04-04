import Vue from 'vue';
import store from './vuex/store';
import VueRouter from 'vue-router';
import routes from './routers'; // 引入路由配置
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';  // 引入滑动模块
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块
import {loadFromlLocal} from './common/js/store';  // 公共方法：本地缓存
import './common/css/font.styl'; // 引入公共样式
import App from './App.vue';
//
Vue.use(infiniteScroll);
Vue.use(VueRouter);

Vue.prototype.$http = axios;
// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
    error: require('./assets/404.png'),
    loading: require('./assets/loading.gif'),
    attempt: 5
  }
);
const router = new VueRouter({
  'linkActiveClass': 'active', // 配置激活类名linkActiveClass
  routes // （缩写）相当于 routes: routes
});
/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
const routerApp = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
/**
 * loadFromlLocal()是读取本地缓存数据，具体common/js/store.js 查看
 *
 *
 */
// if (!loadFromlLocal('gank', 'wecome', false)) {
  router.push('/welfare');
// }
export default routerApp;
