require('dotenv').config();
const express = require('express');
const mailer = require('./handlers/mailer');

const api = express();
api.use(express.json());

api.post('/api/v1/mailer/welcome', mailer.sendWelcome);
api.post('/api/v1/mailer/sendResetPassword', mailer.sendResetPassword);

api.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log(`Successfully started server on port ${process.env.PORT}`)
});

// 1. DOMASHNA:
// Da kreirate api koeshto kje ovozmozhuva kreiranje na user (sign up)
// logiranje na user (login)
// mozhnost za resetiranje password (forgot-password ruta i reset-password ruta)
// jwt aftentikacija
// mozhnost za uploadiranje na profile picture za toj user kojshto ste go kreirale
// mozhnost za downloadiranje na file (slika)

// 2. DOMASHNA
// Iskoristete go openweathermap api-to za da vlechete podatoci po longitude i latidute (koordinati na lokacijata)
// i da gi keshirate so vremenski interval od 2 minuti.

