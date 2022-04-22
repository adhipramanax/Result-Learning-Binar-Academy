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
    static associate(models) {
      this.belongsTo(models.tbl_image, {
        targetKey: 'id',
        foreignKey: 'id_image',
        as: 'image'
      })

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
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_cars',
  });
  return tbl_cars;
};