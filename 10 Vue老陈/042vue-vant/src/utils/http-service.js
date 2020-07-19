import axios from 'axios';
import api from '@/assets/config/api.js'

let http = axios.create({
    // baseURL: api.ApiRootUrl,
    timeout: 5000
});


http.interceptors.response.use(response => {
    if (response.status == 200) {
        if (response.data.errno == 0) {
            return response.data.data;
        } else {
            return Promise.reject(new Error(response.data.errno + ',' + response.data.errmsg));
        }
    } else {
        return Promise.reject(new Error(res.message || response.status))
    }
});


//—————————————————————请求接口———————————————————————

/**
 * 获取首页数据
 */
function getIndex() {
    return http.get(api.IndexUrl);
}



export default {
    getIndex
}