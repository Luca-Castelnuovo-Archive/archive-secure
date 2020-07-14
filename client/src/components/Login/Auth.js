import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment, Message } from 'semantic-ui-react';
import AuthService from 'services/Auth';

const Auth = ({ values, handleChange, nextStep }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const submit = () => {
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

                nextStep();
            })
            .catch((error) => {
                setLoading(false);
                setError('Unknown error occured!');
            });
    };

    return (
        <Form size="large" onSubmit={submit} loading={loading} error={error}>
            <Message error header="Login Failed" content={error} />

            <Segment>
                <Form.Input
                    fluid
                    required
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    type="email"
                    icon="user"
                    iconPosition="left"
                />
                <Form.Input
                    fluid
                    required
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    type="password"
                    icon="lock"
                    iconPosition="left"
                />
                <Form.Input
                    fluid
                    required
                    placeholder="Yubikey OTP"
                    value={values.yubikeyOtp}
                    onChange={handleChange('yubikeyOtp')}
                    type="password"
                    icon="key"
                    iconPosition="left"
                />

                <Button color="teal" fluid size="large">
                    Login
                </Button>
            </Segment>
        </Form>
    );
};

Auth.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default Auth;
