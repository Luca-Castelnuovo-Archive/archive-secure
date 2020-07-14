import Axios from 'utils/Axios';

const get = (id) => {
    return Axios.get(`/tutorials/${id}`);
};

const create = (data) => {
    return Axios.post('/tutorials', data);
};

const update = (id, data) => {
    return Axios.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
    return Axios.delete(`/tutorials/${id}`);
};

export default {
    get,
    create,
    update,
    remove,
};
