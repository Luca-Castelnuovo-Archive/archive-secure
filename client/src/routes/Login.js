import React, { useState } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import Connect from 'components/Login/Connect';
import Auth from 'components/Login/Auth';
import Redirect from 'components/Login/Redirect';

const Login = () => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        email: '',
        password: '',
        yubikeyOtp: '',
    });

    const handleChange = (input) => (event) => {
        setValues({ ...values, [input]: event.target.value });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Connect
                        values={values}
                        handleChange={handleChange}
                        nextStep={() => setStep(step + 1)}
                    />
                );

            case 2:
                return (
                    <Auth
                        values={values}
                        handleChange={handleChange}
                        nextStep={() => setStep(step + 1)}
                    />
                );

            case 3:
                return <Redirect />;

            default:
                return <h1>This isn't supposed to happen!</h1>;
        }
    };

    return (
        <Grid
            textAlign="center"
            style={{ height: '100vh' }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                    secure.lucacastelnuovo.nl
                </Header>
                {renderStep()}
            </Grid.Column>
        </Grid>
    );
};

export default Login;
