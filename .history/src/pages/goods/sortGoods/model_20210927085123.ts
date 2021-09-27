import { Effect, Reducer } from 'umi'
import { message } from 'antd';
import api from '@/http/api'
// 定义state的数据
export interface goodsSortModelState {
    list: any[],
}
export interface goodsSortModelType {
    namespace: 'sort'
    state: goodsSortModelState
    // 等同于vuex里面的action 用来发请求的
    effects: {
        getCategory: Effect
        addCategory: Effect
        addSecondCategory: Effect
        delCategory: Effect
    },
    // 等同于vuex里面的mutation
    reducers: {
        setList: Reducer<goodsSortModelState>
    }
}
const LoginModel: goodsSortModelType = {
    namespace: 'sort',
    state: {
        list: [],
    },
    effects: {
        // *等同于async
        // payload请求传递的参数
        //获取
        *getCategory({ payload }, { call, put }) {
            let res = yield call(api.getCategory, payload)
            let arr = [] as any
            res.data.data.map((item: any, index: number) => {
                return arr.push({
                    title: item['name'],
                    key: item['_id'],
                    isShow: item.isShow,
                    children: item['list'].map((item1: any, index1: number) => {
                        return {
                            title: item1['name'],
                            key: item1['_id'],
                            isLeaf: true,
                            isShow: item.isShow,
                        }
                    })
                })
            })
            // if (res.data.success) {
            yield put({
                type: 'setList',
                payload: arr
            })
            // }
        },
        //一级分类
        *addCategory({ payload }, { call, put }) {
            let res = yield call(api.addCategory, payload)
            yield put({
                type: 'getCategory',
                payload:''
            })
        },
        //二级分类
        *addSecondCategory({ payload }, { call, put }) {
            let res = yield call(api.addSecondCategory, payload)
            console.log(res)
        },
        //删除
        *delCategory({ payload }, { call, put }) {
            let res = yield call(api.delCategory, payload)
            // console.log(res.data);
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