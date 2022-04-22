'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.hasOne(models.tbl_cars, {
        sourceKey: 'id',
        foreignKey: 'id_size',
        as: 'cars'
      })
    }
  }
  tbl_size.init({
    name_size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_size',
  });
  return tbl_size;
};