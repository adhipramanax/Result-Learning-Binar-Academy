"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_gallery.init(
    {
      name: DataTypes.STRING,
      url_image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "tbl_gallery",
    }
  );
  return tbl_gallery;
};
