// import { Effect, Reducer } from 'umi'
// import { message } from 'antd';
// import api from '@/http/api'
// // 定义state的数据
// export interface specModelState {
//     topics: any[],
// }
// export interface specModelType {
//     namespace: 'spec'
//     state: specModelState
//     // 等同于vuex里面的action 用来发请求的
//     effects: {
//         getSpec: Effect,
//     },
//     // 等同于vuex里面的mutation
//     reducers: {
//         setTopics: Reducer<specModelState>
//     }
// }
// const LoginModel: specModelType = {
//     namespace: 'spec',
//     state: {
//         topics: [],
//     },
//     effects: {
//         // *等同于async
//         // payload请求传递的参数
//         //获取数据
//         *getSpec({ payload }, { call, put }) {
//             let res = yield call(api.getModel, payload)
//             console.log(res)
//             yield put({
//                 type: 'setTopics',
//                 payload: res.data
//             })
//             // }
//         },
//     },
//     reducers: {
//         setTopics(state, action) {
//             console.log(action.payload);
//             return {
//                 ...state,
//                 topics: action.payload,
//             }
//         },
//     }
// }

// export default LoginModel