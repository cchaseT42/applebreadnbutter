'use strict';

/** @type {import('sequelize-cli').Migration} */
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
     await queryInterface.bulkInsert('Bookings',[
      {
        spotId: 1,
        userId: 2,
        startDate: '2022-04-01',
        endDate: '2022-04-03'
      },
      {
        spotId: 2,
        userId: 3,
        startDate: '2022-01-03',
        endDate: '2022-01-09'
      },
      {
        spotId: 3,
        userId: 1,
        startDate: '2022-03-03',
        endDate: '2022-03-06'
      }
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Bookings')
  }
};
