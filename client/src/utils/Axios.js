import axios from 'axios';
import SuperTokensRequest from 'supertokens-website/axios';
import Server from 'config/API';
import Lock from 'services/Lock';

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
            return Lock.enable();
        }

        return response;
    },
    (error) => {
        if (
            error.response !== undefined &&
            error.response.status === 'SESSION_EXPIRED_STATUS_CODE'
        ) {
            // TODO: redirect to login
        }

        // Lock.enable();

        return Promise.reject(error.message);
    }
);

export default Axios;
