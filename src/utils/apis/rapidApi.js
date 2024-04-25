import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_X_RAPID_BASE_URL,
    timeout: 5000,

    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST,
    },

    validateStatus: (status) => status >= 200 && status < 300,
});

export default api;
