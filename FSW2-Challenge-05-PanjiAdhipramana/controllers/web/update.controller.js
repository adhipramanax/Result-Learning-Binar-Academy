const Model = require("../../models");
const Car = Model.tbl_cars;
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

// TODO: Kurang delete sama edit
// TODO: link refrensi https://gitlab.com/binar.rekaa31/example-structure-express-ejs

async function update(req, res) {
  const { id } = req.params;
  try {
    const data = await Car.findOne({
      where: {
        id: id,
      },
    });
    res.render("../views/updateCars.ejs", data.dataValues);
  } catch (error) {
    // error Khusus browser komputer karena Roboto-Regular.ttf
    console.log("Error: ", error.message);
    res.status(404).json({
      message: error.message,
    });
  }
}

async function handleUpdate(req, res) {
  // Mendapatkan data dan id dari form
  const { id } = req.params;
  const { name, harga, ukuran, url_image } = req.body;
  const image = req.files != undefined ? req.files.url_image : null;
  let fullNameImage = await Car.findOne({
    where: {
      id: id,
    },
  });
  fullNameImage = fullNameImage.dataValues.url_image;

  // Cek apakah image ada atau tidak, jika kosong di upload ke dalam folder image
  if (image) {
    const randomId = uuidv4();
    const fileExt = image.name.split(".").pop();
    fullNameImage = randomId + "." + fileExt;
    image.mv(`./public/images/${fullNameImage}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
    fullNameImage = `http://localhost:8081/images/${fullNameImage}`;
  }

  // Request ke API menggunakan axios berdasarkan id
  axios
    .put(`http://localhost:8081/api/cars/${id}`, {
      name,
      harga,
      id_size: ukuran,
      url_image: fullNameImage,
    })
    .then((response) => {
      res.redirect("/?success=true&message=Data berhasil diubah");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  update,
  handleUpdate,
};
