import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '511e3a3c847644e4a94f8cf0ad94edf5'
    }
})