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
   await queryInterface.bulkInsert('ReviewImages', [
    {
      reviewId: 1,
      url: "imgurl1.com"
    },
    {
      reviewId: 2,
      url: "imgurl2.com"
    },
    {
      reviewId: 3,
      url: "imgurl3.com"
    },
    {
      reviewId: 4,
      url: "imgurl4.com"
    },
    {
      reviewId: 5,
      url: "imgurl5.com"
    },
    {
      reviewId: 6,
      url: "imgurl6.com"
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
    await queryInterface.bulkDelete('ReviewImages')
  }
};
