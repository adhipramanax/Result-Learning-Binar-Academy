// import express JS
const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = 8070;

app.use(express.static('public'));

// route
app.get('/', (req, res) => {
    ejs.renderFile('./views/index.ejs', {nama:"panji"}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/addCars', (req, res) => {
    ejs.renderFile('./views/addCars.ejs', {}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/updateCars', (req, res) => {
    ejs.renderFile('./views/updateCars.ejs', {}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 