
const {Users} = require('./../models');
async function createUser(req, res) {
    try{   
        await Users.create({
            name : req.body.name,
            born : new Date(req.body.born),
            role : req.body.role,
            createdAt : new Date(),
            updatedAt : new Date()
    
        }).then(
            res.status(200).json({
                message : 'successfully'
            })
        )
    } catch(error) {
        res.status(500).send({
            message : error.message
        })
    }
}

module.exports = {
    createUser
}