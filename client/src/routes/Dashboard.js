import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Header, Message, Segment, Button } from 'semantic-ui-react';
import Auth from 'services/Auth';

const Dashboard = () => {
    const history = useHistory();

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
                    {Auth.isLoggedin() ? (
                        <Message success header="Logged in" />
                    ) : (
                        <Message error header="Not logged in" />
                    )}

                    <Button
                        color="teal"
                        fluid
                        size="large"
                        onClick={() =>
                            Auth.logout().then(() => history.push('/'))
                        }
                    >
                        Logout
                    </Button>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default Dashboard;
