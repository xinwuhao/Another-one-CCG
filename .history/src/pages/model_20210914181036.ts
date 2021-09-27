import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface homeModelState {
    topics: any[],
}
export interface loginModelType {
    namespace: 'home '
    state: homeModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getIndex: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        sethome: Reducer<homeModelState>
    }
}
const LoginModel: loginModelType = {
    namespace: 'home ',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取
        *getIndex({ payload }, { call, put }) {
            let res = yield call(api.getIndex, payload)
            // if (res.data.success) {
            yield put({
                type: 'sethome ',
                payload: res.data
            })
            // }
        },
    },
    reducers: {
        sethome(state, action) {
            // console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }

        },
    }
}

export default LoginModel