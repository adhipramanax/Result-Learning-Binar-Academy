const Model = require("../../models");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

async function index(req, res) {
  const { success, message, sort } = req.query;

  axios
    .get(`http://localhost:8081/api/cars${sort ? `?sort=${sort}` : ""}`)
    .then((response) => {
      res.render("../views/index", {
        success: success,
        message: message,
        cars: response.data,
      });
    });
}

function create(req, res) {
  res.render("../views/addCars.ejs");
}

function handleCreateForm(req, res) {
  const { name, harga, ukuran, url_image } = req.body;
  // Menghandle gambar dan memindahkan gambar ke folder images
  const image = req.files.url_image;
  const randomId = uuidv4();
  const fileExt = image.name.split(".").pop();
  const fullNameImage = randomId + "." + fileExt;
  image.mv(`./public/images/${fullNameImage}`, (err) => {
    if (err) {
      console.log(err);
    }
  });

  // Membuat data baru dengan mengambil data dari form dan menambahkan data gambar
  const urlImage = `http://localhost:8081/images/${fullNameImage}`;
  const data = {
    name: name,
    harga: harga,
    url_image: urlImage,
    id_size: ukuran,
  };

  // Upload data ke database using axios
  axios
    .post("http://localhost:8081/api/cars", data)
    .then((response) => {
      res.redirect("/?success=true&message=Data berhasil ditambahkan");
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteCar(req, res) {
  const { id } = req.params;
  axios
    .delete(`http://localhost:8081/api/cars/${id}`)
    .then((response) => {
      res.redirect("/?success=true&message=Data berhasil dihapus");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  index,
  deleteCar,
};
