import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface normsModelState {
    list: any[],
}
export interface normsModelType {
    namespace: 'norms'
    state: normsModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getSpec: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setList: Reducer<normsModelState>
    }
}
const LoginModel: normsModelType = {
    namespace: 'norms',
    state: {
        list: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取
        *getSpec({ payload }, { call, put }) {
            let res = yield call(api.getCategory, payload)
            // if (res.data.success) {
            yield put({
                type: 'setList',
                payload: res.data
            })
            // }
        },
    },
    reducers: {
        setList(state, action) {
            // console.log('555',action.payload);
            return {
                ...state,
                list: action.payload,
            }

        },
    }
}

export default LoginModel