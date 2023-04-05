const express = require('express');
const auth = require('./handlers/auth');
const { expressjwt: jwt } = require('express-jwt');
const db = require('./pkg/db');

db.init();

const api = express();

api.use(express.json());
// use jwt
api.use(jwt({
    algorithms: ['HS256'],
    secret: 'zhivko123'
}).unless({
    path: [
        '/api/v1/auth/sign-up',
        '/api/v1/auth/login',
        '/api/v1/auth/forgot-password',
        '/api/v1/auth/reset-password'
    ]
}));

api.post('/api/v1/auth/sign-up', auth.signUp);
api.post('/api/v1/auth/login', auth.login);
// api.post('/api/v1/auth/forgot-password', auth.forgotPassword);
// api.post('/api/v1/auth/reset-password', auth.resetPassword);
api.get('/api/v1/profile', (req, res) => {
    try {
        // nekoja biznis logika
        res.status(200).send('OK');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server error');
    }
})

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
    } else {
        next()
    }
});

api.listen(10000, err => {
    if (err) return console.log(err);

    console.log('Server successfully started...');
});