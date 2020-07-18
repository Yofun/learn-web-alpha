import axios from 'axios';


const server = axios.create({
    baseURL: 'https://gank.io/',
    // withCredentials: true,
    timeout: 5000
});


export default server;