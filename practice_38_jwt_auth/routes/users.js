var express = require("express");
const app = require("../app");
const {
  registerUser,
  authUser,
  getAllUser,
} = require("../controllers/user.controller");
const authJWT = require("../middlewares/jwtauthenticate");
var router = express.Router();

/* GET users listing. */
router.get("/", authJWT, getAllUser);
router.post("/register", registerUser);
router.post("/auth", authUser);

module.exports = router;
