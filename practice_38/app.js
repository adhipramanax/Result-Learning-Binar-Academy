require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// const redoc = require("redoc");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.get("/docs/swagger.json", function (req, res) {
//   res.sendFile("./docs/swagger.json", { root: "public" });
// });

// app.get("/docs", redoc{
//     title: "API Documentation",
//     specUrl: "/api-docs/swagger.json",
// });

module.exports = app;
