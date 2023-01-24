// console.log("Implement servermu disini yak 😝!");

const http = require ('http');
const url = require('url')
const {PORT = 3000} = process.env; //set port

const fs = require ('fs');
const path = require ('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

// handel render HTML
function renderHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8');
}

// request handler
function onRequest(req, res){
    let url_parts = url.parse(req.url);
    let pathname = url_parts.pathname;

    switch (pathname) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(renderHTML('index.html'));
            break;
        case '/cars':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(renderHTML('cars.html'));
            break;
        default :
            // if ((req.url.indexOf('.css') > -1) || (req.url.indexOf('.js') > -1) || (req.url.indexOf('.png') > -1) || (req.url.indexOf('.jpg') > -1) || (req.url.indexOf('.ico') > -1)) {
            if (!(req.url.indexOf('.html') > -1)) {
                const filePath = path.join(PUBLIC_DIRECTORY, req.url);
                fs.readFile(filePath, (err, data) => {
                    res.end(data);
                    res.end();
                });
            }else{
                res.writeHead(404);  
                res.end('404 Not Found')
            }
    }
}

// membuat server
const server = http.createServer(onRequest);

// menjalankan server
server.listen(PORT,'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});