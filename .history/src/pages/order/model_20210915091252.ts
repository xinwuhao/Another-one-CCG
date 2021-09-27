import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface orderModelState {
  topics: any[],
}
export interface orderModelType {
  namespace: 'order'
  state: orderModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getOrder: Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    setTopics: Reducer<orderModelState>
  }
}
const LoginModel: orderModelType = {
  namespace: 'order',
  state: {
    topics: [],
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //获取
    *getOrder({ payload }, { call, put }) {
      let res = yield call(api.getOrder, payload)
      // if (res.data.success) {
      let arr = res.data.data

      yield put({
        type: 'setTopics',
        payload: res.data
      })
      // }
    }
  },
  reducers: {
    setTopics(state, action) {
      console.log(action.payload);
      return {
        ...state,
        topics: action.payload,
      }

    },
  }
}

export default LoginModel