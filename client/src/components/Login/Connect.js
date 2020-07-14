import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';
import LocalStorage from 'utils/LocalStorage';
import Auth from 'services/Auth';

const Connect = ({ values, handleChange, nextStep }) => {
    const [loading, setLoading] = useState(false);

    const submit = () => {
        setLoading(true);

        Auth.connect().then((response) => {
            if (response.data.locked) {
                LocalStorage.setItem('locked', true);
                window.location.reload();

                return;
            }

            nextStep();
        });
    };

    return (
        <Form size="large" onSubmit={submit} loading={loading}>
            <Segment>
                <Button color="teal" fluid size="large">
                    Connect to server
                </Button>
            </Segment>
        </Form>
    );
};

Connect.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default Connect;
