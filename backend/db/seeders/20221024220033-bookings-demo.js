'use strict';

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
options.tableName = 'Bookings'
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
     await queryInterface.bulkInsert(options,[
      {
        spotId: 1,
        userId: 2,
        startDate: new Date('2023-05-01'),
        endDate: new Date('2023-05-03')
      },
      {
        spotId: 2,
        userId: 3,
        startDate: new Date('2023-06-03'),
        endDate: new Date('2023-06-04')
      },
      {
        spotId: 3,
        userId: 1,
        startDate: new Date('2023-09-04'),
        endDate: new Date('2023-09-04')
      },
      {
        spotId: 5,
        userId: 4,
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-08')
      },
      {
        spotId: 4,
        userId: 5,
        startDate: new Date('2023-08-03'),
        endDate: new Date('2023-08-09')
      },
      {
        spotId: 3,
        userId: 1,
        startDate: new Date('2023-11-11'),
        endDate: new Date('2023-12-12')
      },
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete(options)
  }
};
