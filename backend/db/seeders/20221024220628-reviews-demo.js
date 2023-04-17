'use strict';

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

options.tableName = 'Reviews'

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
    */await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: `I had the most amazing stay at this backyard treehouse! From the moment I arrived, I was blown away by the beautiful garden and the peaceful setting. The treehouse itself is a work of art - I loved the rustic charm and attention to detail. The bed was incredibly comfortable, and I slept soundly with the gentle rustle of leaves and the chirping of birds as my soundtrack.
        The large windows in the treehouse provided breathtaking views of the surrounding greenery, and the skylight was a magical touch - I even caught a glimpse of a shooting star one night! The half-bathroom just steps away from the treehouse was clean and convenient, and I appreciated the thoughtful touches like the mini-fridge and coffee maker.
        The wooden deck outside the treehouse was the perfect spot to enjoy my morning coffee, and I loved spending the evenings around the fire pit roasting marshmallows and gazing at the stars. The hosts were warm and welcoming, and I felt right at home throughout my stay.
        Overall, I would highly recommend this backyard treehouse to anyone looking for a peaceful and unique escape. I'm already dreaming of my next visit!`,
        stars: 5
      },
      {
        spotId: 2,
        userId: 2,
        review: `I recently had the pleasure of staying at this secluded home and it was truly a dream come true! From the moment I arrived, I was blown away by the breathtaking views of the surrounding mountains and forest. The home itself is beautifully appointed and feels like a true retreat from the hustle and bustle of everyday life.
        The open-plan living area is spacious and comfortable, with a cozy fireplace and a fully-equipped kitchen that made cooking a breeze. The bedroom was a peaceful oasis, with a comfortable king-sized bed and luxurious linens that made for a great night's sleep. And let's not forget the amazing en-suite bathroom, which included a large bathtub and separate shower - the perfect way to unwind after a long day of hiking.
        The private deck was one of my favorite features of the home. I loved relaxing in the comfortable outdoor seating area and taking in the stunning views of the mountains. The hot tub was another highlight - it was the perfect spot to relax and soak in the peaceful surroundings.
        I also enjoyed exploring the 20 acres of private property that surround the home. The hiking trails were beautiful and I even caught sight of some wildlife, including a deer and some birds.
        Overall, I would highly recommend this secluded home to anyone looking for a peaceful and luxurious escape in the heart of nature. It was the perfect getaway and I can't wait to return!`,
        stars: 5
      },
      {
        spotId: 3,
        userId: 1,
        review: `I recently had the pleasure of staying at this beautiful private property in St. Louis, and I have to say, it was everything I could have hoped for and more! From the moment I arrived, I felt right at home. The house is spacious and well-appointed, with all of the amenities you could need for a comfortable stay.
        The highlight of the property, of course, is the private swimming pool in the backyard. It was such a treat to be able to take a dip whenever I wanted, and the loungers and patio set made it easy to relax and enjoy the sunshine. I also appreciated the convenience of having a fully equipped kitchen, which allowed me to cook my own meals and save some money on dining out.
        The location was perfect as well - a quiet and peaceful neighborhood that was still just a short drive from all of the attractions that St. Louis has to offer. The owner was also incredibly helpful and responsive, making sure that everything was taken care of during my stay.
        Overall, I would highly recommend this private property to anyone looking for a relaxing and comfortable stay in St. Louis. I would rate it a five out of five and would definitely stay here again in the future.`,
        stars: 5
      },
      {
        spotId: 4,
        userId: 1,
        review: `I recently had the pleasure of staying at this charming house in Queens and it was an absolute delight! The house was cozy and well-appointed, with all the necessary amenities to make for a comfortable stay. The gas stove was a big plus and allowed us to cook up some delicious meals during our stay.
        The backyard was a true oasis and provided a wonderful space for us to relax and enjoy the sunshine. The outdoor patio area was perfect for al fresco dining and the gas grill made it easy to cook up some tasty barbecue dishes. We also appreciated the fenced-in yard, which gave us plenty of privacy and space to let our dog run around.
        The bedrooms were comfortable and well-maintained, with plenty of closet space and all the necessary amenities. The master bedroom was particularly lovely, with a comfortable queen-sized bed and an en-suite bathroom.
        The location was perfect, situated in a quiet and peaceful neighborhood just a short drive from all the attractions that Queens and New York City have to offer. We were able to easily visit Citi Field, the US Open Tennis Center, and Flushing Meadows Corona Park during our stay.
        Overall, I would highly recommend this charming house in Queens for anyone looking for a comfortable and convenient home base during their next trip to New York City. I would rate it a five out of five and would definitely stay here again in the future.`,
        stars: 5
      },
      {
        spotId: 5,
        userId: 2,
        review: `I recently stayed at this stunning house in Las Vegas and it was truly an unforgettable experience! From the moment we walked in, we were blown away by the luxurious and spacious interiors, complete with all the amenities we needed for a comfortable and convenient stay.
        The bedrooms were comfortable and well-appointed, with plenty of closet space and all the necessary amenities. The master bedroom was particularly impressive, with a comfortable king-sized bed and a large en-suite bathroom that was like a spa oasis in itself.
        The outdoor space was truly the highlight of the house, with a beautiful private pool and spa, plenty of outdoor seating and lounging areas, and a gas grill for cooking up delicious meals. We spent many afternoons lounging by the pool, soaking up the sun and enjoying the beautiful Las Vegas weather.
        The location was also perfect, just a short drive from all the attractions that Las Vegas has to offer. We were able to easily visit the famous Las Vegas Strip, as well as other popular attractions like Red Rock Canyon and Hoover Dam.
        Overall, I would highly recommend this stunning house to anyone looking for a luxurious and convenient home base during their next trip to Las Vegas. I would rate it a five out of five and would definitely stay here again in the future.`,
        stars: 3
      },
      {
        spotId: 6,
        userId: 3,
        review: `I recently had the pleasure of staying in this unique and delightful boot-shaped house in the heart of Chicago. From the moment I arrived, I was enchanted by the whimsical design and attention to detail that makes this property truly special.
        The living space is cozy and inviting, with comfortable furniture and plenty of natural light. The kitchen is well-equipped and perfect for preparing meals, and the bedrooms are comfortable and charming. But what really sets this property apart is its distinctive boot shape, which adds a touch of magic to every moment spent inside.
        The location is also ideal for exploring all that Chicago has to offer. Whether you're interested in museums, shopping, dining, or nightlife, you'll find plenty to keep you entertained just steps away from the front door.
        Overall, I can't recommend this property enough. It's the perfect choice for anyone looking for a unique and unforgettable stay in Chicago.`,
        stars: 1
      },
      {
        spotId: 7,
        userId: 5,
        review: `I recently had the pleasure of staying at this stunning and modern Dallas condominium, and it exceeded all of my expectations! From the moment I walked in, I was struck by the sleek and sophisticated design of the space, which was complemented by floor-to-ceiling windows that offered stunning views of the city.
        The living area was comfortable and inviting, with plenty of space to relax and unwind after a busy day exploring the city. The kitchen was fully equipped with everything I needed to cook my own meals, and the dining area was perfect for enjoying a meal with friends.
        The bedroom was spacious and well-appointed, with a cozy bed and luxurious linens that made for a restful night's sleep. The bathroom was clean and modern, with all the necessary amenities.
        One of the best things about this property was its location. Situated in the heart of downtown Dallas, it was just steps away from some of the city's top attractions, including museums, theaters, and restaurants.
        The building itself also offered a range of amenities, including a fitness center, outdoor pool, and barbecue area, all of which made my stay even more enjoyable.
        Overall, I would highly recommend this property to anyone looking for a stylish and comfortable stay in the heart of Dallas. The location, amenities, and design of the condominium all exceeded my expectations, and I would definitely stay here again in the future!`,
        stars: 4
      },
      {
        spotId: 8,
        userId: 5,
        review: `I recently had the pleasure of staying at this charming and cozy Miami home, and it was the perfect choice for my vacation! From the moment I walked in, I felt right at home in this bright and cheerful space.
        The living room was comfortable and inviting, with plenty of seating and a large TV for watching movies. The kitchen had everything I needed to cook my own meals, and the dining area was the perfect spot for a family meal or a game night with friends.
        The bedroom was cozy and comfortable, with a comfortable queen-sized bed that made for a restful night's sleep. The bathroom was clean and well-appointed, with plenty of hot water and modern fixtures.
        One of the best things about this property was its location. Situated in a quiet and friendly neighborhood, it was just a short drive from some of Miami's top attractions, including beaches, restaurants, and shopping centers. I also appreciated the easy access to public transportation, which made it easy to explore the city without a car.
        Outside, the fenced-in yard was a lovely spot to relax and soak up the Florida sunshine. I enjoyed spending time on the small patio area with its outdoor seating, which was the perfect spot for enjoying a morning cup of coffee or an al fresco meal.
        Overall, I would highly recommend this charming and cozy Miami home to anyone looking for a comfortable and affordable stay in Miami. The location, amenities, and cozy vibe of the property all exceeded my expectations, and I would definitely stay here again in the future!`,
        stars: 1
      },
      {
        spotId: 9,
        userId: 4,
        review: `I recently had the pleasure of staying at this amazing Seattle home, and it exceeded all of my expectations! From the moment I arrived, I was blown away by the stunning property and the incredible pond with its private dock.
        The house itself was spacious and well-appointed, with plenty of room for my group of friends to spread out and relax. The living room was a comfortable and inviting space, with a cozy fireplace and large windows that offered breathtaking views of the surrounding landscape.
        The kitchen was a chef's dream, fully equipped with high-end appliances and everything we needed to prepare gourmet meals. The adjacent dining room was the perfect spot for enjoying our meals, with a large table that easily seated all of us.
        The bedrooms were comfortable and spacious, with plush bedding and plenty of storage space for our belongings. The bathrooms were modern and well-appointed, featuring luxury fixtures and spacious showers.
        But the real highlight of this property was the serene pond with its private dock. We spent countless hours fishing, kayaking, and lounging on the dock, taking in the stunning views and enjoying the peace and quiet of the surrounding landscape. We even saw a family of ducks and some herons while we were out on the water!
        Outside, the property was just as amazing, with a large and lush lawn that was perfect for playing games or hosting a picnic. The patio area was the perfect spot for outdoor entertaining, with comfortable seating and a gas grill.
        Overall, I would highly recommend this stunning Seattle home to anyone looking for a luxurious and relaxing stay in the Pacific Northwest. The serene pond with its private dock, as well as the well-appointed interior and stunning surrounding landscape, make this property truly unforgettable. Five stars!`,
        stars: 3
      },
      {
        spotId: 10,
        userId: 4,
        review: `I recently had the pleasure of staying at this stunning mountain side home in Seattle, and I must say, it exceeded all of my expectations! From the moment I arrived, I was blown away by the breathtaking views of the surrounding mountains and forests. The interior of the home was warm, inviting, and beautifully decorated, with plenty of natural wood and stone accents that perfectly complemented the natural surroundings.
        The bedrooms were cozy and comfortable, and the living room was the perfect spot for relaxing after a day of exploring. I especially loved the fireplace, which added a cozy touch to the already inviting space. The fully-equipped kitchen was a dream to cook in, and the adjacent dining area provided plenty of seating for me and my travel companions.
        But what really stood out to me was the expansive deck, which offered the most incredible views I've ever seen. I spent hours out there, soaking in the natural beauty and enjoying the fresh mountain air. The grill was an added bonus, and we enjoyed a few memorable meals out there.
        Overall, I can't recommend this mountain side home enough. It's the perfect spot for anyone looking to escape the hustle and bustle of the city and immerse themselves in nature, while still being just a short drive away from all that downtown Seattle has to offer. Thank you for an unforgettable stay!`,
        stars: 5
      },
      {
        spotId: 11,
        userId: 1,
        review: `I recently had the pleasure of staying in this one-of-a-kind pod home, and I must say, it was an unforgettable experience! As soon as I stepped inside, I was blown away by the sleek and modern design of the pod. Despite its small size, the pod had everything I needed for a comfortable stay, including a comfortable bed and luxurious linens.
        But what really made this pod home stand out was its futuristic design. From the touchpad controls to the LED lighting, every detail had been carefully thought out to create a truly unique and memorable experience. And the large window provided breathtaking views of the surrounding area, making me feel like I was living in the future.
        Located in a peaceful and quiet neighborhood, the pod was the perfect place to relax and unwind after a long day of exploring. And with easy access to public transportation, it was easy to get around and explore the city.
        Overall, I would highly recommend this pod home to anyone looking for a unique and unforgettable travel experience. Whether you're a minimalist at heart or simply looking to try something new, this pod home is sure to exceed your expectations. Thank you for an amazing stay!`,
        stars: 5
      },
      {
        spotId: 12,
        userId: 1,
        review: `I recently had the pleasure of staying at this beautiful home on a large private property, and I must say, it was one of the most amazing travel experiences I've ever had! From the moment I arrived, I was blown away by the stunning natural surroundings and the warm and inviting interior of the home.
        The highlight of my stay was undoubtedly the expansive patio area, where I spent countless hours watching for local wildlife and taking in the breathtaking views. The peaceful and tranquil surroundings were the perfect antidote to the hustle and bustle of everyday life, and I felt completely relaxed and at ease throughout my stay.
        The interior of the home was equally impressive, with plenty of natural light and rustic accents that perfectly complemented the natural surroundings. The fully-equipped kitchen was a joy to cook in, and the spacious living room was the ideal spot for curling up with a good book or enjoying a movie with friends and family.
        The bedrooms were comfortable and cozy, and I slept soundly every night thanks to the peaceful surroundings and comfortable beds. And with plenty of outdoor space to explore, I never felt cramped or crowded, even though I was traveling with a group.
        Overall, I would highly recommend this private property to anyone looking for a peaceful retreat or a base camp for exploring the great outdoors. Thank you for an amazing stay!`,
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
      await queryInterface.bulkDelete(options)
  }
};
