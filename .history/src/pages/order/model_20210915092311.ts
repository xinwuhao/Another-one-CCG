import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
import dayjs from 'dayjs'
import { as } from './../../../server/typings/app/index.d';
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
      let arr = [] as any
      console.log(res.data.data)
      res.data.data.map((item: any, index: number) => {
        return arr.push({
          key: index,
          name: item.goods_list.map((item1: any) => {
            return item1.name
          }),
          address: item.address,
          count: item.count,
          pay_time: dayjs(item.pay_time).format('YYYY.MM.DD HH:mm:ss')
        })
      })
      yield put({
        type: 'setTopics',
        payload: res.data
      })
      // }
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