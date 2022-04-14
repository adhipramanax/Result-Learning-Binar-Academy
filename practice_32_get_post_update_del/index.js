// utuk memanggil library / module express js
const express = require("express");
const {Books} = require("./resourse/book/book");

// initialisasi variabel bertipe express
const app = express();

app.use(express.json())
app.use(express.urlencoded())

// ini sialisasi port
const PORT = 3000;

app.get('/books', (req, res) => {
    const book = Books.list()
    res.status(200).json(book)
    });

// define route
app.post('/books', (req, res) => {
    const book = Books.create(req.body)
    res.status(200).json(book)
    });

app.get('/books/:title', (req, res) => {
    const book = Books.find(req.params.title)
    res.status(200).json(book)
    });

app.put('/books/:id', (req, res) => {
    const book = Books.update(req.params.id, req.body)
    res.status(200).json({
        message: "Success Update",
    })
    });
app.delete('/books/:id', (req, res) => {
    const book = Books.delete(req.params.id)
    res.status(200).json({
        message: "Success Delete",
    });
    });


// definisi listen server
app.listen(PORT, () => {
    console.log(`server running in port: ${PORT}`);
  });