const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());



app.get('/', handlers.home);
app.post('/home', handlers.home_post);
app.get('/calc/:operation', handlers.calculator_get);
app.post('/calc/:operation', handlers.calculator_post);
app.patch('/users', handlers.smeni_ime);

app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server successfully started...');
})

// Napishete API aplikacija so
// POST ruta kojashto kje se vika "/studenti"
// request body neka vi bide
// {
//     "ime": "Pero Perovski",
//     "prosek": 20
// }

// otkako handler funkcijata kje gi primi ovie podatoci
// zapishete gi vo fajl (fajlot neka se naogja
// vo tekovniot folder od proektot
// fajlot neka se vika studenti.json
// sekoj povik na ovaa ruta so razlichen student, da go dodava
// studentot vo fajlot a ne da pravi overwrite