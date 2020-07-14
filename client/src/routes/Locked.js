import React, { useState } from 'react';
import {
    Button,
    Grid,
    Header,
    Message,
    Segment,
    Confirm,
} from 'semantic-ui-react';
import LocalStorage from 'utils/LocalStorage';

const Locked = () => {
    const [open, setOpen] = useState(false);

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
                <Message
                    error
                    header="Application Locked"
                    list={[
                        'Secure connection could not be established',
                        'Connect using VPN, then click on Unlock',
                    ]}
                />
                <Segment>
                    <Button
                        color="teal"
                        fluid
                        size="large"
                        onClick={() => setOpen(true)}
                    >
                        Unlock
                    </Button>
                    <Confirm
                        open={open}
                        size="mini"
                        header="Are you sure, you want to unlock?"
                        content="Failing to make sure your connection is secure could lead to data theft!"
                        onCancel={() => setOpen(false)}
                        onConfirm={() => {
                            LocalStorage.removeItem('locked');
                            window.location.reload();
                        }}
                    />
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default Locked;
