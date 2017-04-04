/**
 * Created by zyy on 2017/4/3.
 */
// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */

import Recommend from './components/recommend/recommend.vue';
import Welfare from './components/welfare/welfare.vue';
import App from './App.vue';
import Android from './components/lists/android.vue';
import IOS from './components/lists/ios.vue';
import Web from './components/lists/web.vue';
import wecome from './components/wecome/wecome.vue';

const routers = [
  {
    path: '/',
    name: 'index',
    component: App
  },

  {
    path: '/welfare',
    name: 'welfare',
    component: Welfare
  }, {
    path: '/day',
    name: 'day',
    component: Recommend,
    meta: {requiresAuth: true}
  },

  {
    path: '/ios',
    name: 'ios',
    component: IOS,
    meta: {requiresAuth: true}
  },

  {
    path: '/android',
    name: 'android',
    component: Android

  },
  {
    path: '/web',
    name: 'web',
    component: Web
  },

  {
    path: '/wecome',
    name: 'wecome',
    component: wecome

  }];

export default routers;
