function getAllSize(req, res) {
    res.status(200).json({
        message: 'Success',
        data: []
    });
}

module.exports = {
    getAllSize
}