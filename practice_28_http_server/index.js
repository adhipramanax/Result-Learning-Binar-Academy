// memanggil modul HTTP
const http = require('http');
const path = require('path');
const fs = require('fs');
const { getHtml } = require('./getHtml.js');

// mendefinisikan PORT yang menjadi tempat untuk menjalankan
const PORT = 3000;

// function yang akan di akses
function onRequest(req, res) {
    switch (req.url) {
        case "/":
            res.end(getHtml('./index.html'));
            return;
        case "/profile":
            res.end(getHtml('profile.html'));
            return;
        case "/gallery":
            res.end(getHtml('gallery.html'));
            return;
        default:
            res.end(getHtml('404.html'));
            break;
    }
}

// membuat server
const server = http.createServer(onRequest);

// menjalankan server
server.listen(PORT,'0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});