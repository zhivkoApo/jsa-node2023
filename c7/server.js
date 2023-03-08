const http = require('http');

const server = http.createServer((req, res) => {
    console.log('test');
    console.log(req.url);
});

// server.listen(8080); // Serverot mozhe da bide pushten da slusha na porta i 
// vo server.js no togash so vkluchuvanje na server.js vo index.js vednash kje se
// pushti serverot
module.exports = server;