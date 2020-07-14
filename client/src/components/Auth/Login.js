import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment, Message } from 'semantic-ui-react';

const Login = ({ error, values, handleChange }) => {
    return (
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
    );
};

Login.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Login;
