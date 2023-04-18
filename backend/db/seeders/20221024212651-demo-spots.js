'use strict';

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

options.tableName = 'Spots'

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
        ownerId: 1,
        address: "1004 New York Avenue",
        city: "New York",
        state: "NY",
        country: "United States",
        lat: 38.8977,
        lng: 77.0365,
        name: 'Backyard Treehouse',
        description: `Welcome to our cozy backyard treehouse! Nestled amongst the trees in our peaceful garden, this unique accommodation offers a tranquil escape from the hustle and bustle of the city.
        The treehouse is handcrafted from reclaimed materials and boasts a charming rustic aesthetic. Inside, you'll find a comfortable queen-sized bed with crisp linens and fluffy pillows. Large windows offer stunning views of the surrounding greenery, and a skylight allows you to stargaze from the comfort of your bed.
        The treehouse is equipped with electricity and heating, ensuring you'll be comfortable no matter the season. For added convenience, we've included a mini-fridge, coffee maker, and electric kettle, as well as a selection of teas and coffee. You'll also have access to a private half-bathroom just steps away from the treehouse.
        Outside, a wooden deck provides the perfect spot to enjoy your morning coffee or soak up the afternoon sun. We've also included a small table and chairs where you can enjoy a meal or play a game of cards. In the evening, relax around the fire pit and roast marshmallows under the stars.
        Our backyard treehouse is the perfect choice for nature lovers, couples, and anyone looking for a unique and memorable experience. We can't wait to welcome you!`,
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
        description: `Welcome to our secluded home, tucked away on 20 acres of private property! If you're looking for a peaceful and private getaway, you've found it.
        The home itself is modern and spacious, with high ceilings and large windows that flood the space with natural light. The open-plan living area features comfortable seating, a cozy fireplace, and a fully-equipped kitchen with everything you need to prepare meals.
        The bedroom is a peaceful oasis, with a comfortable king-sized bed and luxurious linens. Large windows provide views of the surrounding forest and mountains, and the en-suite bathroom includes a large bathtub and separate shower.
        Step outside onto the private deck and take in the breathtaking views of the surrounding wilderness. Relax in the comfortable outdoor seating area, or fire up the barbecue grill and enjoy a meal al fresco. A private hot tub on the deck offers the perfect spot to unwind and soak in the peace and tranquility of your surroundings.
        Explore the 20 acres of private property that surround the home, with hiking trails, a small creek, and stunning views of the mountains. Wildlife sightings are common, with deer, elk, and even the occasional black bear or mountain lion making an appearance.
        This secluded home is the perfect choice for couples, solo travelers, and anyone looking for a peaceful retreat in the heart of nature. We can't wait to welcome you!
        Note: The home is accessible via a steep gravel road and may require a vehicle with 4-wheel drive or chains in the winter months.
        Please also note that due to the secluded nature of the property, there is limited cell phone reception and no Wi-Fi. We encourage guests to unplug and enjoy the peaceful surroundings.` ,
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
        name: 'Private Property | Unique | Pool | Dog friendly',
        description: `Welcome to our stunning private property located in the heart of St. Louis! Our spacious home is the perfect choice for families or groups looking for a luxurious and comfortable getaway.
        Step inside and you'll be greeted by an inviting and beautifully decorated living space. The open-plan living area features comfortable seating, a large flat-screen TV, and a fully-equipped kitchen with modern appliances and everything you need to prepare meals.
        The home boasts four spacious bedrooms, each with comfortable beds and luxurious linens. The master bedroom features a king-sized bed and an en-suite bathroom with a large soaking tub and a separate shower.
        One of the highlights of this property is the private swimming pool in the backyard. Spend your days lounging by the pool, soaking up the sun, and enjoying the beautiful St. Louis weather. The backyard also includes a comfortable outdoor seating area and a barbecue grill, making it the perfect spot for al fresco dining.
        Located in a quiet and peaceful neighborhood, our property is just minutes from all the best that St. Louis has to offer. From world-class museums and cultural attractions to top-rated restaurants and shopping, you'll find everything you need just a short drive away.
        Whether you're planning a family vacation or a weekend getaway with friends, our private property is the perfect choice. Book your stay today and get ready to make some unforgettable memories in St. Louis!
        Note: Pool access is seasonal and may be limited during the winter months.`,
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
        name: 'Suburb | Three Bedrooms | Backyard',
        description: `Welcome to our charming house in Queens, New York! Our home offers a cozy and comfortable retreat, perfect for your next vacation or business trip. Situated in a peaceful neighborhood, our house is just a short drive from all of the attractions that Queens and New York City have to offer.
        Step inside and you'll find a warm and inviting living area, complete with a comfortable sofa and a flat-screen TV. The fully equipped kitchen boasts a gas stove and all the necessary cookware and utensils, perfect for whipping up a delicious meal. The dining area is adjacent to the kitchen, providing a convenient space to enjoy your culinary creations.
        The home features three bedrooms, each with a comfortable bed and plenty of closet space. The master bedroom has a queen-sized bed and an en-suite bathroom, while the other two bedrooms share a full bathroom.
        Outside, the backyard is a true oasis, featuring a private patio area with outdoor seating, perfect for al fresco dining or enjoying your morning coffee. The gas grill makes it easy to cook up your favorite barbecue dishes, and the fenced-in yard provides plenty of privacy and space for the kids or your furry friends to run around.
        Conveniently located just a short drive from all of the attractions that Queens and New York City have to offer, including Citi Field, the US Open Tennis Center, and Flushing Meadows Corona Park, our house is the perfect home base for your next trip to the Big Apple.
        Book now and experience the ultimate in comfort and convenience at our charming house!`,
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
        description: `Welcome to our stunning house in Las Vegas, the perfect home base for your next trip to Sin City! Our luxurious and spacious house offers a comfortable and stylish retreat, with all the amenities you need for an unforgettable vacation.
        Step inside and you'll find a beautifully decorated living area, complete with comfortable sofas, a large flat-screen TV, and plenty of natural light. The fully equipped kitchen boasts modern appliances and all the necessary cookware and utensils, perfect for whipping up a delicious meal. The adjacent dining area provides a convenient space to enjoy your culinary creations.
        The home features four bedrooms, each with a comfortable bed and plenty of closet space. The master bedroom is a true oasis, with a king-sized bed, a large flat-screen TV, and an en-suite bathroom complete with a luxurious soaking tub and a separate walk-in shower. The other three bedrooms share two full bathrooms.
        Outside, the backyard is a true paradise, featuring a sparkling private pool and spa, plenty of outdoor seating and lounging areas, and a gas grill for cooking up your favorite barbecue dishes. The covered patio area provides shade and comfort, while the pool deck is the perfect spot for soaking up the sun and enjoying the beautiful Las Vegas weather.
        Located just a short drive from all of the attractions that Las Vegas has to offer, including the famous Las Vegas Strip, our house is the perfect home base for your next trip to Sin City. Whether you're looking for a relaxing retreat or an exciting adventure, our luxurious house is the perfect place to call home during your next trip to Las Vegas.
        Book now and experience the ultimate in luxury and convenience at our stunning house in Las Vegas!`,
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
        name: "Boot Shaped House | Novelty | Lighthearted",
        description: `Welcome to our unique and cozy boot-shaped house in the heart of Chicago! This one-of-a-kind property is sure to make your stay in the Windy City an unforgettable experience.
        As you approach the house, you'll immediately notice its distinctive shape, resembling a stylish and elegant boot. The exterior of the house is a beautiful blend of traditional and modern architecture, with large windows and brick accents. Inside, you'll find a comfortable and inviting living space that is perfect for families, couples, or solo travelers.
        The living room is spacious and bright, with plenty of natural light streaming in through the large windows. The decor is warm and welcoming, with plush couches and chairs, a fireplace, and a large flat-screen TV. The kitchen is fully equipped with modern appliances and everything you need to prepare your favorite meals.
        Upstairs, you'll find two bedrooms, each with its own unique charm. The master bedroom features a comfortable queen-sized bed, while the second bedroom has two twin beds, perfect for children or friends traveling together. The bathroom is modern and well-appointed, with a large shower and plenty of fluffy towels.
        One of the most exciting features of this house is its boot-shaped design. From the moment you step inside, you'll feel like you're living in a fairytale. The unique shape of the house gives it a whimsical and playful feel, and you'll find yourself enchanted by the little details that make it truly special.
        Located in the heart of Chicago, this house is the perfect base for exploring all the city has to offer. Whether you're interested in museums, shopping, dining, or nightlife, you'll find plenty to keep you entertained. And when you're ready to relax, there's no better place to do it than in the comfort of this charming and delightful boot-shaped house.`,
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
        name: "Condominium | Dallas | Patio ",
        description: `Welcome to our stylish and modern condo! This sleek and sophisticated property is the perfect choice for travelers looking for a luxurious and comfortable stay in the heart of the city.
        The open-concept living area is bright and spacious, with plenty of natural light and contemporary furnishings. The living room features comfortable seating, a large flat-screen TV, and floor-to-ceiling windows that offer stunning views of the city. The dining area seats four and is perfect for a meal with friends or family.
        The kitchen is fully equipped with high-end appliances, including a refrigerator, stove, microwave, and dishwasher, as well as all the cooking utensils and dishes you need to prepare your favorite meals.
        The bedroom is chic and comfortable, with a plush queen-sized bed and luxurious linens. The bathroom is well-appointed with modern fixtures and features a shower/tub combination.
        One of the best features of this property is its location. Situated in the heart of downtown Dallas, this condo is just steps away from some of the city's top attractions, including museums, theaters, restaurants, and shopping centers.
        Guests of the condo also have access to a range of amenities, including a fitness center, outdoor pool, and barbecue area, making it the perfect place to relax and unwind after a day of exploring the city.
        Overall, this modern and stylish condo offers the perfect combination of comfort and convenience in the heart of Dallas.`,
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
        description: `Welcome to our charming and cozy Miami home! This lovely property is the perfect choice for travelers looking for a comfortable and affordable stay in the heart of Miami.
        As you step into the home, you'll be greeted by a bright and airy living room, complete with comfortable seating and a large flat-screen TV. The space is decorated in a colorful and vibrant style that reflects the energy and spirit of Miami.
        The kitchen is fully equipped with all the necessary appliances, including a refrigerator, stove, microwave, and coffee maker. The dining area is located adjacent to the kitchen and features a table that seats four, making it the perfect spot for a family meal or a game night with friends.
        The bedroom is cozy and inviting, with a comfortable queen-sized bed and plenty of storage space for your belongings. The bathroom is well-appointed with modern fixtures and features a shower/tub combination.
        One of the best things about this property is its location. Situated in a quiet and friendly neighborhood, it's just a short drive from some of Miami's top attractions, including beaches, restaurants, and shopping centers. Guests can also enjoy easy access to public transportation, making it easy to explore the city without a car.
        Outside, the property features a lovely fenced-in yard with plenty of space to relax and soak up the Florida sunshine. There's also a small patio area with outdoor seating, making it the perfect spot for an al fresco meal or a morning cup of coffee.
        Overall, this charming and cozy Miami home is the perfect choice for travelers looking for a comfortable and affordable stay in the heart of Miami.`,
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
        name: "Large Home | Private Property | Pond",
        description: `Welcome to our stunning and spacious Seattle home, nestled on a beautiful property that features a serene pond with a private dock. This luxurious and well-appointed property is the perfect choice for travelers looking for a comfortable and relaxing stay in the heart of the Pacific Northwest.
        As you step into the home, you'll be greeted by a grand and welcoming foyer, which leads into a spacious and light-filled living room. The living room features comfortable seating, a cozy fireplace, and large windows that offer breathtaking views of the surrounding landscape.
        The kitchen is a chef's dream, fully equipped with high-end appliances, including a gas range and double ovens. The adjacent dining room features a large table that seats ten, making it the perfect spot for a family dinner or a festive gathering with friends.
        The bedrooms are comfortable and inviting, with plush bedding and plenty of storage space for your belongings. The bathrooms are modern and well-appointed, featuring luxury fixtures and spacious showers.
        But the real highlight of this property is the serene pond with its private dock. Guests can enjoy fishing, kayaking, or simply relaxing on the dock with a good book. The pond is also home to a variety of wildlife, including ducks and herons, making it the perfect spot for birdwatching.
        Outside, the property features a large and lush lawn, perfect for playing lawn games or hosting a picnic. The patio area features comfortable seating and a gas grill, making it the perfect spot for outdoor entertaining.
        Overall, this stunning and spacious Seattle home is the perfect choice for travelers looking for a luxurious and relaxing stay in the Pacific Northwest. The beautiful pond with its private dock, as well as the well-appointed interior and stunning surrounding landscape, make this property truly unforgettable.`,
        price: 200
      },
      {
        ownerId: 5,
        address: "684 Typhoon",
        city: "Seattle",
        state: "WA",
        country: "United States",
        lat: 39.0388,
        lng: 78.4353,
        name: "Mountainside | Nature ",
        description: `Welcome to our beautiful mountain side home in Seattle, a true nature lover's paradise! Nestled amidst the serene Cascade Mountains, our home offers stunning views of the surrounding wilderness that will take your breath away.
        As soon as you step inside, you'll be greeted with a warm and inviting interior, featuring plenty of natural wood and stone accents that perfectly complement the natural surroundings. The large windows throughout the home allow you to take in the panoramic views from every room, while letting in plenty of natural light.
        Our home comfortably sleeps up to six guests, with three cozy bedrooms and two full bathrooms. The spacious living room is perfect for lounging and relaxing, and features a cozy fireplace for those chilly mountain nights. The fully-equipped kitchen is perfect for preparing delicious meals, and the adjacent dining area offers ample seating for everyone.
        Outside, you'll find plenty of space to explore and unwind. The expansive deck offers breathtaking views of the surrounding mountains and forests, and is the perfect spot for a morning cup of coffee or an evening glass of wine. There's also a grill for those who love to cook and dine al fresco.
        Our mountain side home is conveniently located just a short drive from downtown Seattle, so you can enjoy all the city has to offer while still being immersed in nature. Whether you're looking for a quiet escape or an action-packed adventure, our home is the perfect base for your Seattle vacation. Book now and experience the best of both worlds!`,
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
        name: "Pod | Unique",
        description: `Welcome to our unique pod home, where minimalist living meets futuristic design! This cozy and compact pod is perfect for travelers who are looking for a truly unique and memorable experience.
        As soon as you step inside, you'll be greeted with a sleek and modern interior, featuring a comfortable bed and a large window that provides plenty of natural light. The minimalist design of the pod is intentional, and creates a sense of calm and serenity that will help you relax and unwind.
        While the pod itself may be compact, it comes equipped with everything you need for a comfortable stay, including luxurious linens and towels, as well as complimentary toiletries. And with a large window offering breathtaking views of the surrounding area, you'll never feel cramped or claustrophobic.
        But what really sets our pod home apart is its futuristic design. The pod is made of cutting-edge materials and features state-of-the-art technology that will make you feel like you're living in the future. From the touchpad controls to the LED lighting, every detail has been carefully thought out to create a truly unique and memorable experience.
        Located in a quiet and peaceful neighborhood, our pod home is the perfect place to relax and unwind after a long day of exploring. And with easy access to public transportation, you can be in the heart of the city in just minutes.
        If you're looking for a one-of-a-kind travel experience that you'll never forget, book your stay in our futuristic pod home today!`,
        price: 200
      },
      {
        ownerId: 4,
        address: "350 County Rd",
        city: "None",
        state: "Montana",
        country: "United States",
        lat: 39.088,
        lng: 117.41353,
        name: "Isolated | Nature | Patio area",
        description: `Escape to our beautiful home on a large private property, where you'll be surrounded by nature and wildlife at every turn. The highlight of this stunning property is undoubtedly the expansive patio area, where you can relax and unwind while taking in the breathtaking views and watching the local wildlife.
        The interior of the home is warm and inviting, with plenty of natural light and rustic accents that perfectly complement the natural surroundings. The fully-equipped kitchen is perfect for cooking up a delicious meal, while the spacious living room is the ideal spot for curling up with a good book or enjoying a movie with friends and family.
        With three bedrooms and two bathrooms, our home is perfect for families or groups of friends traveling together. And with plenty of outdoor space to explore, you'll never feel cramped or crowded.
        But what really sets this property apart is its stunning natural surroundings. From the expansive patio area, you can watch for deer, elk, and other local wildlife as they roam through the property. And with plenty of hiking trails and outdoor activities nearby, there's never a shortage of things to do and see.
        Whether you're looking for a peaceful retreat or a base camp for exploring the great outdoors, our private property is the perfect place to call home during your stay in the area. Book your stay today and experience the beauty of nature like never before!`,
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
      await queryInterface.bulkDelete(options)
  }
};
