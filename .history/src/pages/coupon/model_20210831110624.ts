import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface couponModelState {
    list: any[],
}
export interface couponModelType {
    namespace: 'coupon'
    state: couponModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        addCoupon: Effect
        getCoupon: Effect
        delCoupon: Effect
        showCoupon: Effect
        updateCoupon: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setList: Reducer<couponModelState>
    }
}
const LoginModel: couponModelType = {
    namespace: 'coupon',
    state: {
        list: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //添加
        *addCoupon({ payload }, { call, put }) {
            let res = yield call(api.addCoupon, payload)
        },
        //删除
        *delCoupon({ payload }, { call, put }) {
            let res = yield call(api.delCoupon, payload)
        },
        //显示
        *showCoupon({ payload }, { call, put }) {
            let res = yield call(api.showCoupon, payload)
            // console.log(res.data)
        },
        *updateCoupon({ payload }, { call, put }) {
            let res = yield call(api.updateCoupon, payload)
            // console.log(res.data)
        },
        //获取
        *getCoupon({ payload }, { call, put }) {
            let res = yield call(api.getCoupon, payload)
            // if (res.data.success) {
            yield put({
                type: 'setList',
                payload: res.data
            })
            // }
        },

    },
    reducers: {
        setList(state, action) {
            // console.log(action.payload);
            return {
                ...state,
                list: action.payload,
            }

        },
    }
}

export default LoginModel