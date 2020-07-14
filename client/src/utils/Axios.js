import axios from 'axios';
import Server from 'config/API';

const Axios = axios.create({
    baseURL: Server.endpoint,
    headers: {
        // 'Authorization:': `Bearer ${window.$access_token}`,
        'Content-type': 'application/json',
    },
});

export default Axios;
