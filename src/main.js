// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import VueRouter from 'vue-router'
import routes from './router/router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './state/store'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'
//引入配置prototype
import './VueConfig/VueConfig'
//引入全局过滤器
import './filter/VueFilter'
// import FastClick from 'fastclick'
// FastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */
const router = new VueRouter({
  routes,
})
/*请求配置*/
Vue.prototype.$Ajax = axios

//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //处理登录超时
  if(res.data.code === 2){
    router.push('/login');
  }
  return res;
},function(err){
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  // console.log('mainjs',store.getters.user);
  if (to.path == '/login') {
    // store.commit('updateUser', {});
    store.dispatch('onDelUserInfo', {});
  }
  if (!store.getters.isLogin && to.path != '/login') {

    next({
      path: '/login',
      query: {redirect: to.fullPath}
    });
  } else {
    next()
    NProgress.done()
  }
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
