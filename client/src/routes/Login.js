import React, { useState } from 'react';
import { Button, Form, Grid, Segment, Loader, Dimmer } from 'semantic-ui-react';

const Login = () => {
    const [loading, setLoading] = useState(false);

    const login = () => {
        setLoading(true);

        // Check if user provided RSA key matches the one in source code
        // If not show error "return <InvalidServer/>"
        // Save to sessionstorage for furhter use

        // send encrypted ajax request (all requests must be encrypted with the RSA key)
        // all recieving ajax requests must be validated with sessionstorage key
    };

    return (
        <Grid
            textAlign="center"
            style={{ height: '100vh' }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size="large">
                    <Segment>
                        <Dimmer active={loading} inverted>
                            <Loader size="large">Logging In</Loader>
                        </Dimmer>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Email"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />
                        <Form.Input
                            fluid
                            icon="key"
                            iconPosition="left"
                            placeholder="Yubikey OTP"
                            type="password"
                        />
                        <Form.TextArea fluid placeholder="Server public key" />

                        <Button color="teal" fluid size="large" onClick={login}>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Login;
