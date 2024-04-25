import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_F8_BASE_URL,
    timeout: 5000,

    validateStatus: (status) => status >= 200 && status < 300,
});

export default api;
