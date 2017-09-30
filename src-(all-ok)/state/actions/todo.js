export const todoActions = {
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
  onAddAuthCompCode({commit},str){
    commit("onRememberAuthEditCompCode",str)
  },
  onActionChangeIndexCopyImgUrl({commit},str){
    commit("onChangeIndexCopyImgUrl",str)
  }
}
