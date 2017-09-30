import { todoGetters } from '../getters/todo'
import { todoMutations } from '../mutation/todo'
import { todoActions } from '../actions/todo'
const todo = {
  state:{
    aTodos:[{value:"默认默认",id:0}],
    authList:{
      compCode:''
    },
    count:10,
    numb:100,
    copyImgUrl:''
  },
  getters:todoGetters,
  mutations:todoMutations,
  actions:todoActions
}
export default todo
