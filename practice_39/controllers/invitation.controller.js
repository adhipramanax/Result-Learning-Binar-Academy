const db = require("../models");

const tbl_invitation = db.tbl_invitation;

async function getInvitations(req, res) {
  try {
    let invite = await tbl_invitation.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!invite) {
      res.status(404).json({
        message: "Invitation not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: invite,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// show all
async function getAllInvitations(req, res) {
  try {
    let invites = await tbl_invitation.findAll({
      where: {
        id_user: req.params.id,
      },
    });

    if (!invites) {
      res.status(404).json({
        message: "Invitations not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: invites,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// create invitation
async function createInvitation(req, res) {
  try {
    let createInvitation = await tbl_invitation.create({
      id_user: req.body.id_user,
      title: req.body.title,
      description: req.body.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!createInvitation) {
      res.status(404).json({
        message: "Invitation not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: createInvitation,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// update invitation
async function updateInvitation(req, res) {
  try {
    let updateInvitation = await tbl_invitation.update(
      {
        title: req.body.title,
        description: req.body.description,
        updatedAt: new Date(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updateInvitation) {
      res.status(404).json({
        message: "Invitation not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: updateInvitation,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// delete invitation
async function deleteInvitation(req, res) {
  try {
    let deleteInvitation = await tbl_invitation.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteInvitation) {
      res.status(404).json({
        message: "Invitation not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: deleteInvitation,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

/**
 * Respone Code Success 200
 * {
 * message: 'Invitations retrieved successfully'
 * data:{
 *      id: 1,
 *      name: 'John Doe',
 *      place: 'New York',
 *      },
 * }
 */

module.exports = {
  getInvitations,
  getAllInvitations,
  createInvitation,
  updateInvitation,
  deleteInvitation,
};
