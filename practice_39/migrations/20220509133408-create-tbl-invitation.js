"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_invitations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      place: {
        type: Sequelize.STRING,
      },
      is_read: {
        type: Sequelize.BOOLEAN,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      contact: {
        type: Sequelize.STRING,
      },
      is_atterdance: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbl_invitations");
  },
};
