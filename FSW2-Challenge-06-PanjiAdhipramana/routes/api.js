var express = require("express");
var router = express.Router();

const {
  createUser,
  updateUser,
  deleteUser,
  findUser,
  findAllUsers,
} = require("../controllers/user.controller");

const {
  addGallery,
  updateGallery,
  deleteGallery,
  showAllGallery,
  findOneGallery,
} = require("../controllers/galleries.controllers");

// create user
router.post("/create", createUser);
// update user
router.put("/update/:id", updateUser);
// delete user
router.delete("/delete/:id", deleteUser);
// find user by id
router.get("/find/:id", findUser);
// find all users
router.get("/findall", findAllUsers);

// add gallery
router.post("/add", addGallery);
// update gallery
router.put("/update/:id", updateGallery);
// delete gallery
router.delete("/delete/:id", deleteGallery);
// show all galleries
router.get("/showall", showAllGallery);
// find one gallery
router.get("/findone/:id", findOneGallery);

module.exports = router;
