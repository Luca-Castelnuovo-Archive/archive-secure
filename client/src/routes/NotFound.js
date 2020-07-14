import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Header, Message, Segment } from 'semantic-ui-react';

const NotFound = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
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
                <Segment>
                    <Message info size="huge" header="Page not found!" />

                    <Button
                        color="teal"
                        fluid
                        size="large"
                        onClick={() => handleClick()}
                    >
                        Go Home
                    </Button>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default NotFound;
