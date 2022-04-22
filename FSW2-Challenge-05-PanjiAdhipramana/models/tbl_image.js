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
      this.hasOne(models.tbl_cars, {
        sourceKey: 'id',
        foreignKey: 'id_image',
        as: 'cars'
      })
    }
  }
  tbl_image.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    url_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_image',
  });
  return tbl_image;
};