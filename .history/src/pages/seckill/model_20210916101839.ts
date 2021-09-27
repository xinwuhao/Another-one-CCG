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
        addNav: Effect
        getSeckill: Effect
        delNav: Effect
        updateNav: Effect
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
        *addNav({ payload }, { call, put }) {
            let res = yield call(api.addNav, payload)
            // console.log(res);
            if (res.data.success) {
            }
        },
        //获取数据
        *getSeckill({ payload }, { call, put }) {
            let res = yield call(api.getNav, payload)
            // if (res.data.success) {
            yield put({
                type: 'setTopics',
                payload: res.data
            })
            // }
        },
        //删除
        *delNav({ payload }, { call, put }) {
            let res = yield call(api.delNav, payload)
            console.log(res.data);
        },
        //修改
        *updateNav({ payload }, { call, put }) {
            let res = yield call(api.updateNav, payload)
            console.log(res.data);
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