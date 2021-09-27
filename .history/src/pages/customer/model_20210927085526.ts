import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface customerModelState {
    topics: any[],
}
export interface customerModelType {
    namespace: 'user'
    state: customerModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getUser: Effect,
        addUser: Effect,
        delUser: Effect,
        updateUser: Effect,
    },
    // 等同于vuex里面的mutation
    reducers: {
        setTopics: Reducer<customerModelState>
    }
}
const LoginModel: customerModelType = {
    namespace: 'user',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取数据
        *getUser({ payload }, { call, put }) {
            let res = yield call(api.getUser, payload)
            //   console.log(res)
            // if (res.data.success) {
            yield put({
                type: 'setTopics',
                payload: res.data
            })
            // }
        },
        //添加
        *addUser({ payload }, { call, put }) {
            let res = yield call(api.addUser, payload)
            yield put({
                type: 'getUser',
                payload:{
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //删除
        *delUser({ payload }, { call, put }) {
            let res = yield call(api.delUser, payload)
            //   console.log(res.data)
        },
        //编写
        *updateUser({ payload }, { call, put }) {
            let res = yield call(api.updateUser, payload)
            console.log(res.data)
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