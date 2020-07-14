const setItem = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
};

const getItem = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
};

const removeItem = (name) => {
    sessionStorage.removeItem(name);
};

const removeAll = () => {
    sessionStorage.clear();
};

export default {
    setItem,
    getItem,
    removeItem,
    removeAll,
};
