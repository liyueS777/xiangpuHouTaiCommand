import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userInfo: { //保存用户信息
    },
    aTodos:[{value:"默认默认",id:0}],
    authList:{
      compCode:''
    },
    count:10,
    numb:100
  },
  getters: {
    /**
     * 获取用户信息
     */
    user: state => {
      if(isEmptyObject(state.userInfo)){
        state.userInfo = JSON.parse(sessionStorage['userInfo'] || '{}');
      }
      return state.userInfo;
    },
    aTodos:(state)=>{
        return state.aTodos;
    },
    /**
     * 是否登录
     */
    isLogin: state => {
      if(isEmptyObject(state.userInfo)){
        state.userInfo = JSON.parse(sessionStorage['userInfo'] || '{}');
      }
      return !isEmptyObject(state.userInfo);
    }
  },
  mutations: {
    /**
     * 更新用户数据
     * @param {*} state
     * @param {*} newUserInfo
     */
    updateUser(state, newUserInfo) {
      if(newUserInfo){
        state.userInfo = newUserInfo;
        sessionStorage['userInfo'] = JSON.stringify(newUserInfo);
      }
    },
    ONADDTODO(state,item){
      state.aTodos.push(item);
    },
    //删除 TodoList item
    ONDELTODO(state,index){
      state.aTodos.splice(index,1);
    },
    //设置 错误提示信息
    ONERROR(state,str){
      state.massage=str;
    },
    onRememberAuthEditCompCode(state,str){
      state.authList.compCode = str;
    }
  },
  actions:{
    onAddTodo(context,item){
      if(item.value!=""){
        context.commit("ONADDTODO",item);
        context.commit("ONERROR","");
      }else{
        context.commit("ONERROR","添加失败")
      }
    },
    //提交 ONDELTODO
    onDelTodo({commit},index){
      commit("ONDELTODO",index);
    },
    onDelUserInfo({commit},newUserInfo){
      commit("updateUser",newUserInfo);
    },
    onAddAuthCompCode({commit},str){
      commit("onRememberAuthEditCompCode",str)
    }
  }
})
/**
 * 是否为空对象
 * @param {*} obj
 */
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
export default store;
