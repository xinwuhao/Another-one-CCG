import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface goodsAddModelState {
    list: any[],
}
export interface goodsAddModelType {
    namespace: 'add'
    state: goodsAddModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getGoods: Effect
        addGoods: Effect
        delGoods: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setList: Reducer<goodsAddModelState>
    }
}
const LoginModel: goodsAddModelType = {
    namespace: 'add',
    state: {
        list: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取
        *getGoods({ payload }, { call, put }) {
            let res = yield call(api.getGoods, payload)
            // if (res.data.success) {
            yield put({
                type: 'setList',
                payload: res.data
            })
            // }
        },
        *addGoods({ payload }, { call, put }) {
            let res = yield call(api.addGoods, payload)
            // console.log(res)
        },
        *delGoods({ payload }, { call, put }) {
            let res = yield call(api.addGoods, payload)
            // console.log(res)
        },
    },
    reducers: {
        setList(state, action) {
            console.log(action.payload);
            return {
                ...state,
                list: action.payload,
            }

        },
    }
}

export default LoginModel