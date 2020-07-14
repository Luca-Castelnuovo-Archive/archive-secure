import axios from 'axios';
import SuperTokensRequest from 'supertokens-website/axios';
import Server from 'config/API';
import LocalStorage from 'utils/LocalStorage';

const Axios = axios.create({
    baseURL: Server.endpoint,
    headers: {
        'Content-type': 'application/json',
    },
});

SuperTokensRequest.makeSuper(Axios);

Axios.interceptors.response.use(
    (response) => {
        if (response.data.locked) {
            LocalStorage.setItem('locked', true);
            window.location.reload();

            return;
        }

        return response;
    },
    (error) => {
        LocalStorage.setItem('locked', true);
        window.location.reload();

        return Promise.reject(error.message);
    }
);

export default Axios;
