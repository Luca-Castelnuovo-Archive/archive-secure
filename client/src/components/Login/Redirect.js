import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Segment, Message } from 'semantic-ui-react';

const Auth = () => {
    const history = useHistory();

    useEffect(() => {
        history.push('/dashboard');
    }, [history]);

    return (
        <Form size="large" success={true}>
            <Segment>
                <Message
                    success
                    header="Login Successful"
                    content="You will be redirected in a few moments!"
                />
            </Segment>
        </Form>
    );
};

export default Auth;
