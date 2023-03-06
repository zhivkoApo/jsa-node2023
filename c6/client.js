// Treba da instalirate postara verzija na node-fetch ako imate postara verzija na nodejs (<18.0)
// npm install node-fetch@2
// togash kje raboti "var fetch = require('node-fetch');"
// ako imate ponova verzija od nodejs togash kodot za import e
// import fetch from 'node-fetch'

var fetch = require('node-fetch');
(async () => {
    try {
        let response = await fetch('https://wikipedia.org');
        let wikipediaContent = await response.text();
        console.log(wikipediaContent);
    } catch (err) {
        console.log(err);
    }
})();