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
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: "1600 Pennsylvania Avenue",
        city: "Washington, DC",
        state: "not one for some reason",
        country: "United States",
        lat: 38.8977,
        lng: 77.0365,
        name: 'The White House',
        description: 'be the president for a day.',
        price: 1000000
      },
      {
        ownerId: 2,
        address: "unknown",
        city: "itself",
        state: "Nevada",
        country: "United States",
        lat: 37.2431,
        lng: 115.7930,
        name: 'Area 51',
        description: 'host is not responsible for what you see. there is nothing to see, though.',
        price: 100
      },
      {
        ownerId: 3,
        address: "742 Evergreen Terrace",
        city: "Springfield",
        state: "We're not supposed to know.",
        country: "United States",
        lat: 30.0988,
        lng: 110.4353,
        name: "Homer's home",
        description: 'not sure where it is, but you can stay there if you find it.',
        price: 0
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
      await queryInterface.bulkDelete('Spots')
  }
};
