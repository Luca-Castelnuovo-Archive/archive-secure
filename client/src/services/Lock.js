import LocalStorage from 'utils/LocalStorage';
import SessionStorage from 'utils/SessionStorage';

const clear = () => {
    LocalStorage.removeAll();
    SessionStorage.removeAll();
};

const enable = () => {
    clear();

    LocalStorage.setItem('locked', true);
    window.location.reload();
};

const disable = () => {
    clear();

    LocalStorage.removeItem('locked');
    window.location.reload();
};

export default {
    enable,
    disable,
};
