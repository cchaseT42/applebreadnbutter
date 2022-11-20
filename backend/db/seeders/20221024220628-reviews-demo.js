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
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 5
      },
      {
        spotId: 2,
        userId: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 3
      },
      {
        spotId: 3,
        userId: 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 1
      },
      {
        spotId: 4,
        userId: 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 5
      },
      {
        spotId: 5,
        userId: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 3
      },
      {
        spotId: 6,
        userId: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 1
      },
      {
        spotId: 7,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4
      },
      {
        spotId: 8,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 1
      },
      {
        spotId: 9,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 3
      },
      {
        spotId: 10,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 3
      },
      {
        spotId: 11,
        userId: 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 2
      },
      {
        spotId: 12,
        userId: 1,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 5
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
