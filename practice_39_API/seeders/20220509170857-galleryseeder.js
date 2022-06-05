"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_gallery", [
      {
        name: "gambar_mobil",
        url_image: "https://ibb.co/S5r9HwT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "gambar_motor",
        url_image: "https://ibb.co/GHTjm2d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "gambar_orang",
        url_image: "https://ibb.co/2WSQ4hn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
