const axios = require('axios')
const {v4: uuidv4} = require("uuid")

function create(req, res) {
    res.render('../views/addCars.ejs');
}

function handleCreateForm(req, res) {
    const { name, harga, ukuran, url_image } = req.body

    // Menghandle gambar dan memindahkan gambar ke folder images
    const image = req.files.url_image
    const randomId = uuidv4()
    const fileExt = image.name.split('.').pop()
    const fullNameImage = randomId + '.' + fileExt
    image.mv(`./public/images/${fullNameImage}`, (err) => {
        if (err) {
            console.log(err)
        }
    })

    // Membuat data baru dengan mengambil data dari form dan menambahkan data gambar
    const urlImage = `http://localhost:8081/images/${fullNameImage}`
    const data = {
        name: name,
        harga: harga,
        url_image: urlImage,
        id_size: ukuran,
    }

    // Upload data ke database using axios
    axios.post('http://localhost:8081/api/cars', data).then((response) => {
        // Redirect to home page with success message
        console.log("Data berhasil ditambahkan")
        res.redirect("/?success=true")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    create,
    handleCreateForm
}