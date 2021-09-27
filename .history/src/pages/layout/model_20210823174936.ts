import { Effect, Reducer } from 'umi'
import {} from 
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface loginModelState {
  topics: any[],
}
export interface loginModelType {
  namespace: 'login'
  state: loginModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getLogin: Effect,
  },
  // 等同于vuex里面的mutation
  reducers: {
    setTopics: Reducer<loginModelState>
  }
}
const LoginModel: loginModelType = {
  namespace: 'login',
  state: {
    topics: [],
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    *getLogin({ payload }, { call, put }) {
      let res = yield call(api.login, payload)
      console.log(res)
    //   if (res.code === 200) {
    //     localStorage.setItem('token', JSON.stringify(res.token))
    //     localStorage.setItem('urename', JSON.stringify(res.data))
    //     window.location.pathname = '/Home'
    //   } else {
    //     message.error(res.msg)
    //   }
      if (res.data.success) {
        yield put({
          type: 'setTopics',
          payload: res.data.data
        })
      }
    },
  },
  reducers: {
    setTopics(state, action) {
      return {
        ...state,
        topics: action.payload,
      }
    },
  }
}

export default LoginModel