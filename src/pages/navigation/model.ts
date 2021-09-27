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
            yield put({
                type: 'getNav',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //获取数据
        *getNav({ payload }, { call, put }) {
            let res = yield call(api.getNav, payload)
            yield put({
                type: 'setData',
                payload: res.data
            })
        },
        //删除
        *delNav({ payload }, { call, put }) {
            let res = yield call(api.delNav, payload)
            yield put({
                type: 'getNav',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //修改
        *updateNav({ payload }, { call, put }) {
            let res = yield call(api.updateNav, payload)
            yield put({
                type: 'getNav',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
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