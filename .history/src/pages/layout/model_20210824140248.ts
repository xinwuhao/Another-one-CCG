import {Effect,Reducer} from 'umi'
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
      if (res.data.code === 200) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('urename', JSON.stringify(res.data.data))
        window.location.pathname = '/'
      } else {
        message.error(res.msg)
      }
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