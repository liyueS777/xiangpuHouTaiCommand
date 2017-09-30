export const loginActions = {
  onDelUserInfo({commit},newUserInfo){
    commit("updateUser",newUserInfo);
  },
  onChangeImgPreInfo({commit},newImgPreInfo){
    console.log(12342);
    commit("updateImgPreInfo",newImgPreInfo);
  },
}
