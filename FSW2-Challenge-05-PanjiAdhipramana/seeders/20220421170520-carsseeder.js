'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_cars', [
      {
        name: 'tesla',
        harga: '99999999',
        id_size: 3,
        url_image: 'https://i.ibb.co/rcXbH09/car01-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'inova',
        harga: '1100000',
        id_size: 2,
        url_image: 'https://i.ibb.co/sjMdjy9/car03-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fortuner',
        harga: '2100000',
        id_size: 1,
        url_image: 'https://i.ibb.co/YWhkMDs/car04-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sport',
        harga: '5100000',
        id_size: 3,
        url_image: 'https://i.ibb.co/FgHb5Dg/car05-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lamborgini',
        harga: '3100000',
        id_size: 2,
        url_image: 'https://i.ibb.co/4SQHqwW/car07-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cheprolet',
        harga: '2100000',
        id_size: 1,
        url_image: 'https://i.ibb.co/D5YLK43/car09-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'honda',
        harga: '13100000',
        id_size: 1,
        url_image: 'https://i.ibb.co/3kDWRWt/car11-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'alya',
        harga: '4100000',
        id_size: 1,
        url_image: 'https://i.ibb.co/8Bjjyxj/car14-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'supra',
        harga: '12100000',
        id_size: 2,
        url_image: 'https://i.ibb.co/hDJVfPW/car16-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'masteng',
        harga: '1300000',
        id_size: 3,
        url_image: 'https://i.ibb.co/RhSprBc/car18-min.jpg',
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
