import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill';
Vue.use(Vuex);
import login from './modules/login'
import todo from './modules/todo'
const store = new Vuex.Store({
  modules:{
    login,
    todo
  }
})

export default store;
