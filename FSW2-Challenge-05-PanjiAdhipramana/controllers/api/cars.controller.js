const Model = require('../../models');
function getAllCars(req, res) {
  Model.tbl_cars.findAll({include: 'image'}).then(function (cars) {
    res.json(cars);
  }).catch(function (err) {
    res.json(err);
  });
}

module.exports = {
    getAllCars
}