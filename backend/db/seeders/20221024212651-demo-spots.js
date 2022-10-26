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
        price: 1000000
      },
      {
        ownerId: 1,
        address: "address6",
        city: "city6",
        state: "state6",
        country: "United States",
        lat: 39.8977,
        lng: 79.0365,
        name: 'house6',
        description: 'this is house6',
        price: 1000000
      },
      {
        ownerId: 2,
        address: "address2",
        city: "city2",
        state: "state2",
        country: "United States",
        lat: 37.2431,
        lng: 115.7930,
        name: 'house2',
        description: 'this is house2',
        price: 100
      },
      {
        ownerId: 2,
        address: "address7",
        city: "city7",
        state: "state7",
        country: "United States",
        lat: 36.2431,
        lng: 116.7930,
        name: 'house7',
        description: 'this is house7',
        price: 100
      },
      {
        ownerId: 3,
        address: "address3",
        city: "city3",
        state: "state3",
        country: "United States",
        lat: 30.0988,
        lng: 110.4353,
        name: "house3",
        description: 'this is house3',
        price: 0
      },
      {
        ownerId: 3,
        address: "address8",
        city: "city8",
        state: "state8",
        country: "United States",
        lat: 38.0988,
        lng: 118.4353,
        name: "house8",
        description: 'this is house8',
        price: 0
      },
      {
        ownerId: 4,
        address: "address4",
        city: "city4",
        state: "state4",
        country: "United States",
        lat: 31.0688,
        lng: 130.4353,
        name: "house4",
        description: 'this is house4',
        price: 0
      },
      {
        ownerId: 4,
        address: "address9",
        city: "city9",
        state: "state9",
        country: "United States",
        lat: 91.0688,
        lng: 139.4353,
        name: "house9",
        description: 'this is house9',
        price: 0
      },
      {
        ownerId: 5,
        address: "address5",
        city: "city5",
        state: "state5",
        country: "United States",
        lat: 32.0388,
        lng: 120.4353,
        name: "house5",
        description: 'this is house5',
        price: 0
      },
      {
        ownerId: 5,
        address: "address10",
        city: "city10",
        state: "state10",
        country: "United States",
        lat: 102.0388,
        lng: 10.4353,
        name: "house10",
        description: 'this is house10',
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
