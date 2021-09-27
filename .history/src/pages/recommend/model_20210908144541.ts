import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface rNavModelState {
    list: any[],
}
export interface rNavModelType {
    namespace: 'rNav'
    state: rNavModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getRecommendNav: Effect
        addRecommendNav: Effect
        delRecommendNav: Effect
        updateRecommendNav: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setList: Reducer<rNavModelState>
    }
}
const LoginModel: rNavModelType = {
    namespace: 'rNav',
    state: {
        list: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取
        *getRecommendNav({ payload }, { call, put }) {
            let res = yield call(api.getRecommendNav, payload)
            yield put({
                type: 'setList',
                payload: res.data
            })
        },
        //添加
        *addRecommendNav({ payload }, { call, put }) {
            let res = yield call(api.addRecommendNav, payload)
            // console.log(res)
        },
        *delRecommendNav({ payload }, { call, put }) {
            let res = yield call(api.delRecommendNav, payload)
            // console.log(res)
        },
        *updateRecommendNav({ payload }, { call, put }) {
            let res = yield call(api.updateRecommendNav, payload)
            // console.log(res)
        },
    },
    reducers: {
        setList(state, action) {
            // console.log(action.payload);
            return {
                ...state,
                list: action.payload,
            }

        },
    }
}

export default LoginModel