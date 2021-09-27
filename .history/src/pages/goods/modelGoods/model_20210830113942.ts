import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface ModelModelState {
    topics: any[],
}
export interface ModelModelType {
    namespace: 'Model'
    state: ModelModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addModel: Effect,
        getModel: Effect,
        delModel: Effect,
        updateModel: Effect,
    },
    // 等同于vuex里面的mutation
    reducers: {
        setTopics: Reducer<ModelModelState>
    }
}
const LoginModel: ModelModelType = {
    namespace: 'Model',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取数据
        *addModel({ payload }, { call, put }) {
            let res = yield call(api.addModel, payload)
            //   console.log(res)
        },
        *getModel({ payload }, { call, put }) {
            let res = yield call(api.getModel, payload)
            //   console.log(res)
            // if (res.data.success) {
            yield put({
                type: 'setTopics',
                payload: res.data
            })
            // }
        },
        //删除
        *delModel({ payload }, { call, put }) {
            let res = yield call(api.delModel, payload)
            //   console.log(res)
        },
        //编辑
        *updateModel({ payload }, { call, put }) {
            let res = yield call(api.updateModel, payload)
            //   console.log(res)
            // if (res.data.success) {
        },
    },
    reducers: {
        setTopics(state, action) {
            console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }
        },
    }
}

export default LoginModel