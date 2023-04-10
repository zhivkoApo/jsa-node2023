require('dotenv').config();
const express = require('express');
const auth = require('./handlers/auth');
const { expressjwt: jwt } = require('express-jwt');
const db = require('./pkg/db');
const userModel = require('./pkg/user');
const config = require('./pkg/config');

db.init();

const api = express();

api.use(express.json());
// use jwt
api.use(jwt({
    algorithms: ['HS256'],
    // secret: process.env.JWT_SECRET
    secret: config.get('settings').jwt_secret
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
api.get('/api/v1/profile', async (req, res) => {
    try {
        // nekoja biznis logika
        let user = null;
        user = await userModel.getUserByEmail(req.body.email);
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server error');
    }
})

// api.use(function (err, req, res, next) {
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).send('Invalid token');
//     } else {
//         next()
//     }
// });

api.listen(config.get('settings').server_port, err => {
    if (err) return console.log(err);

    console.log(`Server successfully started at port: ${config.get('settings').server_port}...`);
});