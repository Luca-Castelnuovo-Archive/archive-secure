const express = require('express');
const supertokens = require('supertokens-node');

const app = express();
const port = 3001;

supertokens.init({
    hosts: 'https://try.supertokens.io',
    // refreshAPIPath: '/auth/refresh',
    cookieDomain: 'localhost',
    // cookieSecure: false,
    cookieSameSite: 'lax',
    // apiKey: 'key',
});

//

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login', async (req, res) => {
    const userId = 'User1';
    const jwtPayload = { name: 'spooky action at a distance' };
    const sessionData = {
        awesomeThings: ['programming', 'javascript', 'supertokens'],
    };

    await supertokens.createNewSession(res, userId, jwtPayload, sessionData);

    res.send('logged in');
});

app.get('/refresh', supertokens.middleware(), (req, res) => {
    res.send('refresh done');
});

app.get('/dashboard', supertokens.middleware(), (req, res) => {
    const userId = req.session.getUserId();

    res.send(userId);
});

app.use('/logout', supertokens.middleware(), async (req, res) => {
    await req.session.revokeSession();

    res.send('loggoed out');
});

//

app.use(
    supertokens.errorHandler({
        onUnauthorised: (err, req, res, next) => {
            // logging.logError(err); // some logging module
            res.status(440).send('Please login again');
        },
        onTryRefreshToken: (err, req, res, next) => {
            res.status(440).send('Call the refresh API');
        },
        onTokenTheftDetected: async (sessionHandle, userId, req, res, next) => {
            res.status(440).send('You are being attacked');
            await supertokens.revokeSession(sessionHandle);
        },
    })
);

app.use((err, req, res, next) => {
    res.send(500).send(err);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
