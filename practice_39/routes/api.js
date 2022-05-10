var express = require("express");
var router = express.Router();

const {
  getInvitations,
  getAllInvitations,
  createInvitation,
  updateInvitation,
  deleteInvitation,
} = require("../controllers/invitation.controller");

const {
  createGreetings,
  getAllGreetings,
} = require("../controllers/greetings.controllers");

const {
  getAllGallery,
  addGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/gallery.controllers");

const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controllers/user.controllers");

// create greetings
router.post("/v1/greethings", createGreetings);
// get all greetings
router.get("/v1/greethings", getAllGreetings);

// Get ivitation by id
router.get("/v1/invitations/:id", getInvitations);
// Get all invitations
router.get("/v1/invitations", getAllInvitations);
// Create invitation
router.post("/v1/invitations", createInvitation);
// Update invitation
router.put("/v1/invitations/:id", updateInvitation);
// Delete invitation
router.delete("/v1/invitations/:id", deleteInvitation);

// Get all gallery
router.get("/v1/galleries/:id", getAllGallery);
// Add photo gallery
router.post("/v1/galleries", addGallery);
// Update gallery
router.put("/v1/galleries/:id", updateGallery);
// Delete gallery
router.delete("/v1/galleries/:id", deleteGallery);

// get user by id
router.get("/v1/users/:id", getUser);
// get all users
router.get("/v1/users", getAllUsers);
// create user
router.post("/v1/users", createUser);
// update user
router.put("/v1/users/:id", updateUser);
// delete user
router.delete("/v1/users/:id", deleteUser);

module.exports = router;
