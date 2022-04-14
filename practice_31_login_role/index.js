// import express
const express = require('express');
const {getAllUsers, findUsers, getUser} = require('./users');
const {login} = require('./login');

// define express in variabele
const app = express();

// define port
const port = 3010;

// define use middleware
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

function isAdmin(req,res,next) {
  if (req.header ("role") === 'admin') {
    next();
  } else {
    res.status(401).json({
      message: 'Unauthorized'
    });
  }
}

function click() {
    console.log("Clicked");
}

app.get('/',
    (req,res) => {
        res.render('index', {
            name: 'John Doe'
        })

    }
)
// define routes

// login route
app.post('/api/v1/login', login);

// Get all users routes
app.get('/api/v1/users', isAdmin, getAllUsers);

// find user
app.get('/api/v1/users/find', findUsers); 

// user by id
app.get('/api/v1/user/:id', getUser);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
