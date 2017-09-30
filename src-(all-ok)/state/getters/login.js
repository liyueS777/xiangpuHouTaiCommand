export  const loginGetters = {
  user: state => {
    if(isEmptyObject(state.userInfo)){
      state.userInfo = JSON.parse(sessionStorage['userInfo'] || '{}');
    }
    return state.userInfo;
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
}


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
