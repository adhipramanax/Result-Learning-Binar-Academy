const Model = require('../../models');
const axios = require('axios');

async function index(req, res) {
    axios.get("http://localhost:8081/api/cars").then(response => {
        res.render('../views/index', {
            cars: response.data
        });
    });
}

module.exports = {
    index
}