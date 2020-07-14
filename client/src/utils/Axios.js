import axios from 'axios';
import Server from 'config/API';

const Axios = axios.create({
    baseURL: Server.endpoint,
    headers: {
        // 'Authorization:': `Bearer ${window.$access_token}`,
        'Content-type': 'application/json',
    },
});

// TODO: encrypt decrypt data
Axios.interceptors.request.use(
    (config) => {
        // perform a task before the request is sent
        console.log('Request was sent');

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response) => {
        console.log('Response received:', response.data);

        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default Axios;
