'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_image.init({
    name_size: DataTypes.STRING,
    url_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_image',
  });
  return tbl_image;
};