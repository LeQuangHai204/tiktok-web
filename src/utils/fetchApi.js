import axios from 'axios';

export default function fetchApi(method, url, data) {
    return axios[method.toLowerCase()](url, data);
}
