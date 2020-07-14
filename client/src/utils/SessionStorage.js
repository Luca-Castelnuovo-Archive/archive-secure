const setItem = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
};

const getItem = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
};

export default {
    setItem,
    getItem,
};
