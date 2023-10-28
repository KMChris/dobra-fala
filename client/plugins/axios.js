import axios from 'axios';

const URL = 'http://localhost:4000';

let token = sessionStorage.getItem('token');

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(response => {
    if (response.headers['x-token'])
        sessionStorage.setItem('token', response.headers['x-token']);
    return response;
});

export default ({ app }, inject) => {
  inject('http', axios)
}
