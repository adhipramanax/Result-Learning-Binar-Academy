'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('tbl_sizes', [
       {
          name_size: 'small',
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
          name_size: 'medium',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name_size: 'large',
          createdAt: new Date(),
          updatedAt: new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
