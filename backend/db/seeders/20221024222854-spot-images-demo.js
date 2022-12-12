'use strict';

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

options.tableName = 'SpotImages'

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
   await queryInterface.bulkInsert(options, [
    {
      spotId: 1,
      url: "http://jane.com/blog/wp-content/uploads/2016/05/1-2.png",
      preview: true
    },
    {
      spotId: 2,
      url: "https://media.cntraveler.com/photos/62a8e81a581aa8cbcc983c34/5:4/w_1000,h_800,c_limit/Airbnb%2043715467%202.jpg",
      preview: true
    },
    {
      spotId: 3,
      url: "https://www.fodors.com/wp-content/uploads/2019/08/airbnb-hero-.jpg",
      preview: true
    },
    {
      spotId: 4,
      url: "https://media.cntraveler.com/photos/5ea354e75e5dc70008d054b9/16:9/w_2560%2Cc_limit/24912891-australia-3.jpg",
      preview: true
    },
    {
      spotId: 5,
      url: "https://i.insider.com/5ef604433ad8617a6e33b6b8?width=700",
      preview: true
    },
    {
      spotId: 6,
      url: "https://media.architecturaldigest.com/photos/62b6036de8be957a9ea4ccac/master/w_1600%2Cc_limit/The%2520Boot%2520-%2520New%2520Zealand.jpg",
      preview: true
    },
    {
      spotId: 7,
      url: "https://image.cnbcfm.com/api/v1/image/105997320-1561994865335beautiful-slc-home_t20_jx0q9v.jpg?v=1561994875",
      preview: true
    },
    {
      spotId: 8,
      url: "https://www.travelperk.com/wp-content/uploads/airbnb-scaled.jpg",
      preview: true
    },
    {
      spotId: 9,
      url: "https://static.onecms.io/wp-content/uploads/sites/34/2021/12/06/airbnb-fithian-illinois-1221.jpeg",
      preview: true
    },
    {
      spotId: 10,
      url: "https://www.travelandleisure.com/thmb/AC91vkroQ9L91iuFnM8mXW0sXJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sonny-and-cher-CELEBHOME1219-bf4059e3d83c46af93f025b84d6cb37d.jpg",
      preview: true
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/5e05a3c8-91fc-430d-a024-57e7c5937c90.jpg?im_w=720",
      preview: true
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-583513502421446476/original/df54591f-5473-43bc-ac84-6826a197e0b3.jpeg?im_w=720",
      preview: true
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
    await queryInterface.bulkDelete(options)
  }
};
