const model = require("../models");
const bcrypt = require("bcryptjs");

const User = model.tbl_users;

// create user
async function createUser(req, res) {
  try {
    let createUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    if (!createUser) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: createUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// update user
async function updateUser(req, res) {
  try {
    let updateUser = await User.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        updatedAt: new Date(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateUser) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: updateUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// delete user
async function deleteUser(req, res) {
  try {
    let deleteUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteUser) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: deleteUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// find user by id
async function findUser(req, res) {
  try {
    let findUser = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!findUser) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: findUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// find all users
async function findAllUsers(req, res) {
  try {
    let findAllUsers = await User.findAll();
    if (!findAllUsers) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: findAllUsers,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  findUser,
  findAllUsers,
};
