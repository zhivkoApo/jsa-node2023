require('dotenv').config();
const db = require('./pkg/db');
const express = require('express');
const jwt = require('express-jwt');
const posts = require('./handlers/posts');
const authors = require('./handlers/authors');

db.init();

const api = express();

api.use(express.json());
api.use(jwt.expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET
}));

api.get('/authors', authors.getAll);
api.get('/posts', posts.getAll);
api.get('/posts/me', posts.getMine);
api.get('/posts/:username', posts.getAuthors);

api.post('/posts', posts.create);
api.put('/posts/:id', posts.update);
api.delete('/posts/:id', posts.remove);

api.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log(`Successfully started server on port ${process.env.PORT}`);
});