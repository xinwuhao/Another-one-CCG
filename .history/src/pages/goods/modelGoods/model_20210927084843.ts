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
        getModel: Effect,
        delModel: Effect,
        updateModel: Effect,
        addModel: Effect,
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
        *getModel({ payload }, { call, put }) {
            let res = yield call(api.getModel, payload)
            // console.log(res)
            yield put({
                type: 'setTopics',
                payload: res.data
            })
            // }
        },
        *updateModel({ payload }, { call, put }) {
            let res = yield call(api.updateModel, payload)
            yield put({
                type: 'getModel',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        *addModel({ payload }, { call, put }) {
            let res = yield call(api.addModel, payload)
            // console.log(res)
            yield put({
                type: 'getModel',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        *delModel({ payload }, { call, put }) {
            let res = yield call(api.delModel, payload)
            // console.log(res)
            yield put({
                type: 'getModel',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
    },
    reducers: {
        setTopics(state, action) {
            // console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }
        },
    }
}

export default LoginModel