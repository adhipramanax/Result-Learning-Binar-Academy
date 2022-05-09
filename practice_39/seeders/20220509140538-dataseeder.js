"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tbl_invitations", [
      {
        name: "panji",
        place: "kaltim",
        is_read: true,
        email: "panjiadhipramana@gmail.com",
        contact: "082157500944",
        is_atterdance: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "adhi",
        place: "surabaya",
        is_read: true,
        email: "adhipramana@gmail.com",
        contact: "082157500999",
        is_atterdance: false,
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
