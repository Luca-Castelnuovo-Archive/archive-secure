import Axios from 'utils/Axios';

const connect = () => {
    // TODO: mTLS, https://smallstep.com/hello-mtls/doc/combined/nginx/axios, https://codeburst.io/mutual-tls-authentication-mtls-de-mystified-11fa2a52e9cf

    return Axios.post('/auth/connect');
};

const login = ({ email, password, yubikeyOtp }) => {
    return Axios.post('/auth/login', { email, password, yubikeyOtp });
};

export default {
    connect,
    login,
};
