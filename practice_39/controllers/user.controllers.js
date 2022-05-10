const db = require("../models");
const bcrypt = require("bcryptjs");

const tbl_users = db.tbl_users;

// create user
async function createUser(req, res) {
  try {
    let createUser = await tbl_users.create({
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
    let updateUser = await tbl_users.update(
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
    let deleteUser = await tbl_users.destroy({
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

// get user
async function getUser(req, res) {
  try {
    let getUser = await tbl_users.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!getUser) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: getUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// get all users
async function getAllUsers(req, res) {
  try {
    let getAllUsers = await tbl_users.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (!getAllUsers) {
      res.status(404).json({
        message: "Users not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: getAllUsers,
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
  getUser,
  getAllUsers,
};
