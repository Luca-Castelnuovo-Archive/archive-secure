import React, { useState } from 'react';
import { Button, Form, Segment, Message } from 'semantic-ui-react';

const Auth = ({ values, handleChange, nextStep }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const submit = () => {
        setLoading(true);

        if (!values.email || !values.password || !values.yubikeyOtp) {
            return;
        }

        // send encrypted ajax request (all requests must be encrypted with the RSA key)
        // all recieving ajax requests must be validated with sessionstorage key

        setError(); // "Account deactivated", "Credentials Invalid"

        // nextStep();
    };

    return (
        <Form size="large" onSubmit={submit} loading={loading} error={error}>
            <Segment>
                <Message error header="Login Failed" content={error} />

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

// TODO: prop-types

export default Auth;
