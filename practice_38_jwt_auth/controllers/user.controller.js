const bcrypt = require("bcryptjs");
const db = require("./../models");
const jwt = require("jsonwebtoken");

const USER_MODEL = db.tbl_users;

async function authUser(req, res) {
  try {
    const body = req.body;
    let salt = "AbUIcdD";

    if (body.email !== "" && body.password !== "") {
      // cari user
      const user = await USER_MODEL.findOne({
        where: {
          email: body.email,
        },
      });

      // match password
      const matchPass = await bcrypt.compare(
        body.password + salt,
        user.password
      );

      if (!matchPass) {
        return res.status(401).json({
          message: "username/password not match!",
        });
      }

      // Generate JWT
      //define secret key generate string
      const secretKey = "21fc6c545a2ce58c20996426d813f90aabBhBbbKJ";
      //define duration expired h=hour, s=second, m=minutes
      const expireKey = "2h";

      //create token
      const tokenAccess = jwt.sign(
        // Define object information in JWT Sign
        // tidak boleh mendefinisikan password pada token
        {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        // Define secretkey
        secretKey,
        // Define options
        {
          //algorithm untuk membantu proses hashing data
          algorithm: "HS256",
          expiresIn: expireKey,
        }
      );

      return res.status(200).json({
        message: "success!",
        token: tokenAccess,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function registerUser(req, res) {
  try {
    const body = req.body;

    let salt = "AbUIcdD";
    const hashPassword = await bcrypt.hash(body.password + salt, 12);

    let dataReq = {
      name: body.name,
      email: body.email,
      password: hashPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    USER_MODEL.create(dataReq)
      .then((data) => {
        res.status(200).json({
          message: "success",
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    console.log(error);
  }
}

async function getAllUser(req, res) {
  try {
    const users = await USER_MODEL.findAll();

    res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  registerUser,
  authUser,
  getAllUser,
};
