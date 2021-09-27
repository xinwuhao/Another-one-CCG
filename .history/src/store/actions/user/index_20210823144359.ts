import api from "../../../http/api"
import { Dispatch } from 'redux'

//登录
export const postLogin = ({ username, password }: { username: string, password: string }) => {
  return () => {
    // 发请求
    api.postLogin({ username, password }).then((res: any) => {
      // console.log(res)
      // 触发reducer的方法
      if (res.data.code === 200) {
        localStorage.setItem('token', res.data.data.token)
      } else {
        console.log(res.data.data.msg)
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }
}

