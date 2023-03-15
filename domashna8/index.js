const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());

app.get('/studenti', handlers.get_students);
app.post('/studenti', handlers.post_students);
app.delete('/studenti/:id', handlers.delete_student);
app.put('/studenti/:id', handlers.update_student);

app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server successfully started...');
})