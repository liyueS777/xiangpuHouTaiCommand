export const loginMutations = {
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
  }
}
