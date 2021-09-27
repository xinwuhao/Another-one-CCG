import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface addBannerModelState {
    topics: any[],
}
export interface loginModelType {
    namespace: 'addBanner'
    state: addBannerModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addBanner: Effect
        getBanner: Effect
        delBanner: Effect
        updateBanner: Effect
        showBanner: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setaddBanner: Reducer<addBannerModelState>
    }
}
const LoginModel: loginModelType = {
    namespace: 'addBanner',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //添加
        *addBanner({ payload }, { call, put }) {
            let res = yield call(api.addBanner, payload)
            if (res.data.success) {
            }
        },
        //获取
        *getBanner({ payload }, { call, put }) {
            let res = yield call(api.getBanner, payload)
            // if (res.data.success) {
            yield put({
                type: 'setaddBanner',
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
        setaddBanner(state, action) {
            // console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }

        },
    }
}

export default LoginModel