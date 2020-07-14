import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Form as FormUI, Segment, Message } from 'semantic-ui-react';
import Auth from 'services/Auth';

const Form = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
        yubikeyOtp: '',
    });

    const handleChange = (input) => (event) => {
        setValues({ ...values, [input]: event.target.value });
    };

    const submit = () => {
        setLoading(true);

        if (!values.email || !values.password || !values.yubikeyOtp) {
            return;
        }

        Auth.login(values).then((response) => {
            if (!response.data.success) {
                // "Account deactivated", "Credentials Invalid"
                return setError(response.data.message);
            }

            history.push('/dashboard');
        });
    };

    return (
        <FormUI size="large" onSubmit={submit} loading={loading} error={error}>
            <Segment>
                <Message error header="Login Failed" content={error} />

                <FormUI.Input
                    fluid
                    required
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    type="email"
                    icon="user"
                    iconPosition="left"
                />
                <FormUI.Input
                    fluid
                    required
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    type="password"
                    icon="lock"
                    iconPosition="left"
                />
                <FormUI.Input
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
        </FormUI>
    );
};

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default Form;
