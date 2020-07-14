import Axios from 'utils/Axios';

const connect = ({ publicKey }) => {
    return Axios.post(
        'https://run.mocky.io/v3/ba2a669f-971d-44ee-9d59-7bf3d79b1fef',
        { publicKey }
    );
};

const login = ({ email, password }) => {
    return Axios.post('/auth/publickey', { email, password });
};

export default {
    connect,
    login,
};
