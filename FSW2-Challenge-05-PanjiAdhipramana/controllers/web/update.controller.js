const Model = require('../../models');
const Car = Model.tbl_cars;

// TODO: Kurang delete sama edit
// TODO: link refrensi https://gitlab.com/binar.rekaa31/example-structure-express-ejs

async function update(req, res) {
    const { id } = req.params;

    const data = await Car.findOne({
        where: {
            id: id
        }
    })
    res.render('../views/updateCars.ejs', data.dataValues);
}

module.exports = {
    update
}