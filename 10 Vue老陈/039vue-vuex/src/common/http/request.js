import axios from 'axios';


export default axios.create({
    baseURL: 'https://gank.io/api/v2',
    // withCredentials
    timeout: 5000
})