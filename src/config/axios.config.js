import axios from 'axios'
import qs from 'qs'
import GlobalConfig from './global.config'

const instance = axios.create({});
instance.defaults.baseURL = GlobalConfig.dev ? "http://localhost:61680" : "";
instance.defaults.transformRequest = [data => { return qs.stringify(data) }];
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.withCredentials = true;

// http请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// http响应拦截器
instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error.response.data)
    });

export default instance;

