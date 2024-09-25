// import axios
import axios from 'axios';

const api = axios.create({
    // set default endpoint api
    baseURL: 'http://localhost:8000'
})

export default api;