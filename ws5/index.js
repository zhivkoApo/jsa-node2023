require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const jwt = require('express-jwt');
const storage = require('./handlers/storage');
const db = require('./pkg/db');

const api = express();

db.init();

api.use(fileUpload());
api.use(jwt.expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET
}));

// api.post('/api/v1/storage/:user_id', storage.upload);
api.post('/api/v1/storage/:user_id', storage.uploadProfilePicture);
// api.get('/api/v1/storage/:file', storage.download);
api.get('/api/v1/user/:id/profile_picture', storage.downloadProfilePicture);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
    } else {
        next()
    }
});

api.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log(`Successfully started server on port ${process.env.PORT}`);
});