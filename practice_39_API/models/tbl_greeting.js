'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_greeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_greeting.init({
    id_invitation: DataTypes.NUMBER,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tbl_greeting',
  });
  return tbl_greeting;
};