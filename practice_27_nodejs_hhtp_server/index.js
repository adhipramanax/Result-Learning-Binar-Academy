// memanggil modul HTTP
const http = require('http');
const path = require('path');
const fs = require('fs');

// mendefinisikan PORT yang menjadi tempat untuk menjalankan
const PORT = 3000;

// function yang akan di akses
function onRequest(req, res) {
// memagil file index.html berdasarkan alamat dari file html
  const indexHtml = path.join('./index.html');

// membaca file index.html
  const html = fs.readFileSync(indexHtml, 'utf8');

// menampilkan html sevagai respon page
  res.end(html);
}

// membuat server
const server = http.createServer(onRequest);

// menjalankan server
server.listen(PORT,'0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});