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
        address: "1004 New York Avenue",
        city: "New York",
        state: "NY",
        country: "United States",
        lat: 38.8977,
        lng: 77.0365,
        name: 'Small home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 650
      },
      {
        ownerId: 1,
        address: "5500 Lost",
        city: "Houston",
        state: "TX",
        country: "United States",
        lat: 39.8977,
        lng: 79.0365,
        name: 'Small home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 1000
      },
      {
        ownerId: 2,
        address: "4003 Backyard",
        city: "St. Louis",
        state: "Missouri",
        country: "United States",
        lat: 37.2431,
        lng: 115.7930,
        name: 'Large home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 100
      },
      {
        ownerId: 2,
        address: "214 Dandy",
        city: "New York",
        state: "NY",
        country: "United States",
        lat: 36.2431,
        lng: 116.7930,
        name: 'Penthouse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 100
      },
      {
        ownerId: 3,
        address: "236 Stun",
        city: "Las Vegas",
        state: "NV",
        country: "United States",
        lat: 30.0988,
        lng: 110.4353,
        name: "Penthouse",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 230
      },
      {
        ownerId: 3,
        address: "468 Typhoon",
        city: "Chicago",
        state: "Illinois",
        country: "United States",
        lat: 38.0988,
        lng: 118.4353,
        name: "Small house",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200
      },
      {
        ownerId: 4,
        address: "624 Tyrant",
        city: "Dallas",
        state: "TX",
        country: "United States",
        lat: 31.0688,
        lng: 130.4353,
        name: "Condominium",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 210
      },
      {
        ownerId: 4,
        address: "22 Roman Street",
        city: "Miami",
        state: "FL",
        country: "United States",
        lat: 30.0688,
        lng: 130.4443,
        name: "Small house",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 150
      },
      {
        ownerId: 5,
        address: "300 County Road",
        city: "Seattle",
        state: "WA",
        country: "United States",
        lat: 40.0388,
        lng: 120.4353,
        name: "Large house",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200
      },
      {
        ownerId: 5,
        address: "500 County Road",
        city: "Dallas",
        state: "TX",
        country: "United States",
        lat: 39.0388,
        lng: 78.4353,
        name: "Large home",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 1000
      },
      {
        ownerId: 3,
        address: "200 Main",
        city: "Abilene",
        state: "TX",
        country: "United States",
        lat: 32.0988,
        lng: 111.4353,
        name: "Large home",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200
      },
      {
        ownerId: 4,
        address: "100 Bright Avenue",
        city: "New York",
        state: "NY",
        country: "United States",
        lat: 39.088,
        lng: 117.41353,
        name: "Condominium",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200
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
      await queryInterface.bulkDelete('Spots')
  }
};
