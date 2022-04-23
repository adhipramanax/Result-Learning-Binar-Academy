const Model = require('../../models');
const Car = Model.tbl_cars;

// const getAllCars = async (req, res) => {
//   const cars = await models.tbl_cars.findAll({})

//   res.status(200).json({
//       message: "get all cars success",
//       data: cars
//   })
// }

function getAllCars(req, res) {
  Car.findAll()
    .then(function (cars) {
      res.json(cars);
    }).catch(function (err) {
      res.json(err);
    });
}

function newCars(req, res) {
  try {
    let carReq = req.body;

    let car = {
      name: carReq.name,
      harga: carReq.harga,
      url_image: carReq.url_image,
      id_size: carReq.id_size,
      createdAt:new Date(),
      updatedAt:new Date()
    }

    Car.create(car).then((data) => {
      res.status(200).json({
        message: 'Success',
        data: car
    })
    }).catch((error) => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
} 

async function showCar(req, res) {
  try {
    let id = req.params.id;
    let car = await Car.findOne({
      where: {
        id: id
      }
    });
    res.status(200).json({
      message: 'Success',
      data: car
    })
  } catch (error) {
    console.log(error);
  }
}

function updateCars(req, res ) {
    try {
      let carReq = req.body;
      let id = req.params.id;

      let car = {
        name: carReq.name,
        harga: carReq.harga,
        url_image: carReq.url_image,
        id_size: carReq.id_size,
        createdAt:new Date(),
        updatedAt:new Date()
    }

    Car.update(car, {where: {id: id}}).then((data) => {
      res.status(200).json({
        message: 'Success',
        data: car
    })
    }).catch((error) => {
        console.log(error);
    })
  } catch (error) {
    console.log(error);
  }

}

function deleteCars(req, res) {
  try {
    let id = req.params.id;
    Car.destroy({
      where: {
        id: id
      }
    }).then((data) => {
      res.status(200).json({
        message: 'Success',
        data: data
    })
    }).catch((error) => {
        console.log(error);
      })
  } catch (error) {
    console.log(error);
  }
}


// One to one ada dua normalisasi
// 1. Normalisasi dengan menjadikannya kolom (atribut) (properti)
// 2. Dengan cara membuat tabel yang baru

// One to many ada satu normalisasi
// 1. Normalisasi dengan membuat tabel baru

// Many to many ada satu normalisasi
// 1. Bikin tabel baru yang bertujuan untuk menyatukan 2 tabel yang lain

// Car -> Image (One to one)
// - Kamu bikin tabel baru
// - Jadikan kolom yang baru

// Car -> Image (One to many) (1 cars memiliki banyak image) foreign key itu ditaruh di image
// 1. Bikin tabel cars
// 2. Bikin tabel image dengan car_id

// Car -> Image (Many to many) (1 image memiliki banyak cars, dan 1 car memiliki banyak image)
// 1. Bikin tabel cars
// 2. Bikin tabel image
// 3. Bikin tabel cars_image dengan foreign key cars_id dan image_id

// Mobil -> Warna (Many to many) (1 mobil memiliki banyak warna, dan 1 warna memiliki banyak mobil)
// 1. Bikin tabel mobil
// 2. Bikin tabel warna
// 3. Bikin tabel mobil_warna dengan foreign key mobil_id dan warna_id

module.exports = {
    getAllCars,
    newCars,
    showCar,
    updateCars,
    deleteCars
}