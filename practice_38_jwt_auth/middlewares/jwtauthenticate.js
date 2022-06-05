const jwt = require('jsonwebtoken')

const authJWT = (req, res, next) => {
    const authHeader = req.headers['authorization']

    if(authHeader){
        const token = authHeader.split(' ')[1]
        const secretKey = '21fc6c545a2ce58c20996426d813f90aabBhBbbKJ'
        jwt.verify(token, secretKey, (err, user) => {
            if(err){
                return res.status(403).json({
                    message: err.message
                })
            }

            req.user = user
            next();
        })
    }else{
        res.sendStatus(401)
    }
}

module.exports = authJWT