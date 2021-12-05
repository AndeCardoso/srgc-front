import axios from 'axios';

export const BASE_API = "http://18.224.213.60:5000";

const api = axios.create ({
    baseURL: BASE_API,
});

export default api;