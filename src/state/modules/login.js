import { loginGetters } from '../getters/login'
import { loginMutations } from '../mutation/login'
import { loginActions } from '../actions/login'
const login = {
  state:{
    userInfo: { //保存用户信息
    },
  },
  getters:loginGetters,
  mutations:loginMutations,
  actions:loginActions
}
export default login
