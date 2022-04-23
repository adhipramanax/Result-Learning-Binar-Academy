'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // List associations type in sequelize documentation, belongsTo, belongsToMany, hasOne, hasMany,  (hasOneThrough, hasManyThrough)
    static associate(models) {
      this.belongsTo(models.tbl_size,{
        targetKey: 'id',
        foreignKey: 'id_size',
        as: 'size'
      })
    }
  }
  tbl_cars.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    url_image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tbl_cars',
  });
  return tbl_cars;
};