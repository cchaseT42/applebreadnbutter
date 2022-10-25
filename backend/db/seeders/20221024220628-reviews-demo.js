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
    */await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1,
        userId: 2,
        review: "this place stinks.",
        stars: 5
      },
      {
        spotId: 1,
        userId: 5,
        review: "this place is alright.",
        stars: 3
      },
      {
        spotId: 2,
        userId: 3,
        review: "this place rules!",
        stars: 1
      },
      {
        spotId: 2,
        userId: 4,
        review: "this place rules!",
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: "this place was alright.",
        stars: 3
      },
      {
        spotId: 3,
        userId: 1,
        review: "this place was alright.",
        stars: 1
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
      await queryInterface.bulkDelete('Reviews')
  }
};
