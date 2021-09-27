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
        home: Effect
        getBanner: Effect
        delBanner: Effect
        updateBanner: Effect
        showBanner: Effect
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
        //添加
        *home({ payload }, { call, put }) {
            let res = yield call(api.home, payload)
            if (res.data.success) {
            }
        },
        //获取
        *getBanner({ payload }, { call, put }) {
            let res = yield call(api.getBanner, payload)
            // if (res.data.success) {
            yield put({
                type: 'sethome ',
                payload: res.data
            })
            // }
        },
        //删除
        *delBanner({ payload }, { call, put }) {
            let res = yield call(api.delBanner, payload)
            // if (res.data.success) {
            // }
        },
        *updateBanner({ payload }, { call, put }) {
            let res = yield call(api.updateBanner, payload)
            // if (res.data.success) {
            // }
        },
        *showBanner({ payload }, { call, put }) {
            let res = yield call(api.showBanner, payload)
            // if (res.data.success) {
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