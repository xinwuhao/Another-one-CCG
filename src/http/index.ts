import axios from 'axios'

const http = axios.create({
    timeout: 1000,
    baseURL: 'http://localhost:7001'
})
http.interceptors.request.use(
    (config: any) => {
        let token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);

export default http