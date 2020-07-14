const setItem = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
};

const getItem = (name) => {
    return JSON.parse(localStorage.getItem(name));
};

const removeItem = (name) => {
    localStorage.removeItem(name);
};

const removeAll = () => {
    localStorage.clear();
};

export default {
    setItem,
    getItem,
    removeItem,
    removeAll,
};
