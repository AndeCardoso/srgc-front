import axios from 'axios';

export const BASE_API = "https://api.hotelkolman.com";

const api = axios.create ({
    baseURL: "https://api.hotelkolman.com",
});

export default api;