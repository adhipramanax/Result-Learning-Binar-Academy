const express = require('express');
const ejs = require('ejs');
const cors = require('cors');

// define Object Express
const app = express();

//import router
const webRouter = require('./../routes/web.router');
const apiRouter = require('./../routes/api.router');

// Activate CORS
app.use(cors());

// use Express JSON
app.use(express.json());

// use Express URL Encoded
app.use(express.urlencoded());
app.use(express.static('public'));

// Set EJS
app.set('view engine', 'ejs');

// define port
const PORT = 8081;

// define route
app.use('/', webRouter)
app.use('/api', apiRouter)

// define server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});