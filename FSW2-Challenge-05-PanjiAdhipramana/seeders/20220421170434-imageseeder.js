'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_images', [
      {
        id: 1,
        url_image: "car01.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        url_image: "car02.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        url_image: "car03.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        url_image: "car04.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        url_image: "car05.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        url_image: "car06.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        url_image: "car07.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        url_image: "car08.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        url_image: "car09.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        url_image: "car10.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        url_image: "car11.min.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        url_image: "car12.min.jpg",
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
