const express = require("express");
const { index, deleteCar } = require("../controllers/web/index.controller");
const {
  create,
  handleCreateForm,
} = require("../controllers/web/create.controller");
const {
  update,
  handleUpdate,
} = require("../controllers/web/update.controller");
const router = express.Router();

router.get("/", index);
router.get("/create", create);
router.get("/update/:id", update);
router.post("/update/:id", handleUpdate);
router.post("/create", handleCreateForm);
router.post("/delete/:id", deleteCar);

module.exports = router;
