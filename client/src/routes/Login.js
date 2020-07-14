import React, { useState, useEffect } from 'react';
import { Grid, Header, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import LoginForm from 'components/Auth/Login';
import AuthService from 'services/Auth';

const Login = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
        yubikeyOtp: '',
    });

    useEffect(() => {
        const connect = () => {
            AuthService.connect().then(() => setLoading(false));
        };

        connect();
    }, []);

    const login = () => {
        setLoading(true);

        if (!values.email || !values.password || !values.yubikeyOtp) {
            return;
        }

        AuthService.login(values)
            .then((response) => {
                if (!response.data.success) {
                    setError(response.data.message);
                }

                console.log('Login Success');
                // TODO: set application wide loggedin setting

                history.push(response.data.redirect_to ?? '/dashboard');
            })
            .catch((error) => {
                setLoading(false);
                setError('Unknown error occured!');
            });
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
                <Form
                    size="large"
                    onSubmit={login}
                    loading={loading}
                    error={error}
                >
                    <LoginForm
                        error={error}
                        values={values}
                        handleChange={(input) => (event) => {
                            setValues({
                                ...values,
                                [input]: event.target.value,
                            });
                        }}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Login;
