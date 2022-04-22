const express = require('express');
const { getAllSize } = require('../controllers/api/size.controller');
const { getAllCars } = require('../controllers/api/cars.controller');

const router = express.Router();

router.get('/size', getAllSize);

router.get('/cars', getAllCars);

module.exports = router;
