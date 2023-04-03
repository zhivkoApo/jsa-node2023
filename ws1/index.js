const express = require('express');
const movies = require('./handlers/movies');
const db = require('./pkg/db');

db.init();

const app = express();
app.use(express.json());

app.get('/movies/:id', movies.getOne);
app.get('/movies', movies.getAll);
app.post('/movies', movies.create);
app.put('/movies/:id', movies.updateOne);
app.patch('/movies/:id', movies.partialUpdateOne);
app.delete('/movies/:id', movies.deleteOne);

app.listen(10000, err => {
    if (err) return console.log(err);

    console.log ('Successfully started server...');
});