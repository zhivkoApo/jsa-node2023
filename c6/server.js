const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('test server');
    console.log(req.url);
    if (req.url == '/wiki/Main_Page') {
        res.end('Ova e wikipedia main page');
    } else if (req.url == '/about') {
        // let data = fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err, data) => {
        //     if (err) return err;
        //     return data;
        // });
        // res.end(data);
        // res.writeHead(301, { Location: "http://facebook.com" });
        res.writeHead(200, {
            'Content-Type': 'text/html'
          })
        // res.writeHead(200, 'Status OK');
        res.end('<html><head><title>About</title></head><body><h1>Ova e about strana</h1></body></html>');
        // res.end('This page does not exist');
    } else {
        res.end('Ovaa strana ne postoi');
    }
});

console.log('Server is started...');
server.listen(8080);