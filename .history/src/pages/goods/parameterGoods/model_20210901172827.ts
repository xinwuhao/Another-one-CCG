import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface parameterModelState {
    topics: any[],
}
export interface loginModelType {
    namespace: 'parameter'
    state: parameterModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addParams: Effect
        getParams: Effect
        delParams: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setData: Reducer<parameterModelState>
    }
}
const LoginModel: loginModelType = {
    namespace: 'parameter',
    state: {
        topics: [],
    },
    effects: {
        //添加
        *addParams({ payload }, { call, put }) {
            let res = yield call(api.addParams, payload)
            console.log(res);
        },
        *delParams({ payload }, { call, put }) {
            let res = yield call(api.addParams, payload)
            console.log(res);
        },
        //获取数据
        *getParams({ payload }, { call, put }) {
            let res = yield call(api.getParams, payload)
            console.log(res.data)
            yield put({
                type: 'setData',
                payload: res.data
            })
        },
    },
    reducers: {
        setData(state, action) {
            console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }

        },
    }
}

export default LoginModel