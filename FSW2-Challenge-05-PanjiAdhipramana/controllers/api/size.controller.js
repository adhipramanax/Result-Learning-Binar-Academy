const db = require('../../models');

const tbl_size = db.tbl_size;
async function getAllSize(req, res) {
    try {
        let size = await tbl_size.findAll();
        console.log(size)
        res.status(200).json({
            message: 'Success',
            data: size
        })
    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    getAllSize
}