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
        address: "address1",
        city: "city1",
        state: "state1",
        country: "United States",
        lat: 38.8977,
        lng: 77.0365,
        name: 'house1',
        description: 'this is house1',
        price: 650
      },
      {
        ownerId: 1,
        address: "address2",
        city: "city2",
        state: "state2",
        country: "United States",
        lat: 39.8977,
        lng: 79.0365,
        name: 'house2',
        description: 'this is house2',
        price: 1000
      },
      {
        ownerId: 2,
        address: "address3",
        city: "city3",
        state: "state3",
        country: "United States",
        lat: 37.2431,
        lng: 115.7930,
        name: 'house3',
        description: 'this is house3',
        price: 100
      },
      {
        ownerId: 2,
        address: "address4",
        city: "city4",
        state: "state4",
        country: "United States",
        lat: 36.2431,
        lng: 116.7930,
        name: 'house4',
        description: 'this is house4',
        price: 100
      },
      {
        ownerId: 3,
        address: "address5",
        city: "city5",
        state: "state5",
        country: "United States",
        lat: 30.0988,
        lng: 110.4353,
        name: "house5",
        description: 'this is house5',
        price: 230
      },
      {
        ownerId: 3,
        address: "address6",
        city: "city6",
        state: "state6",
        country: "United States",
        lat: 38.0988,
        lng: 118.4353,
        name: "house6",
        description: 'this is house6',
        price: 200
      },
      {
        ownerId: 4,
        address: "address7",
        city: "city7",
        state: "state7",
        country: "United States",
        lat: 31.0688,
        lng: 130.4353,
        name: "house7",
        description: 'this is house7',
        price: 210
      },
      {
        ownerId: 4,
        address: "address8",
        city: "city8",
        state: "state8",
        country: "United States",
        lat: 30.0688,
        lng: 130.4443,
        name: "house8",
        description: 'this is house8',
        price: 150
      },
      {
        ownerId: 5,
        address: "address9",
        city: "city9",
        state: "state9",
        country: "United States",
        lat: 40.0388,
        lng: 120.4353,
        name: "house9",
        description: 'this is house9',
        price: 200
      },
      {
        ownerId: 5,
        address: "address10",
        city: "city10",
        state: "state10",
        country: "United States",
        lat: 39.0388,
        lng: 78.4353,
        name: "house10",
        description: 'this is house10',
        price: 1000
      },
      {
        ownerId: 3,
        address: "address11",
        city: "city11",
        state: "state11",
        country: "United States",
        lat: 32.0988,
        lng: 111.4353,
        name: "house11",
        description: 'this is house11',
        price: 200
      },
      {
        ownerId: 4,
        address: "address12",
        city: "city12",
        state: "state12",
        country: "United States",
        lat: 39.088,
        lng: 117.41353,
        name: "house12",
        description: 'this is house12',
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
