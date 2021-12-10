import axios from 'axios';

export const BASE_API = "http://18.224.213.60:5000";

const api = axios.create ({
    baseURL: "http://18.224.213.60:5000",
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});

export default api;