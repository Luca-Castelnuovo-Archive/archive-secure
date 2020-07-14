import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocalStorage from 'utils/LocalStorage';

import Login from 'routes/Login';
import Dashboard from 'routes/Dashboard';
import NotFound from 'routes/NotFound';
import Locked from 'routes/Locked';

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    if (LocalStorage.getItem('locked')) {
        return <Locked />;
    }

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
