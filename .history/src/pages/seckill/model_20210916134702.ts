import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface seckillModelState {
    topics: any[],
}
export interface seckillModelType {
    namespace: 'seckill'
    state: seckillModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addSeckill: Effect
        getSeckill: Effect
        delSeckill: Effect
        showSeckill: Effect
        updateSeckill: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setTopics: Reducer<seckillModelState>
    }
}
const LoginModel: seckillModelType = {
    namespace: 'seckill',
    state: {
        topics: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //添加
        *addSeckill({ payload }, { call, put }) {
            let res = yield call(api.addSeckill, payload)
            // console.log(res.data)
            yield put({
                type: 'getSeckill',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //获取数据
        *getSeckill({ payload }, { call, put }) {
            let res = yield call(api.getSeckill, payload)
            yield put({
                type: 'setTopics',
                payload: res.data.data
            })
        },
        //删除
        *delSeckill({ payload }, { call, put }) {
            let res = yield call(api.delSeckill, payload)
            console.log(res.data);
            yield put({
                type: 'getSeckill',
                payload: {
                    current: 1,
                    pageSize: 10,
                    query: ''
                }
            })
        },
        //显示
        *showSeckill({ payload }, { call, put }) {
            let res = yield call(api.showSeckill, payload)
            // console.log(res.data);

        },
        //修改
        *updateSeckill({ payload }, { call, put }) {
            let res = yield call(api.updateSeckill, payload)
            console.log(res.data);
            yield put({
                type: 'getSeckill',
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
            console.log(action.payload);
            return {
                ...state,
                topics: action.payload,
            }

        },
    }
}

export default LoginModel