import Axios from 'utils/Axios';
import LocalStorage from 'utils/LocalStorage';

const connect = () => {
    // TODO: mTLS, https://smallstep.com/hello-mtls/doc/combined/nginx/axios, https://codeburst.io/mutual-tls-authentication-mtls-de-mystified-11fa2a52e9cf

    return Axios.post('/auth/connect')
        .then((response) => {
            if (response.data.locked) {
                LocalStorage.setItem('locked', true);
                window.location.reload();

                return;
            }
        })
        .catch((error) => {
            LocalStorage.setItem('locked', true);
            window.location.reload();
        });
};

const login = ({ email, password, yubikeyOtp }) => {
    return Axios.post('/auth/login', { email, password, yubikeyOtp });
};

export default {
    connect,
    login,
};
