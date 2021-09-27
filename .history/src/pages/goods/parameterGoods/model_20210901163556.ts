import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface dataModelState {
    topics: any[],
}
export interface loginModelType {
    namespace: 'data'
    state: dataModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addParams: Effect
        getParams: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setData: Reducer<dataModelState>
    }
}
const LoginModel: loginModelType = {
    namespace: 'data',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //添加
        *addParams({ payload }, { call, put }) {
            let res = yield call(api.addParams, payload)
            console.log(res);
        },
        //获取数据
        *getParams({ payload }, { call, put }) {
            let res = yield call(api.getParams, payload)
            yield put({
                type: 'setData',
                payload: res.data
            })
        },
    },
    reducers: {
        setData(state, action) {
            // console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }

        },
    }
}

export default LoginModel