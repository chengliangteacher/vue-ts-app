/* eslint-disable no-unused-vars */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
//=====================================自定义axios实例====================================//
const instance = axios.create({
    baseURL: "", // 公共url
    timeout: 1000, // 最大加载时间
    headers: "", // header
});
instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
})

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)

export default instance;
