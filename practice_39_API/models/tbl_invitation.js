"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_invitation.init(
    {
      name: DataTypes.STRING,
      place: DataTypes.STRING,
      is_read: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      contact: DataTypes.STRING,
      is_atterdance: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "tbl_invitation",
    }
  );
  return tbl_invitation;
};
