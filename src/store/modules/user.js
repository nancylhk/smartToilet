
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
    state:{
        token: getToken(),
    },
    mutations:{
        SET_TOKEN: (state, token) => {
			state.token = token
		},
    },
    actions:{
        // 用户名登录
		LoginByUsername({
			commit
		}, userInfo) {
			commit('SET_TOKEN', userInfo)
			setToken(userInfo)
		},
        // 登出
		LogOut({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				commit('SET_TOKEN', '')
				removeToken()
				resolve()
			})
		},
    }
}
export default user