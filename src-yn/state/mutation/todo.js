export const todoMutations = {

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
  },
  onChangeIndexCopyImgUrl(state,str){
    state.copyImgUrl = str;
  }
}
