import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface goodsSortModelState {
    list: any[],
}
export interface goodsSortModelType {
    namespace: 'sort'
    state: goodsSortModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getCategory: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setList: Reducer<goodsSortModelState>
    }
}
const LoginModel: goodsSortModelType = {
    namespace: 'sort',
    state: {
        list: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取
        *getCategory({ payload }, { call, put }) {
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
            // console.log(action.payload);
            return {
                ...state,
                list: action.payload,
            }

        },
    }
}

export default LoginModel