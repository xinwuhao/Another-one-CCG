import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface homeModelState {
  topics: any[],
  list: any[]
}
export interface homeModelType {
  namespace: 'home'
  state: homeModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getIndex: Effect
    getOrder: Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    setTopics: Reducer<homeModelState>
    setList: Reducer<homeModelState>
  }
}
const LoginModel: homeModelType = {
  namespace: 'home',
  state: {
    topics: [],
    lsit: [],
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //获取
    *getIndex({ payload }, { call, put }) {
      let res = yield call(api.getIndex, payload)
      // if (res.data.success) {
      // console.log(res.data)
      yield put({
        type: 'setTopics',
        payload: res.data.data
      })
      // }
    },
    *getOrder({ payload }, { call, put }) {
      let res = yield call(api.getOrder, payload)
      yield put({
        type: 'setTopics',
        payload: res.data.data
      })
    }
  },
  reducers: {
    setTopics(state, action) {
      // console.log(action.payload);
      return {
        ...state,
        topics: action.payload,
      }

    },
  }
}

export default LoginModel