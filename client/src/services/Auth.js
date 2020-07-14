import Axios from 'utils/Axios';
import platform from 'platform';
import SuperTokensRequest from 'supertokens-website/axios';

const connect = () => {
    // TODO: mTLS, https://smallstep.com/hello-mtls/doc/combined/nginx/axios, https://codeburst.io/mutual-tls-authentication-mtls-de-mystified-11fa2a52e9cf

    SuperTokensRequest.init(
        'https://try.supertokens.io',
        440,
        'example.com',
        {}
    );

    return Axios.post('/auth/connect');
};

const isLoggedin = () => SuperTokensRequest.doesSessionExist();

const login = ({ email, password, yubikeyOtp }) => {
    return Axios.post('/auth/login', {
        email,
        password,
        yubikeyOtp,
        platform: `${platform.name} | ${platform.os}`,
    });
};

const logout = () => {
    return Axios.post('/auth/logout');
};

export default {
    connect,
    isLoggedin,
    login,
    logout,
};
