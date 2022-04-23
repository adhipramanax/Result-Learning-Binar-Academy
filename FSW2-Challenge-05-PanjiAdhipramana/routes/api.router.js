const express = require('express');
const { getAllSize } = require('../controllers/api/size.controller');
const { getAllCars, newCars, updateCars, deleteCars, showCar } = require('../controllers/api/cars.controller');

const { route } = require('./web.router');

const router = express.Router();

// Plan routes
// GET /size - Get all sizes
// GET /cars - Get all cars
// POST /cars - Create new car
// POST /cars/:id - Update car
// DELETE /cars/:id - Delete car

router.get('/size', getAllSize);
router.get('/cars', getAllCars);
router.post('/cars', newCars);
router.get('/cars/:id', showCar);
router.put('/cars/:id', updateCars);
router.delete('/cars/:id', deleteCars); // /api/cars/2

module.exports = router;
