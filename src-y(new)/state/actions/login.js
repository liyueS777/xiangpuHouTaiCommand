export const loginActions = {
  onDelUserInfo({commit},newUserInfo){
    commit("updateUser",newUserInfo);
  },
}
