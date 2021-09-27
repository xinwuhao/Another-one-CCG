import axios from 'axios'

const http = axios.create({
    timeout: 1000,
    baseURL: 'http://localhost:7001'
})
http.interceptors.request.use(
    (config: any) => {
        // 验证用户身份
        // token: 令牌
        // 在登录成功之后后端签发令牌
        // 每一次发请求的时候 加上这个令牌
        const token = localStorage.getItem("token");
        if (token) {
            // headers属性是后端约定的
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (err: any) => {
        return Promise.reject(err);
        
    }
);

export default http