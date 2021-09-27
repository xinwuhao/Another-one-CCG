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
        addNav: Effect
        getNav: Effect
        delNav: Effect
        updateNav: Effect
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
        *addNav({ payload }, { call, put }) {
            let res = yield call(api.addNav, payload)
            // console.log(res);
            if (res.data.success) {
            }
        },
        //获取数据
        *getNav({ payload }, { call, put }) {
            let res = yield call(api.getNav, payload)
            // console.log(res.data);
            // if (res.data.success) {
            yield put({
                type: 'setData',
                payload: res.data
            })
            // }
        },
        //删除
        *delNav({ payload }, { call, put }) {
            let res = yield call(api.delNav, payload)
            // console.log(res.data);
            // if (res.data.success) {
            // }
        },
        //修改
        *updateNav({ payload }, { call, put }) {
            let res = yield call(api.updateNav, payload)
            console.log(res.data);
            // if (res.data.success) {
            // }
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