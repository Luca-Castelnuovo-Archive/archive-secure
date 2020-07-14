import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Server from 'config/API';

const Connect = ({ values, handleChange, nextStep }) => {
    const [loading, setLoading] = useState(false);

    const submit = () => {
        setLoading(true);

        if (!values.publicKey) {
            return;
        }

        // TODO: query api for the rsa key

        if (values.publicKey !== Server.publicKey) {
            localStorage.setItem('locked', true);
            window.location.reload();

            return;
        }

        sessionStorage.setItem('publicKey', values.publicKey);

        // let publicKey = sessionStorage.getItem('publicKey') || '';
        // if var empty log user out

        nextStep();
    };

    return (
        <Form size="large" onSubmit={submit} loading={loading}>
            <Segment>
                <Form.TextArea
                    required
                    placeholder="Server public key"
                    value={values.publicKey}
                    onChange={handleChange('publicKey')}
                />

                <Button color="teal" fluid size="large">
                    Connect
                </Button>
            </Segment>
        </Form>
    );
};

// TODO: prop-types

export default Connect;
