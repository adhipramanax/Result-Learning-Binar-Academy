// import express JS
const express = require('express');
const { createUser } = require('./controllers/user.controller');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = 8000;

// route
app.post('/api/user/create', createUser)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 