'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_cars', [
      {
        name: 'tesla',
        harga: '99999999',
        id_size: 3,
        id_image: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'inova',
        harga: '1100000',
        id_size: 2,
        id_image: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fortuner',
        harga: '2100000',
        id_size: 1,
        id_image: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sport',
        harga: '5100000',
        id_size: 3,
        id_image: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lamborgini',
        harga: '3100000',
        id_size: 2,
        id_image: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cheprolet',
        harga: '2100000',
        id_size: 1,
        id_image: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'honda',
        harga: '13100000',
        id_size: 1,
        id_image: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'alya',
        harga: '4100000',
        id_size: 1,
        id_image: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'supra',
        harga: '12100000',
        id_size: 2,
        id_image: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'masteng',
        harga: '1300000',
        id_size: 3,
        id_image: 10,
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
