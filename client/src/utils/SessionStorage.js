const setItem = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
};

const getItem = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
};

const removeItem = (name) => {
    return sessionStorage.removeItem(name);
};

export default {
    setItem,
    getItem,
    removeItem,
};
