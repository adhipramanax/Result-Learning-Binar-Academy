const model = require("../models");

const Car = model.tbl_galleries;

// add Car
async function addCar(req, res) {
  try {
    let addCar = await Car.create({
      name: req.body.name,
      url_image: req.body.url_image,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    if (!addCar) {
      res.status(404).json({
        message: "Car not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: addCar,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// update Car
async function updateCar(req, res) {
  try {
    let updateCar = await Car.update(
      {
        name: req.body.name,
        url_image: req.body.url_image,
        updatedAt: new Date(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateCar) {
      res.status(404).json({
        message: "Car not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: updateCar,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// delete Car
async function deleteCar(req, res) {
  try {
    let deleteCar = await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCar) {
      res.status(404).json({
        message: "Car not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: deleteCar,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// show all galleries
async function showAllCar(req, res) {
  try {
    let showAllCar = await Car.findAll();
    if (!showAllCar) {
      res.status(404).json({
        message: "Galleries not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: showAllCar,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// find one Car
async function findOneCar(req, res) {
  try {
    let findOneCar = await Car.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!findOneCar) {
      res.status(404).json({
        message: "Car not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: findOneCar,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

module.exports = {
  addCar,
  updateCar,
  deleteCar,
  showAllCar,
  findOneCar,
};
