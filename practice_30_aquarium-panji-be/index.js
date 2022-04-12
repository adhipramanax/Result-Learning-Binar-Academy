// utuk memanggil library / module express js
const express = require("express");

// initialisasi variabel bertipe express
const app = express();

// ini sialisasi port
const PORT = 8080;

// route
app.get("/api/v1/aquarium", (req, res) => {
  res.send("List of aquarium");
});

app.post("/api/v1/login", (req, res) => {
    let data = req.body;
    if ((data.username == "admin") && (data.password == "admin")) {
        res.send("Login Success");
    } else {
        res.send("Login Failed");
    }
});

// definisi listen server
app.listen(PORT, () => {
  console.log(`server running in port: ${PORT}`);
});
