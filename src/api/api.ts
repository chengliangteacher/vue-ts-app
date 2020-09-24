import axios from "axios"
//=====================================自定义axios实例====================================//
const instance = axios.create({
    baseURL: "", // 公共url
    timeout: 1000, // 最大加载时间
    headers: "", // header
});
instance.interceptors.request.use((config: any) => {
    return config;
})

instance.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

export default instance;
