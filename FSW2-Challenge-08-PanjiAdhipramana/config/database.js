const dotenv = require("dotenv");

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME = "bcr",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
};

// // const { Pool } = require("pg");

// const {
//   DB_USER = "",
//   DB_PASSWORD = "",
//   DB_NAME = "bcr",
//   DB_HOST = "127.0.0.1",
//   DB_PORT = "5432",
// } = process.env;

// // const pool = new Pool({
// //   user: DB_USER,
// //   password: DB_PASSWORD,
// //   database: DB_NAME,
// //   host: DB_HOST,
// //   port: DB_PORT,
// //   ssl: {
// //     rejectUnauthorized: false,
// //   },
// // });

// module.exports = {
//   // pool,
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//   },
//   test: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//   },
//   production: {
//     username: DB_USER,
//     password: DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//   },
// };
