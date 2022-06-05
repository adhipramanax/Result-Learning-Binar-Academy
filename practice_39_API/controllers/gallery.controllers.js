const model = require("../models");

const Gallery = model.tbl_gallery;

async function getAllGallery(req, res) {
  try {
    let getAllGallery = await Gallery.findAll({});

    if (!getAllGallery) {
      res.status(404).json({
        message: "Galleries not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: getAllGallery,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// add photo gallery
async function addGallery(req, res) {
  try {
    let addGallery = await Gallery.create({
      name: req.body.name,
      url_image: req.body.url_image,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!addGallery) {
      res.status(404).json({
        message: "Gallery not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: addGallery,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// update gallery
async function updateGallery(req, res) {
  try {
    let updateGallery = await tbl_gallery.update(
      {
        name: req.body.name,
        url_image: req.body.url_image,
        updatedAt: new Date(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateGallery) {
      res.status(404).json({
        message: "Gallery not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: updateGallery,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      data: error,
    });
  }
}

// delete gallery
async function deleteGallery(req, res) {
  try {
    let deleteGallery = await tbl_gallery.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteGallery) {
      res.status(404).json({
        message: "Gallery not found",
      });
    } else {
      res.status(200).json({
        message: "Success",
        data: deleteGallery,
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
  getAllGallery,
  addGallery,
  updateGallery,
  deleteGallery,
};
