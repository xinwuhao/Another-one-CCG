import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface loginModelState {
    topics: any[],
}
export interface loginModelType {
    namespace: 'notice'
    state: loginModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addNotice: Effect,
        getNotice: Effect,
        showNotice: Effect,
        delNotice: Effect,
        updateNotice: Effect,
    },
    // 等同于vuex里面的mutation
    reducers: {
        setTopics: Reducer<loginModelState>
    }
}
const LoginModel: loginModelType = {
    namespace: 'notice',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取数据
        *getNotice({ payload }, { call, put }) {
            let res = yield call(api.getNotice, payload)
            yield put({
                type: 'setTopics',
                payload: res.data
            })
        },
        //添加
        *addNotice({ payload }, { call, put }) {
            let res = yield call(api.addNotice, payload)
            yield put({
                type: 'getNotice',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //显示
        *showNotice({ payload }, { call, put }) {
            let res = yield call(api.showNotice, payload)
            yield put({
                type: 'getNotice',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //删除
        *delNotice({ payload }, { call, put }) {
            let res = yield call(api.delNotice, payload)
            //   console.log(res)
            //  if (res.data.success) {
            //     }
        },
        //编辑
        *updateNotice({ payload }, { call, put }) {
            let res = yield call(api.updateNotice, payload)
            //   console.log(res)
            //  if (res.data.success) {
            //     }
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